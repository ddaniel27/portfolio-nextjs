import style from './dropdown.module.css'

export default function Dropdown({
  setDropdownValue, 
  title="Title", 
  items=[], 
  group="group"
}){

  const handleChange = ({target}) => {
    if(!setDropdownValue || typeof setDropdownValue !== 'function'){ return }
    setDropdownValue(target.value)
  }

  return(
    <details className={style.dropdown} onChange={handleChange}>
      <summary className={style.dropdownCategory}>
	<span>{title}</span>
      </summary>
      <div className={style.dropdownContent}>
	<ul className={style.dropdownList}>

	  {items.map((item, index) => (
	    <li key={index} className={style.dropdownItem}>
	      <label>
		<input type="radio" name={group} value={item.value} />
		<span>{item.name}</span>
	      </label>
	    </li>
	  ))}

	</ul>
      </div>
    </details>

  )
}
