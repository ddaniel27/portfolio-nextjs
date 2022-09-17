import { useState } from 'react'
import DropdownContainer from './dropdownContainer'
import SpanAnimated from '../styledSpan'
import JsonPretty from '../jsonPretty'
import style from './api.module.css'
//import backData from '../../data/backItems.json'

export default function Api(){

  const [apiResult, setApiResult] = useState({})

  return(
    <div className={style.container}>
      <h2>
	<SpanAnimated text='API Playground' />
      </h2>
      <div className={style.controlls}>
	<div className={style.controllsField}>
	  <DropdownContainer setResult={setApiResult}/>
	</div>
	<div className={style.result}>
	  <JsonPretty data={apiResult} />	
	</div>

      </div>
    </div>
  ) 
}
