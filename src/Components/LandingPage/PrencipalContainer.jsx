import {Box} from '@mui/material'
import backImage from '../../assets/png/Rectangle 57.png'
import Navbar from './Navbar'
import First from './first'
import Secound from './Secound'
import Last from './last'

function PrencipalContainer() {
    return (
        <Box
        height={'100vh'}
        sx={{
            backgroundImage:backImage
        }}>
           <Navbar/>
           <First></First>
           <Secound></Secound>
           <Last></Last>

        </Box>
    )
}

export default PrencipalContainer
