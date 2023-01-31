import React from 'react';
import  './demo2.css';
let img1="https://picsum.photos/200/300";
let img2="https://picsum.photos/250/300";
let img3="https://picsum.photos/200/300/?blur";

const Demo2=()=>{
    return(
        <>
        <h1 className="heading">hey see this beautiful picture which is below</h1>
        <img src={img1} alt='1img'/>
        <a href='https://leetcode.com/problemset/all/'>
        <img src={img2} alt=' 2img'/>
        </a>
        <a href='https://www.wikipedia.org/'>
        <img src={img3} alt="randomImage"/>
        </a>
        {/* <p>{`"current time is:${new Date().toLocaleTimeString()}`}</p> */}

        </>
    )
}
export default Demo2;
