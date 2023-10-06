import {Box,Typography,Avatar} from "@mui/material"


function Card({title,progesse}) {
 
  return (
<Box sx={{width:"274px", height:"400px" , borderRadius: '16px',
    border: '1px solid #E5E5E5',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',}}>
        <Box sx={{
            display:'flex' , alignItems:'center', justifyContent:"flex-start",padding:"0 30px" ,height:"60px"
            ,width:"100%", borderBottom:"solid 1px #E5E5E5"
            }}>
 
            <Typography variant="h5" sx={{
                  color: '#1E1E1E',
                  textAlign: 'center',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
            }}>
              {  title}
            </Typography>
        </Box>
        <Box sx={{
            display:'flex' ,padding:"20px 25px" ,width:"100%",flexDirection:"column" 
            }}>
        <Typography  sx={{
                  color: '#1E1E1E',
               
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '25px',
                  textAlign:"start",
                  
               
            }}>
               Display the upcoming course Title
            </Typography>
        <Typography  sx={{
                  color: '#5200FF',
               
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '25px',
                  textAlign:"start",
                  
               
            }}>
             subject
            </Typography>
        <Typography  sx={{
                  color: '#5C5B68',
               
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  fontStyle: 'normal',
                  fontWeight: 600,
              marginTop:"10px",
                  textAlign:"start",
                  
               
            }}>
           over here we are going to display a quick & short text of introduction to the upcoming course 
            </Typography >
        
        <Box sx={{display:"flex", gap:"10px",marginTop:"50px"}}>
       
        <Box sx={{display:"flex"}} >
                        <Avatar sx={
                                {
                                    width: 25,
                                    height: 25
                                }
                            }
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"/>
                        <Avatar sx={
                                {
                                    width: 25,
                                    height: 25,
                                    marginLeft: '-10px',
                                    border: '1.5px solid #Fff'
                                }
                            }
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"/>
                        <Avatar sx={
                                {
                                    width: 25,
                                    height: 25,
                                    marginLeft: '-10px',
                                    border: '1.5px solid #Fff'
                                }
                            }
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"/>
                        <Avatar sx={
                                {
                                    width: 25,
                                    height: 25,
                                    marginLeft: '-10px',
                                    border: '1.5px solid #Fff'
                                }
                            }
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"/>
                    </Box>
          <Typography  sx={{
                  color: '#5200FF',
               
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '11px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '25px',
                  textAlign:"start",
                  
               
            }}>
          participants
            </Typography>
        </Box>
       {progesse?  <Box sx={{
  borderRadius: '8px',
  background: 'linear-gradient(90deg, #5200FF -0.23%, #5200FF 69.78%, rgba(131, 74, 253, 0.25) 69.79%, rgba(131, 74, 253, 0.25) 99.77%)',
  width: '219px',
  height: '8px',
  marginTop:"30PX",
  display:"block"
}}>

        </Box>:""}
        <button style={{
            border:"none",
  display: 'flex',
  padding: '13px 74px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '8px',
  background: '#5200FF', color: '#FFF',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  marginTop: progesse ? '20px' : '60px',
}}>
 Start Course
</button>
        </Box>

</Box>
  )
}

export default Card
