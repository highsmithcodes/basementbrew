import { useState } from 'react';
import axios from 'axios'


const AddPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = e => {
        e.preventDefault()
        createPost({title, body, id, username})
        setTitle('')
        setBody('')
    }

    const createPost = async (post) => {
        try {
            const res = await axios.post('http://localhost:1000/post/posttodb', post)
            console.log('res:', res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Add a New Blog</h2>
            <form onSubmit={ onSubmit }>
                <label>Blog Item</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button>Add Blog Post</button>
            </form>
        </>
    )
}

export default AddPost