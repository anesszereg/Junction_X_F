import { useState } from 'react';
import HomeDashboard from '../../Components/DashboardTeacher/HomeDashboard/HomeDashboard';
import Sidebar from '../../Components/DashboardTeacher/nav/Sidebar';
import Classesdashboard from '../../Components/DashboardTeacher/ClassesDashboard/Classesdashboard';
import CourseDashboard from '../../Components/DashboardTeacher/CourseDashboard/CourseDashboard';
import { Box } from '@mui/material';

const TeacherDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home'); // Initialize with 'Home'

  // Define a function to change the selected component
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };


  return (
    <>
      <Sidebar onSelectComponent={handleComponentChange} />
      <Box marginTop={'64px'}>
      <HomeDashboard />
        {/* <Classesdashboard/>
        <CourseDashboard /> */}
      </Box>
    </>
  );
};

export default TeacherDashboard;
