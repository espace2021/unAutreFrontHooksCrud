import React,{useEffect,useRef,useState} from 'react'

import {
CardMedia }
from '@mui/material';
  

const ArticlesCardsAff = ({image}) => {

    const [inView, setInView] = useState(false);

  const ref=useRef();
 
  let callback=(entries,observer)=>{
    entries.forEach(entry=>{
        console.log(entry)
     if(entry.isIntersecting){
         setInView(true)
     }
    })
  }

  useEffect(() => {
    
  let observer= new IntersectionObserver(callback);
  if(ref?.current){
    observer.observe(ref.current) ;
  }
  return()=>{
   observer.disconnect();
  }

}, []);

  return inView? 
  <CardMedia
   ref={ref}
   component="img"
   height="200"
   width="100"
   image={image}
   alt=""
 /> 
:<CardMedia 
ref={ref}
component="img"
height="200"
width="100"
image="imload.png"
alt=""
/> 

    }
    

export default ArticlesCardsAff
