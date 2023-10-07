import {Box,Typography} from '@mui/material'
import Grid from './Grids';
import girl from "../../assets/girl.jpg"
import educ from "../../assets/educ.png"
import text3 from "../../assets/text3.png"
import uranus from "../../assets/uranus.png"
import uranus1 from "../../assets/uranus1.png"
import first from "../../assets/first.png"
import easy from "../../assets/easy.png"
import LastT from "../../assets/LastT.png"
import planet from "../../assets/planet.png"
import use from "../../assets/use.png"
import  friendly from "../../assets/friendly.png"
import { IoPlayCircleOutline } from "react-icons/io5";



const Secound = () => {
    return (
        <Box sx={{ width: '100%',
        height: '3033px',
      
        flexShrink: 0,display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius: '80px 80px 0px 0px',
        gap:"250px",
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
<Box sx={{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"10px"}}>
  <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}><img src={first} alt="" />
  <img src={easy} alt="" />
  <img src={use} alt="" />
  </Box>
  <img src={LastT} alt="" />
  <img src={planet} alt=""  style={{position:"absolute",right:"10px",bottom:"-1950px"}}/>
  
</Box>
<Box sx={{width: '1200px',
  height: 'auto',
  flexShrink: 0,
  borderRadius: '60px',
  position: 'relative'}}>
    <img src={girl} alt="" style={{width: '100%',
    height: '100%', borderRadius: '60px',
    objectFit: 'fill',zIndex:"1", position:"relative"}} />
    <IoPlayCircleOutline style={{
  position: 'absolute',
  zIndex:"2",
  left: '45%',
  top: '45%',
  fill: 'white', // Ceci est généralement utilisé pour les icônes SVG
  color: 'white', // Utilisé pour le texte
  height: '120px',
  width: '120px',
}}/>
<img src={friendly} alt=""  style={{position:"absolute" ,right:"-100px", bottom:"-150px",zIndex:"2"}}/>
<img src={uranus1} alt=""  style={{position:"absolute" ,left:"-150px", top:"-150px",zIndex:"0"}}/>
</Box>
        </Box>
    );
}

export default Secound;
