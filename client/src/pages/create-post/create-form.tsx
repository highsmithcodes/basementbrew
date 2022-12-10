import React, { useRef, useState } from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db, storage } from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";


interface CreateFormData {
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Timestamp;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
        imageUrl: yup.string().required("You must add an image."),
    });

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data:CreateFormData) => {

        // Need to define what image contains since output is 
        // [ object FileList ] 

        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate("/")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input 
                    type="file"
                    accept="image/*"
                    className="form-control"
                    {...register("imageUrl")}
                    placeholder="Image..."
                />
                <p style={{color:"red"}}>{errors.imageUrl?.message}</p>
                <input placeholder="Title..." {...register("title")} />
                <p style={{color:"red"}}>{errors.title?.message}</p>
                <textarea placeholder="Description..." {...register("description")} />
                <p style={{color:"red"}}>{errors.description?.message}</p>
                <input type="submit" />
            </form>
        </div>
    )
};