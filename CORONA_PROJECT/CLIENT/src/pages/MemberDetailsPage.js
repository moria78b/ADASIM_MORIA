import React from 'react';

const MemberDetailsPage = ({ member }) => {
    return (
        <div>
            <h2>Member Details</h2>
            <p>Name: {member.firstName} {member.lastName}</p>
            <p>ID: {member.id}</p>
            <p>Address: {member.address}</p>
            <p>Date of Birth: {member.dateOfBirth}</p>
            {/* Add more member details here */}
        </div>
    );
}

export default MemberDetailsPage;
