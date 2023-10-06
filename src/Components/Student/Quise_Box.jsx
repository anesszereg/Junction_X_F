import { Box, Typography } from '@mui/material'


function Quise_Box({response , response_index}) {
  return (
    <Box
    sx={{
        height:"76px",
        width:"385px",
        padding:'20px 30px',
        display:"flex",
        alignItems:"center",
        boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
        cursor:'pointer'

    }}>
        <Typography fontSize={'24px'} fontWeight={'400'}>{response_index} :</Typography>
        <Typography fontSize={'24px'} fontWeight={'400'}>{response}</Typography>

    </Box>
  )
}

export default Quise_Box