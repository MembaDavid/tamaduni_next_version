import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


function Button(props) {
	var type = props.type
	var dropdown = props.dropdown
	var color = ""
	if (type == "dark") {
		color = "bg-[#2C2C2C] text-[#F5F5F5]"
	}else{
		color = "bg-[#F5F5F5] text-[#2C2C2C]"
	}
	var vis = props.visibility
	var visible = "";
	if(vis){
		visible = "visible" 
	}else{
		visible = "invisible"
	}
	
  return (
    <button className={`min-w-[187px], min-h-[25px] flex  ${color} ${visible}  p-2 rounded-lg font-inter text-[16px] hover:bg-slate-400 transition  duration-500 ease-in-out`}>
		{props.name}
		{dropdown? <FaAngleDown className='text-custom1 p-2 text-[28px] font-extrabold text-center'/>:""}
    </button>
  )
}

export default Button
