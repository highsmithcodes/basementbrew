import { getDocs, collection, where, query } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { Post } from './post';
import { YourPostList as AllYourPosts } from '../../helpers/yourPosts';
// Problem with Explore Posts
import { YourExploreList as ExplorePosts } from '../../helpers/explorePosts';
import { AllPosts } from '../../helpers/allPosts';

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
    // imageUrl: string;
}


export const Main = () => {
    const [user] = useAuthState(auth);

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
                        <div className="medium-title">A social media platform for passionate beer brewers.</div>
                    </div>
                    <div className='grid-right white-bx' id="steps">
                        <div className='step'>
                            <div className="num">1</div>
                            <div className="step-details">Write about your recipe</div>
                        </div>
                        <div className='step'>
                            <div className="num">2</div>
                            <div className="step-details">Post it to the site</div>
                        </div>
                        <div className='step'>
                            <div className="num">3</div>
                            <div className="step-details">Connect with others</div>
                        </div>
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
                            <div className='user-img'><img src={user?.photoURL || ""} width="20" height="20" /></div>
                            {user?.displayName}
                        </>
                        )}
                        </div>
                        <div className='post-list'>
                            <div className='h3'>Your Posts</div>
                            <AllYourPosts />
                        </div>
                    </div>
                </div>
                <div className="explore-container">
                    <div className='explore-inner'>
                        <div className='h3'>Explore Posts</div>
                            <ExplorePosts />
                    </div>
                </div>
            </>  
        )}
        
    </>
    );
};