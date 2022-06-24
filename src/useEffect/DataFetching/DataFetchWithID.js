import { useState, useEffect } from "react";

export default function DataFetch2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        setPost(post);
        console.log(post);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <input onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
    </>
  );
}
