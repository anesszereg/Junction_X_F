import {Box} from '@mui/material'
import TasksCard from '../../Components/Student/TasksCard'
import Schedular from '../../Components/Student/Schedular'



function Dashboard() {
    return (
        <Box>
            <Schedular/>
            <Box display={'flex'} flexDirection={'column'} gap={'24px'} marginTop={'24px'}>

            <TasksCard/>
            <TasksCard/>
            <TasksCard/>
            </Box>
            

        </Box>
    )
}

export default Dashboard
