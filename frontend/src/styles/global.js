import {createGlobalStyle} from 'styled-components'; 
import {CircularProgressbar} from 'react-circular-progressbar'; 

export default createGlobalStyle`
    *
    {
       margin: 0;  
       padding: 0; 
       outline: 0; 
       box-sizing: border-box; 
    }

    body 
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px; 
        background: #7159c1; 
        text-rendering: optimizeLegibility; // improve text render 
        -webkit-font-smoothing: antialiased; // only for macs 
    }
    html, body, #root 
    {
        height: 100%; //this part make that our aplication fill all screen 
    }
`; 