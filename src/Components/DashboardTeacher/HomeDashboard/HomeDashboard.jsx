import ClassGraph from '../../../assets/Svgs/ClassGraph.svg';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import {MdMoreVert} from 'react-icons/md';
import LinearProgress from '@mui/material/LinearProgress';
import './HomeDashboard.css';
import AnalyticsCard from './AnalyticsCard';
import BestStudent from './BestStudent';
import ModuleCard from './ModuleCard';
import { Box, Typography } from '@mui/material';
import {AiOutlineLaptop} from 'react-icons/ai'

const columns = [
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'phone', headerName: 'Phone', width: 180 },
  {
    field: 'class',
    headerName: 'Class',
    width: 120,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="tableClass">{`${params.value}`}</span>
      </div>
    ),
  },
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'course',
    headerName: 'Course',
    width: 160,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LinearProgress
          variant="determinate"
          value={params.value}
          sx={{
            height: 10,
            width: 100,
            borderRadius: 4,
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'green', // Change the progress bar color
            },
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: '14px',
          }}>{`${params.value}%`}</span>
      </div>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 70,
    renderCell: () => (
      <IconButton>
        <MdMoreVert />
      </IconButton>
    ),
  },
];

const rows = [
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '2as',
    id: 35,
    course: 35,
    actions: '',
  },
  {
    name: 'Salim',
    phone: '123-456-7890',
    class: '3as',
    id: 42,
    course: 65,
    actions: '',
  },
  {
    name: 'Sidali',
    phone: '123-456-7890',
    class: '3as',
    id: 45,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '1as',
    id: 16,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: '1as',
    id: 17,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: null,
    id: 150,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: 'Ferrara',
    id: 44,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: '123-456-7890',
    class: 'Rossini',
    id: 36,
    course: 35,
    actions: '',
  },
  {
    name: 'Willem',
    phone: 'Roxie',
    class: 'Harvey',
    id: 65,
    course: 35,
    actions: '',
  },
];


const HomeDashboard = () => {
  return (
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="firstLine">
        <AnalyticsCard/>
        <BestStudent/>
        <div className="classProgress">
          <h4>Classes Progress</h4>
          <img src={ClassGraph} />
        </div>
      </div>
      <div className="secondLine">
        <div className="moduleCourses">
          <div className="top">
            <div>
              <h2>Latest Course</h2>
              <p>780 questions</p>
            </div>
            <IconButton>
              <MdMoreVert />
            </IconButton>
          </div>
        <Box height={'60px'} width={'100%'} display={'flex'} gap='12px' padding={'20px'}>

        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:"42px",
          width:'42px',
          backgroundColor:'#D9D9D9',
          borderRadius:'8px'



        }}>
          <AiOutlineLaptop size={25} color='#000' />

        </Box>
        <Box >

          <Typography fontSize={'18px'} fontWeight={'500'} textAlign={'start'} color={'#000'}>development</Typography>
          <Typography fontSize={'10px'} fontWeight={'400'} textAlign={'start'} color={'#000'}>120 Questions</Typography>
        </Box>

        </Box>
        </div>
        <div style={{ height: 370, width: '100%', marginLeft: '10px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard