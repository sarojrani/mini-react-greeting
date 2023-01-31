import React from 'react';
import './task.css'
const currentDate=new Date()
let time=currentDate.getHours()
var greet="";
let styling={}
if(time>=1 && time<12){
  greet="good morning";
  styling.color="Green"
}
else if(time>=12 && time<16){
  greet="good afterNoon";
  styling.color="Orange"
}
else if(time>=16 && time<21){
  greet="good evening"
  styling.color="black"
}
else if(time>=21 && time<12){
  greet="good night"
  styling.color="Black"
}



const Greeting=()=>{
    
    return(
        
        <div className='main'>
      <h1>
      {" "}
      hello sir , <span style={styling}> {greet} </span></h1>
      </div> 
    )
}
export default Greeting;