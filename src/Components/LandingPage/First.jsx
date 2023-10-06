import {Box} from "@mui/material"
import bg from "../../assets/bg.png"
import text from "../../assets/text.png"
function First() {
  return (
   <Box sx={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '130vh', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   }}>
  <img src={text} alt="" style={{height:"600PX"}}/>
   </Box>
  )
}

export default First