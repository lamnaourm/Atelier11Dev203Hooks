import React from "react";
import { useState } from "react";
import User from "./User";

const ListUser = (props) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <div>
      {props.users.map((item) => (
        <User
          activeId={activeId}
          changeActiveId={() => setActiveId(item.id)}
          key={item.id}
          utilisateur={item}
        />
      ))}
    </div>
  );
};

export default ListUser;
