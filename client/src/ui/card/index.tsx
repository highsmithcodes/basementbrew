import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Like from '../../components/like';

type Post = {
  PostID: number;
  BeerType: string;
  Description: string;
};

type CardProps = {
  post: Post | null;
};

export const CardSkeletonLoader = () => {
  return (
    <div className="w-1/2 m-0 rounded-3xl bg-white drop-shadow-md px-12 py-6 mb-4 shadow p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="flex flex-col space-y-3">
            <div className="h-2 bg-slate-700 rounded col-span-1 w-3/12"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1 w-3/12"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1 w-3/12"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1 w-3/12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({ post }: CardProps) => {
  return (
    <div className="w-full mx-2 md:w-1/2 lg:w-1/2 xl:w-1/2 m-0 rounded-3xl bg-white drop-shadow-md px-8 py-4 mb-4">
      <h2 className="text-lg font-semibold">{post?.BeerType}</h2>
      <p>{post?.Description}</p>
      <div>
        <Like post={post} />
      </div>
      <Link to={`/brews/${post?.PostID}`} className="text-black mt-2 inline-block">
        Read More
      </Link>
    </div>
  );
};

export default Card;