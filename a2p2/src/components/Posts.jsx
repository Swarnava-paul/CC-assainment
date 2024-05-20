import { useState, useEffect } from "react";
import axios from "axios";
import {Post} from './Post'
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
      setLoading(true)
     axios({
      method:"get",
      url:"https://fakestoreapi.com/users"
     }).then(({data})=>{
      console.log(data);
      setLoading(false)
      setPosts(data)
     }).catch((error)=>{
      setError(true)
      setLoading(false)
     })
}

  useEffect(()=>{
    fetchAndUpdateData()
  },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.map((i,index)=>(
          <Post key={index} userInfo={i}/>
        ))
      }
    </div>
  )
}

export default Posts;
