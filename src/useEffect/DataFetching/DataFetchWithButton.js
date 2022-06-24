import { useState, useEffect } from "react";

export default function DataFetchWithButton() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
      .then((response) => response.json())
      .then((post) => {
        setPost(post);
        console.log(post);
      })
      .catch((err) => console.log(err));
  }, [idFromClick]);

  return (
    <>
      <input onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setIdFromClick(id)}>Fetch Post</button>
      <div>{post.title}</div>
    </>
  );
}
