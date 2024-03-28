import React, { useState, useEffect } from 'react';
import MemberList from '../components/MemberList';
import { getAllMembers } from '../api/memberApi'; 

const HomePage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch all members when the component mounts
        getAllMembers()
            .then(data => setMembers(data))
            .catch(error => console.error('Error fetching members:', error));
    }, []);

    const handleMemberClick = (memberId) => {
        // Handle member click here, navigate to member details page, etc.
        console.log('Member clicked:', memberId);
    }

    return (
        <div>
            <h2>Member List</h2>
            <MemberList members={members} onMemberClick={handleMemberClick} />
        </div>
    );
}

export default HomePage;
