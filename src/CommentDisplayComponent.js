const commentDisplayComponents = (props,handlerDelete) =>{
    return (
        <>
        {
            props.comments.map((comment)=>(
                console.log(comment.name)
            ))
        }
        </>
    );
}

export default commentDisplayComponents;