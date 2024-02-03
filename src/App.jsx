import { Box, Button, Container, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';


export default function App() {

let [counter,setCounter] = useState(0);

const handleAdd = ()=>{
  setCounter(++counter)
}
const handleSub = ()=>{
  setCounter(--counter)
  }
const handleReset = ()=>{
  setCounter(0)
}

const theme = createTheme();
theme.typography.h1 = {
  padding: theme.spacing(-3),
  [theme.breakpoints.up('xl')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '10px',
  },
  [theme.breakpoints.up('xs')]: {
    margin: '0px',
    fontSize: '35px',
  },
};

return (
    <div className="AppBackground">
      <Container sx={{
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         minHeight:"100vh"
      }}>
        <Box sx={{
          border:"none", 
          height:"80vh",
          width:"100%", 
          borderColor:"black",
          backgroundColor:"#d1e8e2",
          borderRadius:"25px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
          }}>
         <ThemeProvider theme={theme}>
           <Typography variant="h1">Start Count</Typography>
         </ThemeProvider>
        <div className="CountSize">{counter}</div>
        
        <Stack 
        direction="row" 
        spacing={1} 
        sx={{
          margin:"10px"
        }}>
        <Button variant="contained" onClick={handleAdd}>+</Button>
        <Button variant="contained" onClick={handleSub} disabled={counter == '0'}>-</Button>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
        </Stack>
        </Box>
      </Container>
    </div>
  );
}

