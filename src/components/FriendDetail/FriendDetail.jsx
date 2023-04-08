import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    const navigate = useNavigate();
    const goBackHandler = () =>{
        navigate(-1);

    }
    return (
        <div>
            <h3>everything about this person here</h3>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
            <button onClick={goBackHandler}>GO Back</button>
        </div>
    );
};

export default FriendDetail;