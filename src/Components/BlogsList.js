import { Link } from 'react-router-dom';

export default function BlogsList(props) {
    // console.log(props.blogs.title);  
    
    return (
        <div className="blog-box">
            
            <h2>{props.blogs.title}</h2>
            {/* <h4>{props.blogs.content}</h4> */}
            <h5>{props.blogs.author}</h5>
            
            <Link to={`/${props.blogs.id}`}>
                <button>Read</button>
            </Link>
        </div> 
    )
    
}