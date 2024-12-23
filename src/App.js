import logo from './logo.svg';
import './App.css';
import { Typography, Stack, Container, Box } from '@mui/material';
import { fontWeight } from '@mui/system';
import {static_text, param_data} from './data';
import ParamSizeSection from './Param';

export const ContainerStyle = {
  width: "100%",
  textAlign: "left",
  paddingLeft: "5vw",
  paddingRight: "5vw",
  height: "auto",
  marginTop: "10px",
};

function App() {
  return (
    <Container sx={{ paddingLeft: "5vw", paddingRight: "5vw", marginTop: "10px" }}>
      <Typography marginTop="8px" variant="h4" component="h4" fontStyle={"italic"}>
        Attention Optimization Experiment
      </Typography>
      <hr/>
      <Box marginTop="30px">
        <Typography sx={{ fontWeight: 'bold'}} marginTop="8px" variant="h5" component="h5">
          Abstract
        </Typography>

        <Typography marginTop="8px" variant="body1" component="p">
          {static_text.abstract}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 'bold', marginBottom: '20px'}} marginTop="30px" variant="h5" component="h5">
          Model Generated Samples
      </Typography>
      <hr/>

      {
        param_data.map((param, index) => (
          <ParamSizeSection key={index} paramSize={param.size} data={param.data}/>
        ))
      }   

      </Container>
  );
}

export default App;
