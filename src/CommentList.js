function CommentList({comments,title,handlerDelete}){
    return(
        <div>
            <h2>{title}</h2>
            {comments.map((comment,index)=>(
                <div>
                <p key={index}>Comment: {comment}</p>
                </div>
            )
            )}
        </div>
    )
}

export default CommentList