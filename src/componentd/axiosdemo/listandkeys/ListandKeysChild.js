import React from 'react';
const ListandKeyChilds = ({comments,handlerDelete})=>{
    return(
        <>
            {comments.map((comment)=>(
                <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <button onClick={()=>handlerDelete(comment.id)}>Delete Comment</button>
                </div>
            )
            )}
        </>
    );
}

export default ListandKeyChilds;

