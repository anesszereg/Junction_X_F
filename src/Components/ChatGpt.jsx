
import {Box,Typography} from "@mui/material"

import { BsSend } from "react-icons/bs";
function ChatGpt() {
  return (
   <Box sx={{width:"301px", height:"911px" , borderRadius: '16px',
   border: '1px solid #E5E5E5',
   background: '#FFF',
   boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',position:"relative"}}>
    <Typography  sx={{
                  color: '#1E1E1E',
                  textAlign: 'start',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  padding:"30px 20px"
            }}>
Chat GPT
    </Typography>
    <Box sx={{borderRadius: '0px 8px 8px 8px',
  background: '#5200FF',
  width: '241px',
  height: '113px',
  flexShrink: 0,
  margin:"0px 20px"
   }}>
    <Typography sx={{color: '#FFF',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  padding:"10px 20px"}}>
    Chat gpt answer gonna be displayed like that Chat gpt answer gonna be displayed like that Chat gpt answer gonna be displayed like that Chat gpt answer gonna be displayed like that 
    </Typography>


    </Box>

    <Box sx={{position:"absolute ",bottom:"0",width:"100%",display:"flex", flexDirection:"column",alignItems:"center", gap:"23px"}}>
    <Typography sx={{color: '#5C5B68',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',}}>
    Write your prompt
    </Typography>
<Box sx={{height:"50px", borderTop:"1px solid #D9D9D9 ",width:"100%",position:"relative"}}>
<input type="text" name="" id="" placeholder="Use ChatGPT" 
style={{border:"none" , color: '#5C5B68',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '12px',
  height:"100%",
  fontStyle: 'normal',
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"0 10px",
  fontWeight: 500,
  lineHeight: 'normal',width:"100%",outline: 'none',}}/>
<BsSend size={20} style={{position:"absolute ",left:"90%" ,top:"35%" ,color:"#5200FF"} } />
</Box>
    </Box>
   </Box>
  )
}

export default ChatGpt