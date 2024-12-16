import { useEffect, useState } from "react";
import axios from "axios";
import DisplayPort from "./displayPost.js"
import AxiosPostDemo from "./axiosPostDemo.js";

const AxiosGetDemo = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/post")
        .then(res=>{
            setPosts(res.data)
        })
    },[])

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };


    return(
    <>
    <h2>Axios Demo</h2>
    <AxiosPostDemo />
    <DisplayPort posts={posts} onDelete={handleDelete}/>
    </>
    )
}
export default AxiosGetDemo;