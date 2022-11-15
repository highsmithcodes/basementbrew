import React, { useState, useEffect } from 'react';
import EditBlog from './EditBlog.js';

const ListBlog = ( { allBlogs, setBlogsChange }) => {
  const [blogs, setBlogs] = useState([ ]);

  async function deleteBlog(id) {
    console.log(id)
    try {
      await fetch(`http://localhost:1000/dashboard/blogs/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token }
      });

      setBlogs(blogs.filter(blog => blog.blog_id !== id));
    } catch (err) {
      console.error(err.message, 'ERROR: ListBlog component - deleteBlog function');
    }
  }

  useEffect(() => {
    setBlogs(allBlogs)
  }, [ allBlogs ]);

  return (
    <>
      <div>
        <ul>
          {/* {
            blogs.map((blog) => {
              return (

              <li key={blog.blog_id}>
                <h2>{blog.blog_title}</h2>
                <div>
                  <EditBlog blog={blog} setBlogsChange={setBlogsChange} />
                </div>
                <div>
                  <button
                  className="btn btn-danger"
                  onClick={() => deleteBlog(blog.blog_id)}
                  >
                  Delete
                  </button>
                </div>
              </li>
              )
          })} */}
        </ul>
      </div>

    </>
  )
}

export default ListBlog;