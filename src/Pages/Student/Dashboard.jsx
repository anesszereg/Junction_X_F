import {Box} from '@mui/material'
import TasksCard from '../../Components/Student/TasksCard'
import Schedular from '../../Components/Student/Schedular'

import Card from '../../Components/Card'
import ChatGpt from '../../Components/ChatGpt'


function Dashboard() {
    return (
        <Box>
            <Schedular/>
            <Box display={'flex'} flexDirection={'column'} gap={'24px'} marginTop={'24px'}>

            <TasksCard/>
            <TasksCard/>
            <TasksCard/>
            </Box>
            

           <Card title="to do"  progesse={false}/>
           <Card  title="In Progress" progesse={true}/>
           <ChatGpt/>
        </Box>
    )
}

export default Dashboard
