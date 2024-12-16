import { useState } from "react";
import axios from "axios";

const AxiosPostDemo = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handlePost = () => {
        axios.post("http://localhost:8000/post", { title, body })
            .then(res => {
                console.log("Post successful:", res.data);
            })
            .catch(err => {
                console.error("Error posting data:", err);
            });
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            maxWidth: "400px",
            margin: "20px auto",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
        },
        input: {
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
        },
        textarea: {
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "vertical",
            minHeight: "100px",
        },
        button: {
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        buttonHover: {
            backgroundColor: "#0056b3",
        },
    };


    return (
        <>
            <h2>Add New Post</h2>
            <div style={styles.container}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={styles.textarea}
                />
                <button onClick={handlePost}
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >Submit</button>
            </div>
        </>
    );
};

export default AxiosPostDemo;
