import {Box, Typography} from "@mui/material"
import { Link } from "react-router-dom"
// import { useHistory } from "react-router"


function Navbar() {
//   const history = useHistory()
    return (
        <Box display={'flex '}
            justifyContent={'center'}
            gap={'80px'}
            position={"absolute"}
            width={"100%"}
            alignItems={"center"}
            height={"120px"}>
            <Typography sx={
                {
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '0.96px'
                }
            }>Contact us</Typography>
            <Typography sx={
                {
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '0.96px'
                }
            }>Our services</Typography>
            <Typography sx={
                {
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'FONTSPRING DEMO - Robson Extrabold, sans-serif',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: 'normal',
                    letterSpacing: '1.92px'
                }
            }>LOGO</Typography>
            <Typography sx={
                {
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: "FONTSPRING DEMO - Robson Extrabold",
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                    letterSpacing: '0.96px'
                }
            }>About us</Typography>
            <Box>

                <Box sx={
                    {
                        width: '132.706px',
                        height: '70.039px',
                        transform: 'rotate(-7deg)',
                        flexShrink: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: '1428.19px',

                        background: '#5200FF'
                    }
                }>
                    <Typography sx={
                        {
                            color: '#FFF',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: '2px dashed #000',
                            padding: "15px",
                            borderRadius: '1428.19px',
                            fontFamily: 'FONTSPRING DEMO - Robson Extrabold, sans-serif',
                            fontSize: '30.846px',
                            fontStyle: 'normal',
                            fontWeight: 800,
                            lineHeight: 'normal',
                            letterSpacing: '1.714px',
                            transform: 'rotate(-1deg)',
                            width: '122.706px',
                            height: '60.039px'
                        }
                    } > 
                    <Link to='/Login' style={{
                        textDecoration:'none',
                        color:'#000'
                    }}> 
                     Login
                    </Link>
                     </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar
