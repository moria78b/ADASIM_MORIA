import React from 'react';

const MemberDetailsPage = ({ member }) => {
    return (
        <div>
            <h2>Member Details</h2>
            <p>Name: {member.firstName} {member.lastName}</p>
            <p>ID: {member.id}</p>
        </div>
    );
}

export default MemberDetailsPage;
