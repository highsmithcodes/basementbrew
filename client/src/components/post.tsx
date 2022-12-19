import { getDocs, collection, where, query } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db, storage } from "../config/firebase";

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
    imageUrl: string;
}

export const Post = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [post, setPost] = useState<Post[] | null>(null);
    const postRef = collection(db, "post");
    const postDoc = query(postRef, where("postId", "==", id));
        
    const getPosts = async () => {
        try{
            // const postToShow = await getDocs(postDoc)
           console.log(id)
            // setPost(postToShow.docs.map((doc) => ({id: doc.data().id ,userId: doc.data().userId, title: doc.data().title, description: doc.data().description, username: doc.data().username, imageUrl: doc.data().imageUrl})));
        } catch (err){
            err
        }
    }

    useEffect(() => {
        getPosts();
    }, []);
  

    return (
        <div className="container border bg-light" style={{ marginTop: 70}}>
            <Post />
        </div>
    );
};