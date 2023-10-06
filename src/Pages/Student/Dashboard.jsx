import {Box} from '@mui/material'
import Card from '../../Components/Card'
import ChatGpt from '../../Components/ChatGpt'


function Dashboard() {
    return (
        <Box>
           <Card title="to do"  progesse={false}/>
           <Card  title="In Progress" progesse={true}/>
           <ChatGpt/>
        </Box>
    )
}

export default Dashboard
