import { getDocs, collection, where, query, deleteDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { Post } from '../pages/main/post';
import { useForm, SubmitHandler } from "react-hook-form";


export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
    imageUrl: string;
}

export const YourPostList = () => {
    const [user] = useAuthState(auth);
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    
    const postsRef = collection(db, "posts");
    
    const getPosts = async () => {
        // Excluding Your Post
        const excludingPosts = query(postsRef, where("userId", "==", user?.uid));
        const excludingData = await getDocs(excludingPosts)
        try {
            setPostsList(
                excludingData.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]
            );
        } catch(err){
            console.log(err)
        }
    }
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
    <>

        {postsList?.map((post) => (
            <Post post={post} />
        ))}

    </>
    );
};