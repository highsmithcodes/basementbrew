import { FirebaseError } from "firebase/app";
import { addDoc, collection, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { connectStorageEmulator, getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../config/firebase";
import { Post as IPost } from "./main";
import { useNavigate } from "react-router-dom";


interface Props {
    post: IPost;
}

interface Like {
    likeId: string;
    userId: string;
}


export const Post = (props: Props) => {
    const {post} = props;
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [urlImg, setUrlImg] = useState("");
    const [likes, setLikes] = useState<Like[] | null>(null);
    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async() => {
        const data = await getDocs(likesDoc)
        setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})));
    }

    const addLike = async () => {
        try{
            const newDoc = await addDoc(likesRef, {userId: user?.uid, postId: post.id });
            if(user) {
                setLikes((prev) => prev ? [...prev, {userId:user?.uid, likeId: newDoc.id }] : [{userId:user?.uid, likeId: newDoc.id}])
            }
        } catch (err) {
            console.log(err);
        }
    };

    const removeLike = async () => {
        try{
            const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
            const likeToDeleteData = await getDocs(likeToDeleteQuery)
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, "likes", likeId);
            await deleteDoc(likeToDelete);

            if(user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId))
            }
        } catch (err) {
            console.log(err);
        }
    };

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    const viewPost = () => {
        navigate(`/post/${post.id}`);
    };


    const retrievePhoto = async () => {
        const starsRef = ref(storage, `images/${post.imageUrl}`)
        await getDownloadURL(starsRef).then(url => {
        setUrlImg(url)
        })
    }

    const postsRef = collection(db, "posts");

    const deletePost = async () => {
        try {
            const postToDeleteQuery = query(postsRef, where("userId", "==", user?.uid));
            const postToDeleteData = await getDocs(postToDeleteQuery)
            const postId = postToDeleteData.docs[0].id;
            const postToDelete = doc(db, "posts", postId);
            await deleteDoc(postToDelete);
            navigate(0)
        } catch(err) {
            console.log(err);
        }
    }

    // Get posts matching user id
    const isUsersPost = post.userId == user?.uid;

    useEffect(() =>{
        // updateUrl();
        retrievePhoto();
        getLikes();
    }, []);

    return (
        <div className="post">
            <div className="post-header">
                <p className="post-username">@{post.username}</p>
                {isUsersPost ? (
                <button onClick={deletePost} className="remove"><>&#x2715;</></button>
                ) : ( 
                    null
                )}
            </div>
    
            <img src={urlImg} style={{height: 100, width:100}} id="image"/>
            <div className="title">{post.title}</div>
            <div className="body">{post.description}</div>

            <div className="post-footer">
                <div className="comment-details">
                    <button><>&#128172;</></button>
                </div>
                <div className="like-details">
                    <button onClick={hasUserLiked ? removeLike : addLike}>{hasUserLiked ? <>&#x2665;</> : <>&#9825;</> }</button>
                    {likes && <p>{likes?.length}</p>}
                </div>
            </div>
            <div className="comment">
                <button onClick={viewPost}>View Post{post.id}</button>
            </div>
        </div>
    );
};