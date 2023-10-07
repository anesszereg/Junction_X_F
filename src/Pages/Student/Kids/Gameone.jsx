import {Box, Typography} from '@mui/material';
import './Gameone.css';
import Drawer from '../../../Layout/Defaultlayout/Drawer';
import Navbar from '../../../Layout/Defaultlayout/Navbar';

function Gameone() {


    return (
        <div className="App">
            <Box display="flex" position="absolute" width="100%">
                <Drawer/>
                <Navbar/>
            </Box>

            <Box padding="136px 137px" overflow="hidden">
                <Box sx={
                    {
                        width: "100%",
                        display: "flex",
                        padding: "20px 200px",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }
                }>
                    <Typography sx={
                        {
                            color: '#000',
                            fontFamily: 'Outfit',
                            fontSize: '42px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            letterSpacing: '1.68px'
                        }
                    }>
                        Take the Quiz
                    </Typography>
                    <Typography sx={
                        {
                            color: '#5C5B68',
                            fontFamily: 'Outfit',
                            fontSize: '21px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            letterSpacing: '0.84px'
                        }
                    }>
                        Link the right components
                    </Typography>
                </Box>
                <iframe style={
                        {
                            maxWidth: '100%',
                            position: "relative",
                            zIndex: 10
                        }
                    }
                    src="https://wordwall.net/embed/9ccd2ed2980a496a9bc899e281054ed1?themeId=1&templateId=22&fontStackId=0"
                    width="1140"
                    height="380"
                    frameBorder="1"
                    allowFullScreen
                    title="Wordwall Embed"/>
                <Box sx={
                    {
                        display: "flex",
                        padding: "20px 200px",
                        justifyContent: "flex-end"
                    }
                }>
                    <button style={
                        {
                            width: '206px',
                            height: '55px',
                            flexShrink: 0,
                            borderRadius: '8px',
                            background: '#5200FF',
                            color: '#FFF',
                            fontFamily: 'Outfit',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: 'normal',
                            letterSpacing: '0.96px'
                        }
                    }>submuit</button>
                </Box>
            </Box>
        </div>
    );
}

export default Gameone;
