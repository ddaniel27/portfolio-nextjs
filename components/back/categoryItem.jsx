import Link from 'next/link'
import style from './categoryItem.module.css'

export default function CategoryItem({
  root='', 
  category='', 
  title='TITLE', 
  description='Description'
}) {
  return(
	<Link href={`/${root}/${category}`}>
	<div className={style.categoryItem}>
	  <h3><span>{title}</span></h3>
	  <p>{description}</p>
	</div>
	</Link>
  )
}
