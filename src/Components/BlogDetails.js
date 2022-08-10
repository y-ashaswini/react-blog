import { useParams } from "react-router-dom";
import UseFetch from '../Components/UseFetch';
import { Link } from 'react-router-dom';    
import { useHistory } from 'react-router-dom';

export default function BlogDetails() {
    const { id } = useParams();
    const {data: blog, load, error} = UseFetch("http://localhost:8000/blogs/"+id);

    
    const history = useHistory();

    const handleDelete = ()=> {
        fetch('http://localhost:8000/blogs', {
            method: 'DELETE'
        }).then(()=> {
            console.log('blog deleted successfully');
            history.push('/');
        })

    }

    return (
        <div className="blog-details">
            {load && <div className="message-display">Loading Blog Content...</div>}
            {error && <div className="message-display">{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h5>Written by {blog.author}</h5>
                    <p>{blog.content}</p>
                    <Link to="./">
                        <button>
                            Back
                        </button>
                    </Link>
                    <button onClick={handleDelete}>Delete</button>
                </article>
                
            )}

        </div>
    )
}