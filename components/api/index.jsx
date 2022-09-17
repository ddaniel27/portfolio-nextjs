import DropdownContainer from './dropdownContainer'
import SpanAnimated from '../styledSpan'
import JsonPretty from '../jsonPretty'
import style from './api.module.css'
import backData from '../../data/backItems.json'

export default function Api(){


  return(
    <div className={style.container}>
      <h2>
	<SpanAnimated text='API Playground' />
      </h2>
      <div className={style.controlls}>
	<div className={style.controllsField}>
	  <DropdownContainer/>
	</div>
	<div className={style.result}>
	  <JsonPretty data={backData} />	
	</div>

      </div>
    </div>
  ) 
}
