import React, { useState } from 'react';
import MemberForm from '../components/MemberForm';

const EditMemberPage = ({ member }) => {
    const [editedMember, setEditedMember] = useState(member);

    const handleSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
    }

    return (
        <div>
            <h2>Edit Member</h2>
            <MemberForm onSubmit={handleSubmit} />
        </div>
    );
}

export default EditMemberPage;
