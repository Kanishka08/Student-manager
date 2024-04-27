import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStudentContext } from '../../context/StudentContext';
import AddStudentForm from '../AddStudentForm/AddStudentForm';
import Modal from '../Modal/Modal';
import './Main.css';

const Main = () => {
  const { students, addStudent, deleteStudent } = useStudentContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/1c27fac3cd464dfda23b917dbf676002/student');
      addStudent(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddClick = () => {
    setShowModal(true);
    setSelectedStudent(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://crudcrud.com/api/76a9206f4d1446be9ce2357c858a7ebc/student/${id}`);
      deleteStudent(id);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await axios.post('https://crudcrud.com/api/76a9206f4d1446be9ce2357c858a7ebc/student', newStudent);
      addStudent(response.data);
      setShowModal(false);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="container">
      <h1>Student Manager</h1>
      <p>Number of Students: {students.length}</p>
      <button onClick={handleAddClick}>Add Student</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <AddStudentForm
            onClose={handleCloseModal}
            selectedStudent={selectedStudent}
            onAdd={handleAddStudent}
          />
        </Modal>
      )}
      {students.length > 1 && (
        <ul>
          {students.map((student) => (
            <li key={student._id}>
              {student.name} - {student.phoneNumber} - {student.address}
              <div>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
                <button onClick={() => handleEdit(student)}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )}
       {/* {students.length > 1 && (
        <ul>
          {students.map((student) => (
            <li key={student._id}>
              {student.name} - {student.phoneNumber} - {student.address}
              <div>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
                <button onClick={() => handleEdit(student)}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Main;
