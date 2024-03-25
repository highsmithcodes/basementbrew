import React, { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/20/solid';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/Store';
import { setUserPosts } from '../../store/Store';
import { dynamoDB } from '../../configs/dynamoDBConfig';
import { useMutation } from '@apollo/client';
// import { LIKE_POST_MUTATION } from '../../graphql/mutations';

interface Props {
  post: any;
}

const Like: React.FC<Props> = ({ post }) => {

  return (
    <>
      <div className='flex flex-column content-center'>
        <HeartIcon
          // color={isPostLikedByCurrentUser ? '#ff0000' : '#000'}
          className="h-6 w-5 flex-none"
          aria-hidden="true"
          // onClick={() => handleLike(post)}
        />
        <span className="ml-2">{post.Like}</span>
      </div>
  </>
  );
};

export default Like;


