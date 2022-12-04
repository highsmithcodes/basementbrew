import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post } from './post';

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
}

export const Main = () => {
    const [user] = useAuthState(auth);
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");
    
    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostsList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
    <>
        {!user ? (
            <div className="main-default">
                <div className='main-banner'>
                    <div className="banner-content">
                    <div className="left-banner">
                        <h1>Basement Brew</h1>
                        <div className="sub-title">A place to share your beer brewing accomplishments</div>
                    </div>
                    </div>
                </div>
                <div className='split-grid'>
                    <div className='grid-left white-bx'>
                    add gifs here
                    </div>
                    <div className='grid-right white-bx'>
                    </div>
                </div>
            </div>
        ) : ( 
            <>
                <div className='post-collection'>
                    <div className='post-collection-inner'>
                        <div className='user-information'>
                        {user && (
                        <>
                            <img src={user?.photoURL || ""} width="20" height="20" />
                            {user?.displayName}
                        </>
                        )}
                        </div>
                        <div className='post-list'>
                            {postsList?.map((post) => (
                                <Post post={post}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>  
        )}
        
    </>
    );
};