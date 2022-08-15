import { useState } from 'react'

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

export default function SpanAnimated({children}){

  const [hover, setHover] = useState(false)

  return ( 
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style = {{
	transition: '0.2s ease-out',
	...(hover ? 
	  {
	    color: randomColor(),
	    bottom: '20px'
	  } :
	  {
	    color: '#FFF',
	    position: 'relative',
	    bottom: '0px',
	  }
	)
      }}
    >
    {children}
    </span>
  )
}
