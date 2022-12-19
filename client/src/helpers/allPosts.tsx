import { getDocs, collection, where, query } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { Post } from '../pages/main/post';

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
    imageUrl: string;
}

export const AllPosts = () => {
    const [user] = useAuthState(auth);
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    
    const postsRef = collection(db, "posts");
    
    const getPosts = async () => {
        const data = await getDocs(postsRef)
        try {
            setPostsList(
                data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]
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
            <Post post={post}/>
        ))}

    </>
    );
};