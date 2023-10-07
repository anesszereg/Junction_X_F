import { Box } from "@mui/material";
import img1 from "../../assets/text2.png";

function Last() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "130vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "80px 80px 0px 0px",
        marginTop: "-80px",
      }}
    ></Box>
  );
}

export default Last;
