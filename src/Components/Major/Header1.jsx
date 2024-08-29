import React from 'react'
import Button from '../Minor/Buttons/Button'
import Dropdown from '../Minor/Buttons/Dropdown'

function Header1() {
  return (
    <div className='h-28 w-screen border border-dashed border-r-stone-800 flex justify-center items-start z-40'>
	 <Dropdown />
	 <Button name="Tourism"
				type = "light"
				dropdown = {false}
				visibility = {true}
			/>
			{/* <Button name="Tourism"
				type = "light"
				dropdown = {false}
				visibility = {true}
			/>
			<Button name="Tourism"
				type = "light"
				dropdown = {false}
				visibility = {true}
			/> */}
    </div>
  )
}

export default Header1
