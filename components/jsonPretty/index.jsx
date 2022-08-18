import style from './jsonPretty.module.css'

export default function JsonPretty({data}){
  return(
    <div className={style.container}>
      <pre>
	{ JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}
