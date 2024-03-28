import React, { useState } from 'react';

const MemberForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        Name: '',
        id: '',
        address: '',
        dateOfBirth: '',
        telephone:'',
        mobilePhone:'' ,
        positiveAnswer:'' ,
        recoveryDate:''  , 
        vaccinations: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.Name} />
            <input type="text" name="id" placeholder="Id" onChange={handleChange} value={formData.id} />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
            <input type="text" name="dateOfBirth" placeholder="DateOfBirth" onChange={handleChange} value={formData.dateOfBirth} />
            <input type="date" name="telephone"  placeholder="Telephone" onChange={handleChange} value={formData.telephone} />
            <input type="text" name="mobilePhone" placeholder="MobilePhone" onChange={handleChange} value={formData.mobilePhone} />
            <input type="text" name="positiveAnswer" placeholder="PositiveAnswer" onChange={handleChange} value={formData.positiveAnswer} />
            <input type="text" name="recoveryDate" placeholder="RecoveryDate" onChange={handleChange} value={formData.recoveryDate} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MemberForm;
