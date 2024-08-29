import React from 'react'
import { FaImages, FaGlobe, FaLocationDot } from "react-icons/fa6";

function Subheader(props) {
	function count_1_to_10(){
		
	}
  return (
     <div className='flex justify-between items-center h-[109px] w-[978px] border border-black'>
	 <div className='flex flex-col justify-between items-start'>
		<h1>{props.particular}</h1>
		<p><span>Group:</span>{props.group}</p>
		<p><span>Period:</span>{props.period}</p>
	 </div>
	 <div className='flex h-[109px]'>
	 	<FaImages className='h-12 w-12 text-black' />
		 <FaGlobe className='h-12 w-12 text-black' />
		 <FaLocationDot className='h-12 w-12 text-black' />
	 </div>
	   
    </div>
  )
}

export default Subheader
