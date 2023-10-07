import {Box, Grid, Typography} from '@mui/material'
import {GrClose} from 'react-icons/gr'
// import {useHistory} from 'react-router'
import Quise_Box from '../../Components/Student/Quise_Box'
import raceImage from '../../assets/png/race.png'
import { useEffect, useState } from 'react'


function Quise() {

    // const history = useHistory()
    const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown); // Stop the timer when it reaches 0
        // You can add code to handle what happens when the timer expires here
      }
    }, 1000);

    return () => {
      clearInterval(countdown); // Clean up the interval on unmount
    };
  }, [timer]);

  // Helper function to format the remaining time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} s`;
  };
    return (
        <Box  display={'flex'} justifyContent={'space-between'} width={'100%'} height={'100vh'}>
            <Box padding={'49px 43px'}>

            
            <Box  display={'flex'}
                alignItems={'center'}
                marginBottom={'60px'}
                gap={'300px'}>

                <Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '71px',
                            width: '71px',
                            border: "1px solid rgba(0, 0, 0, 0.10)",
                            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                            cursor: "pointer",
                            borderRadius: '50%'

                        }
                    }
                    onClick={
                        () => history.goBack()
                }>
                    <GrClose size={30}/>

                </Box>

                <Typography color='#000'
                    fontSize={'40px'}
                    fontWeight={'800'}>
                    Timer: {formatTime(timer)}
                </Typography>
            </Box>
            <Typography color='#000'
                fontSize={'40px'}
                fontWeight={'800'}
                textAlign={'start'}>
                Question 1 :
            </Typography>
            <Typography color='#000'
                fontSize={'24px'}
                fontWeight={'500'}
                marginTop={'25px'}
                width={'1000px'}
                textAlign={'start'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Grid container marginTop='57px'
                spacing={3} width={'900px'}>
                <Grid item
                    xs={6}>
                    <Quise_Box response={'Option 1'}
                        response_index={'A'}/>
                </Grid>
                <Grid item
                    xs={6}>
                    <Quise_Box response={'Option 1'}
                        response_index={'A'}/>
                </Grid>
                <Grid item
                    xs={6}>
                    <Quise_Box response={'Option 1'}
                        response_index={'A'}/>
                </Grid>
                <Grid item
                    xs={6}>
                    <Quise_Box response={'Option 1'}
                        response_index={'A'}/>
                </Grid>
            </Grid>
            <Box  display={'flex'} height={'27%'} alignItems={'flex-end'}> 
                <Typography fontSize={'32px'} fontWeight={'800'} color='#000' >
                Question 1 / 10
                </Typography>
            </Box>
            </Box>
            <Box width={'616px'} height={'100.3vh'}  >
                <img src={raceImage} alt="" height={'100%'} width={'100%'}  />

            </Box>
        </Box>
    )
}

export default Quise
