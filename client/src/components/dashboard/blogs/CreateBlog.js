import React, { useState } from "react";

const CreateBlog = ({ setBlogsChange }) => {
  const [title, setTitle] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {

      const id = localStorage.id;
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { title, id };
      const response = await fetch("http://localhost:1000/dashboard/blogs", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();
      console.log('test', parseResponse);

      setBlogsChange(true);
      setTitle(title);
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="bg-red-200 py-10">
      <form className="px-4" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add blog title"
          className="px-5"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="relative left-5 bg-blue-200 border-2 rounded-lg ">Start A New Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;