import apiEndpoints from '../../data/apiEndpoints.json'
import Dropdown from '../dropdown'
import style from './dropdownContainer.module.css'

export default function DropdownContainer({setDropdownValue}){
  return(
    <div className={style.container}>
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
  )

}
