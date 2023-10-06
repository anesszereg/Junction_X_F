import {Box,Typography} from "@mui/material"

function CardGrid({title,color,desc,image}) {
  return (
    <Box sx={{ width: '400px',
    height: '550px',
    flexShrink: 0,
    borderRadius: '16px',
    background: `${color}`,
    display:"flex",
    flexDirection:"column", gap:"20px",alignItems:"center"}}>
        <img src={image} alt="" style={{height:"300px", width:"350px"}} />
       <Box sx={{padding:" 20px 40px",display:"flex",
    flexDirection:"column", gap:"20px"}}>
       <Typography sx={{ color: '#242424',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '31px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',}}>
      { title }
         </Typography>
       <Typography sx={{color: '#000',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',}}>
     {desc}
        </Typography>
       </Box>

    </Box>
  )
}

export default CardGrid