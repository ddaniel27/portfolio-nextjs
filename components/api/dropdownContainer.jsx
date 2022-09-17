import { useState } from 'react'
import Image from 'next/image'
import apiEndpoints from '../../data/apiEndpoints.json'
import Dropdown from '../dropdown'
import style from './dropdownContainer.module.css'

export default function DropdownContainer({}){

  const [dropdownValue, setDropdownValue] = useState('')
  const [resource, setResource] = useState('')

  const handleInputChange = ({target}) => {
    setResource(target.value)
  }

  return(
    <div className={style.container}>
      <div className={style.dropdownContainer}>
	{
	  apiEndpoints.data.map((item, index) => (
	    <Dropdown 
	      key={index} 
	      setDropdownValue={setDropdownValue} 
	      {...item}
	    />
	  ))
	}
      </div>
      <div className={style.apiInputContainer}>
	<p>https://pokeapi.co/api/v2/{dropdownValue && `${dropdownValue}/`}{resource && `${resource}/`}</p>
	<div className={style.inputContainer}>
	  <input 
	    type="text"
	    placeholder="Enter id or name..."
	    maxLength="20"
	    value={resource}
	    onChange={handleInputChange}
	    disabled={!dropdownValue}
	  />
	  <span className={style.inputIcon} style={resource ? {display:'block'} : {display:'none'}}>
	    <Image
	      src="/images/social-media/search.svg"
	      alt="github" width={30} height={30}
	    />
	  </span>
	</div>
      </div>
    </div>
  )

}
