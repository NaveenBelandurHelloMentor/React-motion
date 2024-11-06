import React from 'react'
import { useState } from "react";
import {motion} from 'framer-motion'

const Test = () =>{
    const [min, setMin] = useState(0);
    const [scale,setScale] = useState(1)
    const [left,setLeft] = useState(0)
    const [right,setRight] = useState(0)
    return (
        <>
        <motion.div
          animate={{
            x: Number(left),
            y: Number(right),
            scale: Number(scale),
            rotate: Number(min),
          }}
            style={{
              width:'100%',
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              border: "1px solid red",
              width: "150px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
          }}
        />
        <p>Left / Right</p>
        <input type="range" id="points" name="points" min="0" max="100" value={left}  onChange={(e)=>setLeft(e.target.value)}/>
        <p>Up / Down</p>
        <input type="range" id="points" name="points" min="0" max="100" value={right}  onChange={(e)=>setRight(e.target.value)}/>
        <p>Rotate</p>
       <input type="range" id="points" name="points" min="0" max="100" value={min}  onChange={(e)=>setMin(e.target.value)}/>
       <p>Scale</p>
       <input type="range" id="points" name="points" min="1" max="2" value={scale}  onChange={(e)=>setScale(e.target.value)}/>
      </>
    )
}





export default Test