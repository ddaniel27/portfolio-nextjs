export default async function useAPI(base, field, value){
  try{
    const result = await fetch(`${base}/${field}/${value}`)
    if(result.ok){
      const data = await result.json()
      return data
    }
    return result.text()
  }catch(err){
    return {error: err.message}
  }
}
