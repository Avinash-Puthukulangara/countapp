import { Box, Button, Container, Stack, Typography } from '@mui/material';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';


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
          height:"70vh",
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
         <h1>Start Count</h1> 
        <div className="CountSize">{counter}</div>
        
        <Stack 
        direction="row" 
        spacing={1} 
        sx={{
          margin:"10px"
        }}>
        <Button variant="contained" onClick={handleAdd}>Increment</Button>
        <Button variant="contained" onClick={handleSub} >Decrement</Button>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
        </Stack>
        </Box>
      </Container>
    </div>
  );
}

