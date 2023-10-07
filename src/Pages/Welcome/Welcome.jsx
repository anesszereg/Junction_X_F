import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router'

function Welcome() {
  // const history =useHistory()
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography fontSize={"77.1px"} fontWeight={"600"} width={900}>
        Welcome to your learning platform
      </Typography>
      <Link
        to="/NavigationMap"
        style={{
          textDecoration: "none",
          color: "#000",
        }}
      >
        <Button
          sx={{
            marginTop: "30px",
            height: "111px",
            width: "600px",
            border: "8px solid #000",
            background: "#FFBA07",
            boxShadow: " 4px 4px 0px 0px #000",
            fontSize: "28px",
            color: "#000",
          }}
        >
          Start
        </Button>
      </Link>
    </Box>
  );
}

export default Welcome;
