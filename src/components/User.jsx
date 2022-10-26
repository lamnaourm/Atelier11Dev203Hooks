import React from "react";

const User = (props) => {
  return (
    <div className="child" >
      <h3>
        nom: {props.utilisateur.name} {props.utilisateur.username}
      </h3>
      <p>email:{props.utilisateur.email}</p>
      <p>
        ville:{props.utilisateur.address.city}
        rue:{props.utilisateur.address.street}
      </p>
      <button>details posts</button>
    </div>
  );
};

export default User;
