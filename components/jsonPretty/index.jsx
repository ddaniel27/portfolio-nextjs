import { useState } from 'react'
import Image from 'next/image'
import style from './jsonPretty.module.css'

export default function JsonPretty({data}){

  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(JSON.stringify(data))
    setShow(true)
  }

  return(
    <div className={style.container}>
      <span 
	className={style.inputIcon}
	onClick={handleClick}
      >
	<Image
	  src="/images/social-media/copy.svg"
	  alt="search" width={30} height={30}
	/>
    <span className={style.showFeedback} style={{display: show ? 'block' : 'none'}} >Copied!</span>
      </span>
      <pre>
	{ JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}
