import React from 'react';
import User from './User';

const ListUser = (props) => {
    return (
        <div>
            {props.users.map(item => <User key={item.id} utilisateur={item}/>)}
        </div>
    );
}

export default ListUser;
