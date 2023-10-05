import { Box } from "@mui/material"
import { BsMoon,BsSearch } from "react-icons/bs";
import { LuBell } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import image from '../../assets/profil.png'
function Navbar() {
  return (
   <Box sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin:" 20PX 100px",
    padding:"0 40px",
    position:"absolute",
    width:"calc(100% - 280px)",
    height:"80px",
    top:"0",
    border:"1px solid #E5E5E5 ",
    borderRadius:"8px"
   
    
   }}>
   <Box sx={{
    display:"flex",
    alignItems:"center",
    gap:"20px"
   }}>
     <BsSearch style={{ width:"25px",height:"25px ",color:"#C8C8C8"}}/>
   <input type="search" name="" id="" placeholder="Search ( Ctrl + / ) " 
    style={{
      border:"none",
        color: '#C8C8C8',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      
      
    }}
   />
  
   </Box>
     <Box sx={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      gap:"20px",
     }}>
      <GoGlobe style={{ width: '22px', height: '22px' }}/>
<BsMoon  style={{ width: '22px', height: '22px' }}/>
<LuBell style={{ width: '22px', height: '22px' }}/>

<img src={image} alt="" style={{ width: '48px', height: '48px',borderRadius:"50%", backgroundColor:"#ded1ff", display:"flex",alignItems:"center",
      justifyContent:"center", }} />
     </Box>
   </Box>
  )
}

export default Navbar