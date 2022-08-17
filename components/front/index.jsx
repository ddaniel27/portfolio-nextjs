import SpanAnimated from '../styledSpan'
import SimpleCard from '../simpleCard'
import style from './front.module.css'
import data from '../../data/projects.json'

export default function Front(){
  return (
    <div className={style.container}>
      <h2>
	<SpanAnimated text={'Frontend Projects'}/>
      </h2>
      <div className={style.cardContainer}>
	{ data.data.map((item, index) => <SimpleCard key={index} {...item}/>) }
      </div>
    </div>
  )
}
