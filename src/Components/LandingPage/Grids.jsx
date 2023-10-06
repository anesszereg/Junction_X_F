
import Grid from '@mui/material/Grid';
import CardGrid from './CardGrid';
import image from "../../assets/img1.png"
import image2 from "../../assets/img2.png"
import image3 from "../../assets/img3.png"
function Grids() {
  return (
    <Grid container sx={{justifyContent:"center",alignItems:"center",gap:"20PX"}}>
     <CardGrid title="Virtual class" color="#F2A1FE" desc="Providing online tutorial services to student with an adaptative level" image={image}/>
     <CardGrid title="Analytics dashboard" color="#707EFF" desc="We provide for teacher an analytics dashboard to track students evolution"  image={image2}/>
     <CardGrid title="Gamified Courses" color="#FAD95C" desc="What a better way to learn than learn by having fun !"  image={image3}/>
    </Grid>
  );
}

export default Grids;
