import StyledSpan from './styledSpan';

export default function SpanAnimated({text='test'}){
  return ( 
    text
    .split('')
    .map( (letter, index) => 
      <StyledSpan key={index}>{letter}</StyledSpan>
    )
 )
}
