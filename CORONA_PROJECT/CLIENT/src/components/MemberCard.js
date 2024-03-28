import React from 'react';

const MemberCard = ({ member, onClick }) => {
    return (
        <div className="member-card" onClick={() => onClick(member.id)}>
            <h3>{member.}</h3>
            <p>ID: {member.id}</p>
            <p>Address: {member.address}</p>
            <p>Date of Birth: {member.}</p>
            {/* Add more member details here */}
        </div>
    );
}

export default MemberCard;
