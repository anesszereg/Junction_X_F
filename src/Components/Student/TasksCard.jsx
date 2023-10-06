import {Avatar, Box, Button, Typography} from '@mui/material'



function TasksCard() {
    return (
        <Box sx={
            {
                width: '870px',
                height: '268px',
                borderRadius: '16px',
                border: '1.5px solid #e5e5e5',
                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
                padding: "20px 48px "

            }
        }>

            <Typography fontSize={'16px'}
                fontWeight={'600'}>
                Today s Tasks
            </Typography>
            <Typography fontSize={'16px'}
                fontWeight={'600'}
                marginTop={'16px'}>
                Over here we display the Course Title of the day
            </Typography>
            <Typography fontSize={'12px'}
                fontWeight={'500'}
                color='#5200FF'>
                Subject
            </Typography>
            <Typography fontSize={'12px'}
                fontWeight={'500'}
                color='#5C5B68'
                width={'668px'}
                marginTop={'21px'}>
                over here we are going to display a quick & short text of introduction to the upcoming course  over here we are going to display a quick & short text of introduction to the upcoming course over here we are going to display a quick & short text of introduction to the upcoming course
            </Typography>

            <Box display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between '}
                marginTop={'30px'}>

                <Box display={'flex'}
                    gap={'10px'} alignItems={'center'}>
                    <Box display={'flex'} >
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


                    <Typography fontSize={'12px'}
                        fontWeight={'500'}
                        color='#5200FF'>
                        participants
                    </Typography>

                </Box>
                <Button sx={
                    {
                        padding: '13px 74px',
                        borderRadius: '8px',
                        backgroundColor: '#5200FF',
                        color:'#fff',
                        fontSize:'12px',
                        fontWeight:'500'
                    }
                }>
                    Join Course

                </Button>
            </Box>


        </Box>
    )
}

export default TasksCard
