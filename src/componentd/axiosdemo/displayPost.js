import axios from "axios";
const DisplayPort = ({posts,onDelete}) =>{
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/post/${String(id)}`)
            .then(() => {
                console.log(`Post with id ${id} deleted`);
                onDelete(id); 
            })
            .catch(err => {
                console.error("Error deleting post:", err);
            });
    };

    const styles = {
        postContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "600px",
            margin: "20px auto",
        },
        post: {
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
            transition: "transform 0.2s",
        },
        postHover: {
            transform: "scale(1.02)",
        },
        title: {
            margin: "0 0 10px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
        },
        body: {
            margin: "0 0 15px",
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#555",
        },
        button: {
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#FF4D4D",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s",
        },
        buttonHover: {
            backgroundColor: "#FF1A1A",
        },
    };

    return (
        <div style={styles.postContainer}>
            {posts.map((post) => (
                <div
                    key={post.id}
                    style={styles.post}
                    onMouseOver={(e) => (e.currentTarget.style.transform = styles.postHover.transform)}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "")}
                >
                    <h3 style={styles.title}>{post.title}</h3>
                    <p style={styles.body}>{post.body}</p>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => handleDelete(post.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default DisplayPort;