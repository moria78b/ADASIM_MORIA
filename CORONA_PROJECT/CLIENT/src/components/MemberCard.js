import React from 'react';

const MemberCard = ({ member, onClick }) => {
    return (
        <div className="member-card" onClick={() => onClick(member.id)}>
            <h3>{member.}</h3>
            <p>ID: {member.id}</p>
           
        </div>
    );
}

export default MemberCard;
