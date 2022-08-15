import { useState } from 'react'
import style from './styledSpan.module.css'

function randomColor() {
  const color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

export default function SpanAnimated({children}){

  const [hover, setHover] = useState(false)

  return ( 
    <span
      className={style.styleSpan}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style = {{
	...(hover ? 
	  { color: randomColor() } :
	  { color: '#FFF' }
	)
      }}
    >
    {children}
    </span>
  )
}
