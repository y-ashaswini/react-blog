import BlogsList from './Components/BlogsList';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import UseFetch from './Components/UseFetch';
import BlogDetails from './Components/BlogDetails';

// import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function App() {
  const {data: blogs, load, error} = UseFetch('http://localhost:8000/blogs');
  const allBlogs = blogs && blogs.map((blog)=>(
    <BlogsList blogs={blog} key={blog.id}/>
    ))
  
  return (
      <div>
        <Router>
        <Navbar/>
        {error && <div className="message-display">Encountered error : {error} </div>}
        {load && <div className="message-display">Loading...</div>}    
          <div className='content'>
            <Switch>
              <Route exact path = "/">{allBlogs}</Route>
              <Route exact path = "/add"><Add/></Route>
              <Route exact path = "/:id"><BlogDetails/></Route>
            </Switch>

          </div>
        
      </Router>
    </div>
  )
}