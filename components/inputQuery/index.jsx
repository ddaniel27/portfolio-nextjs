import { useState } from 'react'
import Image from 'next/image'
import useAPI from '../../hooks/useAPI'
import style from './inputQuery.module.css'
export default function InputQuery({base, field, setResult}) {

  const [item, setItem] = useState('')

  const handleInputChange = ({target}) => {
    setItem(target.value)
  }

  const handleClick = () => {
    useAPI(base, field, item).then((data) => {
      setResult(data)
    })
  }

  return (
      <div className={style.apiInputContainer}>
	<p>{base}/{field && `${field}/`}{item && `${item}/`}</p>
	<div className={style.inputContainer}>
	  <input 
	    type="text"
	    placeholder="Enter id or name..."
	    maxLength="20"
	    value={item}
	    onChange={handleInputChange}
	    disabled={!field}
	  />
	  <span 
	    className={style.inputIcon}
	    onClick={handleClick}
	    style={item ? {display:'block'} : {display:'none'}}
	  >
	    <Image
	      src="/images/social-media/search.svg"
	      alt="search" width={30} height={30}
	    />
	  </span>
	</div>
      </div>
  )
}
