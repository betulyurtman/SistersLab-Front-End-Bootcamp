import { useEffect, useState } from 'react';

const PostBody = ({ id }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setText(data.body);
      })
      .catch((error) => {
        console.log("Something went wrong :(", error)
        setError(true);
      })
  }, [id]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return <div>{text}</div>;
};

export default PostBody;