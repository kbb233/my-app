function CommentList({comments,title}){
    return(
        <div>
            <h2>{title}</h2>
            {comments.map((comment,index)=>(
                <p key={index}>Comment: {comment}</p>
            )
            )}
        </div>
    )
}

export default CommentList