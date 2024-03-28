import React from 'react';
import MemberForm from '../components/MemberForm';

const AddMemberPage = () => {
    const handleSubmit = (formData) => {
        // Handle form submission here, add new member, etc.
        console.log('Form submitted with data:', formData);
    }

    return (
        <div>
            <h2>Add Member</h2>
            <MemberForm onSubmit={handleSubmit} />
        </div>
    );
}

export default AddMemberPage;
