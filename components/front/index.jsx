import SpanAnimated from '../styledSpan'
import SimpleCard from '../simpleCard'
import style from './front.module.css'

export default function Front(){
  return (
    <div className={style.container}>
      <h2>
	<SpanAnimated text={'Frontend Projects'}/>
      </h2>
      <div className={style.cardContainer}>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
	<SimpleCard src='400' alt='project image'/>
      </div>
    </div>
  )
}
