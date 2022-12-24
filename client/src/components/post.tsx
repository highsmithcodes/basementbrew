import { getDocs, collection, where, query, doc, getDoc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, storage } from "../config/firebase";

export interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

export const Post = () => {
    const { id } = useParams();
    const [postById, setPostById] = useState<Post[] | null>(null);
    const likesRef = collection(db, "posts");
    const likesDoc = query(likesRef, where("id", "==", id));
    
    const getPost = async() => {
    
    const data = await getDocs(likesDoc)
      try {
        setPostById(
            data.docs.map((doc) => ({...doc.data()})) as Post[]
        );
        // It's getting the ID
        console.log(id)
      } catch(err){
          console.log(err)
      }
    }

    useEffect(() =>{
      getPost();
    }, []);
  
    return (
        <div className="container border bg-light">
          {postById && <p>{postById?.length}{postById?.title}</p>}
          {/* {postById?.map((post) => (
            <Post  />
          ))} */}
        </div>
    );
};