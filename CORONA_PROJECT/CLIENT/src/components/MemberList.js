import React from 'react';
import MemberCard from './MemberCard';

const MemberList = ({ members, onMemberClick }) => {
    return (
        <div className="member-list">
            {members.map(member => (
                <MemberCard key={member.id} member={member} onClick={onMemberClick} />
            ))}
        </div>
    );
}

export default MemberList;
