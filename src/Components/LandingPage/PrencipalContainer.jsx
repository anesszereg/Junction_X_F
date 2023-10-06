import {Box} from '@mui/material'
import backImage from '../../assets/png/Rectangle 57.png'
import Navbar from './Navbar'

function PrencipalContainer() {
    return (
        <Box
        height={'100vh'}
        sx={{
            backgroundImage:backImage
        }}>
           <Navbar/>

        </Box>
    )
}

export default PrencipalContainer
