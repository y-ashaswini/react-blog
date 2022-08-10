import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Add() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, content, author};
        console.log(blog);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("new blog added");
            history.push('/');
        })
    }   

    
    
    return (
        <div className="add-blog">
            <h1>Add Blog Page</h1>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title: </label>
                <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required>
                </input>

                <label>Blog Content: </label>
                <textarea
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    required
                ></textarea>

                <label>Author: </label>
                <input
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                required
                type="text"
                ></input>
            
                <button>Save</button>
            </form>
            
        </div>
    )
}