import { useEffect, useState } from "react";
import ListandKeysChild from "./ListandKeysChild.js"
const ListandKeysComponents= () => {
    const [comments,setComments] = useState([
          {
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
          },
          {
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
          },
          {
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
          }

    ]
)

const handlerDelete = (id) =>{
    const newComment = comments.filter(comment=>comment.id!=id);
    setComments(newComment);
}

const[name,setName]=useState("Jay");

useEffect(()=>{
    console.log("use Effect called...")
},[name]);

return(
    <>
    <h2>List and Keys</h2>
    <ListandKeysChild comments={comments} handlerDelete = {handlerDelete}/>
    <button onClick={()=>setName('Andy')}>Change Name</button>
    </>
)
}
export default ListandKeysComponents;
