import { useState } from "react";
import CommentList from "./CommentList.js"

const Home = () => {
    const [comments,setComments] = useState([
        'So far, Mr Cook has not commented on these reports.',
        'Stratford police refuse to comment on whether anyone has been arrested.',
        'You really cant comment till you know the facts.',
        'I am always happy with new developments, he commented.',
        'Stuart commented that this was very true.',
        'He made his comments at a news conference in Amsterdam.'
    ]);

    return (
        <div>
            <CommentList comments={comments} title="All Comments" />
        </div>
    );
}

export default Home;