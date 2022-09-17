import { useState } from 'react'
import Dropdown from '../dropdown'
import InputQuery from '../inputQuery'
import apiEndpoints from '../../data/apiEndpoints.json'
import style from './dropdownContainer.module.css'

//

export default function DropdownContainer({setResult}){

  const [dropdownValue, setDropdownValue] = useState('')

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
    <InputQuery base={'https://pokeapi.co/api/v2'} field={dropdownValue} setResult={setResult} />
    </div>
  )

}
