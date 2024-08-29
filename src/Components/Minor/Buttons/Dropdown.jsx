import React from 'react'
import Button from './Button'
import { useState } from 'react'

function Dropdown() {
	const [name, setname] = useState('');
	const [dropped, setdropped] = useState(false);
	function handleClick(){
		setdropped(!dropped)
	}

	function handleButtonClick(e){
		setname(e.event.name)
	}

  return (	
	<div className='inline-block min-w-20'>
		<span onClick={handleClick} className='p-2 border border-gray-900 inline-block rounded-lg bg-slate-200'>
			<Button name={name? name : "Cultural Heritage"}
				type = "light"
				dropdown = {true}
				visibility = {true}
				
			/>
			{dropped?<Button name="Particular1"
				type = "light"
				dropdown = {false}
				visibility = {true}
				onClick = {handleButtonClick}

			/>:""}
			{dropped?<Button name="Another Item"
				type = "light"
				dropdown = {false}
				visibility = {true}
				onClick = {handleButtonClick}

			/>:""}
			{dropped?<Button name="Cultural Heritage"
				type = "light"
				dropdown = {false}
				visibility = {true}
				onClick = {handleButtonClick}

			/>:""}
			{dropped?<Button name="Cultural Heritage"
				type = "light"
				dropdown = {false}
				visibility = {true}

			/>:""}	
   	 	</span>  
	</div>
  )
}

export default Dropdown
