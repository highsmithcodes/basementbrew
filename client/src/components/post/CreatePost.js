import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:1000/posts', {
            method: 'POST',
            headers: {"Content-Type": "application/josn"},
            body: JSON.stringify(post)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })

    }

    return (
        <>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
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
                <label>Blog author:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </>
    )
}

export default CreatePost