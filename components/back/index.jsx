import SpanAnimated from '../styledSpan'
import CategoryItem from './categoryItem'
import style from './back.module.css'
import backData from '../../data/backItems.json'

export default function Back(){
  return(
    <div className={style.container}>
      <h2>
	<SpanAnimated text={'Backend Playground'} />
      </h2>

      <div className={style.category}>
	{backData.data.map(({root, category, title, description}) => (
	  <CategoryItem 
	    key={category} 
	    root={root} 
	    category={category} 
	    title={title} 
	    description={description} 
	  />
	))}
      </div>

    </div>
  )
}

