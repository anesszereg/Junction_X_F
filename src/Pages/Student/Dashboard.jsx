import {Box} from '@mui/material'
import TasksCard from '../../Components/Student/TasksCard'
import Schedular from '../../Components/Student/Schedular'

import Card from '../../Components/Card'
import ChatGpt from '../../Components/ChatGpt'
import Drawer from '../../Layout/Defaultlayout/Drawer'
import Navbar from '../../Layout/Defaultlayout/Navbar'


function Dashboard() {
    return (
        <Box padding={'186px 157px '}>
             <Box display='flex' position={'absolute'} width={'100%'}>

<Drawer/>
<Navbar/>
</Box>
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
