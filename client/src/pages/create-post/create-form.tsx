import React, { useRef, useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { addDoc, collection,Firestore,query,Timestamp, where } from 'firebase/firestore';
import { auth, db, storage } from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, uploadString, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
;

interface CreateFormData {
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Timestamp;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // State to store uploaded file
    const [imageUpload, setImageUpload] = useState(null);

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
        imageUrl: yup.string().required("You must add an image."),
    });

    const { 
        register,
        watch,
        handleSubmit, 
        formState: {errors} 
    } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts");

    // 1 Function to upload the image
    // This should work
    // Love async await
    const uploadImage = async () => {
        if (imageUpload == null) return;

        // Reformat imageUpload its data is in File Format
        // Maybe pass image into a blob
        const imageRef = ref(storage, `images/${imageUpload}`); 
        // let imagess = await fetch(imageUpload);
        // let blob = await imagess.blob();

        const metadata = {
            contentType: 'image/jpeg',
        };
        await uploadBytes(imageRef, imageUpload, metadata).then((snapshot) => {
            console.log('image uploaded', );
        });
    }

    const onCreatePost = async (data:CreateFormData) => {
        // Uploading the image
        uploadImage();
        // adding to the doc
        await addDoc(postsRef, {
            ...data,
            imageUrl: imageUpload,
            username: user?.displayName,
            userId: user?.uid,
        });
        navigate("/")
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
                {/* e.target.files[0].name instead of calling name from function level */}
                <input 
                    type="file"
                    accept="image/*,.jpeg,.jpg,.png"
                    id="form-control"
                    {...register('imageUrl' , {
                        onChange: (e) => setImageUpload(e.target.files[0])
                    })}
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