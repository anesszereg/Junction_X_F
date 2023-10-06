import {Box, Typography} from "@mui/material"


function Navbar() {
    return (
        <Box display={'flex'}
            justifyContent={'center'}
            gap={'80px'}>
            <Typography>Feature</Typography>
            <Typography>Our services</Typography>
            <Typography></Typography>
            <Typography>About us</Typography>
            <Typography>Contact Us</Typography>
        </Box>
    )
}

export default Navbar
