import React from 'react'
import DashboardNav from '../../../Components/Student/Kids/DashboardNav/DashboardNav'
import Cours from '../../../Components/Student/Kids/Cours/Cours'
import Calender from '../../../Components/Student/Kids/Calender/Calender'
import Assignments from '../../../Components/Student/Kids/Assignments/Assignments'
import './KidsDashboard.css'
import {Box} from '@mui/material'
function KidsDashboard() {
    return (
        <Box padding={'10px 66px'}>
            <DashboardNav/>
            <Cours/>
            <div className="bottom">
                <Calender/>
                <Assignments/>
            </div>
        </Box>
    )
}

export default KidsDashboard
