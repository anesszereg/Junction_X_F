import {Box,Typography} from '@mui/material'
import Grid from './Grids';
import girl from "../../assets/girl.jpg"
import educ from "../../assets/educ.png"
import text3 from "../../assets/text3.png"
import uranus from "../../assets/uranus.png"
import { IoPlayCircleOutline } from "react-icons/io5";


const Secound = () => {
    return (
        <Box sx={{ width: '100%',
        height: '2533px',
        flexShrink: 0,display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius: '80px 80px 0px 0px',
        gap:"200px",
        paddingTop:"100px" ,     background: '#242424',marginTop:"-100px"}}>
  <Box sx={{position:"relative"}}>
    <img src={educ} alt="" style={{position:"absolute",left:"290px", width: '300px',
  height: '150.571px',top:"70PX"}} />
    <img src={text3} alt="" style={{marginRight:"400px",width:"800px"}}  />
    <img src={uranus} alt=""style={{position:"absolute",left:"900px", width: '222px',
    bottom:"70PX",
  height: '222px',}}  />
  <Typography sx={{color: '#848485',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.96px',
  width:"580px",position:"absolute",left:"650px",top:"150PX",bottom:"0"
  }}>
  We provide special service for both teachers and  students such as virtual class, analytics dashboard and gamified courses
  </Typography>
  
  </Box>
<Grid/>
<Box sx={{width: '1200px',
  height: 'auto',
  flexShrink: 0,
  borderRadius: '60px',
  position: 'relative'}}>
    <img src={girl} alt="" style={{width: '100%',
    height: '100%', borderRadius: '60px',
    objectFit: 'fill',}} />
    <IoPlayCircleOutline style={{
  position: 'absolute',
  left: '45%',
  top: '45%',
  fill: 'white', // Ceci est généralement utilisé pour les icônes SVG
  color: 'white', // Utilisé pour le texte
  height: '120px',
  width: '120px',
}}/>
</Box>
        </Box>
    );
}

export default Secound;
