import { useState } from 'react';
import '../ClassesDashboard/ClassesDashboard.css';
import '../HomeDashboard/HomeDashboard.css';
import Sidebar from '../nav/Sidebar';
import AbouTrackCard from './AbouTrackCard';
import './CourseBoard.css';
import CourseCard from './CourseCard';

const CourseDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home'); // Initialize with 'Home'

  // Define a function to change the selected component
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <>
      <Sidebar onSelectComponent={handleComponentChange} />
      
    
    <div style={{ marginLeft: '250px', marginTop:'130px', padding: '20px' }}>
      <div className="firstLine coursedashboard">
        <div className="moduleCourses coursedashboard">
          <h3>My Courses</h3>
          <CourseCard/>
          <CourseCard/>
        </div>
        <div className="moduleCourses coursedashboard module2nd">
          <h4>About This Track</h4>
          <div>
            <h3>Course Title</h3>
            <p>
              Connaître les étapes clés, le cycle de vie et les processus de la
              gestion d’un projet Savoir comment démarrer un projet Apprendre à
              planifier un projet Définir l’équipe projet, son rôle et ses
              responsabilités Appréhender les différents outils pour mener un
              projet performant
            </p>
          </div>
          <div className="aboutTrackMultiple">
           <AbouTrackCard/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseDashboard;
