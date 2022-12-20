import { getDocs, collection, where, query } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db, storage } from "../config/firebase";

// export interface Post {
//     id: string;
//     userId: string;
//     title: string;
//     description: string;
//     username: string;
//     imageUrl: string;
// }

export const Post = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    // const [post, setPost] = useState<Post[] | null>(null);
    // const postRef = collection(db, "post");
    // const postDoc = query(postRef, where("postId", "==", id));
    const [movie, setMovie] = useState([]);
    const getPost = async () => {
        const postToShow = await getDocs(collection(db, "posts"))
        const firebaseMovies = [];
        querySnapshot.forEach((doc) => {
            firebaseMovies.push({...doc.data(), id:doc.id});
        });
        const movieData = firebaseMovies.filter((item) => item.id === id);
        setMovie(movieData[0])

    }

    useEffect(() => {
        getPost();
    }, [id]);
  

    return (
        <div className="container border bg-light" style={{ marginTop: 70}}>
            <Post />
        </div>
    );
};