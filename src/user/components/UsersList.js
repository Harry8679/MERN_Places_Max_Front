import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';

const UsersList = ({ items }) => {
    if (items.length === 0) {
        return <div className="center">
            <h2>No user found !</h2>
        </div>
    }

    return (
        <ul>
            {items.map(({ id, image, name, places }) => {
                return <UserItem key={id} id={id} image={image} name={name} placeCount={places} />;
            })}
        </ul>
    );
}

export default UsersList
