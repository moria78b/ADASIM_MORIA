import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import MemberDetailsPage from './pages/MemberDetailsPage';
import EditMemberPage from './pages/EditMemberPage';
import AddMemberPage from './pages/AddMemberPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedMemberId, setSelectedMemberId] = useState(null);

    const handleNavigate = (page, memberId = null) => {
        setCurrentPage(page);
        setSelectedMemberId(memberId);
    };

    return (
        <div>
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'memberDetails' && (
                <MemberDetailsPage memberId={selectedMemberId} onNavigate={handleNavigate} />
            )}
            {currentPage === 'editMember' && (
                <EditMemberPage memberId={selectedMemberId} onNavigate={handleNavigate} />
            )}
            {currentPage === 'addMember' && <AddMemberPage onNavigate={handleNavigate} />}
        </div>
    );
}

export default App;
