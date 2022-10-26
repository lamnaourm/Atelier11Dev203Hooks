import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const User = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (props.activeId === props.utilisateur.id) {
      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${props.activeId}`
        );
        return res.data;
      };

      getData().then((posts) => setPosts(posts));
    } else setPosts([]);
  }, [props.activeId]);

  return (
    <div className="child">
      <h3>
        nom: {props.utilisateur.name} {props.utilisateur.username}
      </h3>
      <p>email:{props.utilisateur.email}</p>
      <p>
        ville:{props.utilisateur.address.city}
        rue:{props.utilisateur.address.street}
      </p>
      <button onClick={props.changeActiveId}>details posts</button>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
