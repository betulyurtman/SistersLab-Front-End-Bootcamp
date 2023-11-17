import { useState } from 'react';
import PostBody from './PostBody';
import '/src/styles.css'; 

const RandomPost = () => {
  const [id, setId] = useState(1);

  return (
    <div className="random-post-container">
      <button
        onClick={() => setId(Math.floor(Math.random() * 100) + 1)}
        className="random-post-button"
      >
        Show me a random post :)
      </button>
      <div className="post-body-container">
        <PostBody id={id} />
      </div>
    </div>
  );
};

export default RandomPost;
