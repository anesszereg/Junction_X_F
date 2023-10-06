import { Box } from '@mui/material'

import backImage from '../../assets/Svgs/calender.svg'


function Schedular() {
  return (
<Box sx={{
    width:"871px",
    height:'501px',
    borderRadius:"16px",

    backgroundImage:`url(${backImage})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
}}>

</Box>
  )
}

export default Schedular