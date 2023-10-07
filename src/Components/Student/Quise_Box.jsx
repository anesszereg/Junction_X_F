import { Box, Button, Typography } from '@mui/material'


function Quise_Box({response , response_index}) {
  return (
    <Button
    sx={{
        height:"76px",
        width:"385px",
        padding:'20px 30px',
        display:"flex",
        alignItems:"center",
        justifyContent:'start',
        gap:'15px',
        boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
        color:'#000',


        '&:hover': {
backgroundColor:'#5200FF',
color:'#fff'
        }

    }}>
        <Typography fontSize={'24px'} fontWeight={'400'}>{response_index} :</Typography>
        <Typography fontSize={'24px'} fontWeight={'400'}>{response}</Typography>

    </Button>
  )
}

export default Quise_Box