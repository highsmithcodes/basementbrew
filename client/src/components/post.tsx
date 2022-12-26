import { getDocs, collection, where, query, doc, getDoc, onSnapshot, DocumentData } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, storage } from "../config/firebase";
import { Post as IPost } from "../pages/main/main";


export const Post = () => {
  const [post, setPost] = useState()
  const {id} = useParams()
  const [postWithId, setPostWithId] = useState<IPost[] | null>(null);

  // useEffect(() => {
  //   const postQuery = query(collection(db, 'posts'), where('postId', '==', id))
  //   onSnapshot(postQuery, (post) => {
  //     post.forEach(post => {
  //       setPost({ data: post.data(), postDocId: post.id })
  //     })
  //   })
  // }, [id])



    return (
        <div className="container border bg-light">
          <h1>Test</h1>
        </div>
    );
};