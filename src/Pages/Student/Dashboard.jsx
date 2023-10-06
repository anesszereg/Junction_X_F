import {Box} from '@mui/material'
import TasksCard from '../../Components/Student/TasksCard'
import Schedular from '../../Components/Student/Schedular'

import Card from '../../Components/Card'
import ChatGpt from '../../Components/ChatGpt'
import Drawer from '../../Layout/Defaultlayout/Drawer'
import Navbar from '../../Layout/Defaultlayout/Navbar'


function Dashboard() {
    return (

        <Box display={'flex'}
            gap='33px'>
            <Box>


                <Schedular/>
                <Box display={'flex'}
                    flexDirection={'column'}
                    gap={'24px'}
                    marginTop={'24px'}>

                    <TasksCard/>
                    <TasksCard/>
                    <TasksCard/>
                </Box>
            </Box>
            <Box display={'flex'}
                gap='33px'>

                <Box display={'flex'}
                    flexDirection={'column'}
                    gap={'33px'}>


                    <Card title="to do"
                        progesse={false}/>
                    <Card title="In Progress"
                        progesse={true}/>
                </Box>
                <ChatGpt/>
            </Box>
        </Box>
    )
}

export default Dashboard
