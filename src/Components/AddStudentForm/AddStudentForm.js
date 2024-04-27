import React, { useState } from 'react';
import axios from 'axios';
import './AddStudentForm.css';

const AddStudentForm = ({ onClose, selectedStudent, onAdd }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      phoneNumber,
      address
    };

    try {
      await axios.post('https://crudcrud.com/api/76a9206f4d1446be9ce2357c858a7ebc/student', newStudent);
      onAdd(newStudent);
      onClose();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        {/* <h2>{selectedStudent ? 'Edit Student' : 'Add Student'}</h2> */}
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
          {/* <button type="submit">{selectedStudent ? 'Update' : 'Add'}</button>
          {selectedStudent && <button type="button" onClick={onClose}>Close</button>} */}
          <button type="submit" >Add</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
