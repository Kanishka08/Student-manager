
import React from 'react';
import { StudentProvider } from './StudentContext';

const StudentContextProvider = ({ children }) => {
  return <StudentProvider>{children}</StudentProvider>;
};

export default StudentContextProvider;
