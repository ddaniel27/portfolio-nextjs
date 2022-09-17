import Head from "next/head"
export default function HeadSeo({titleText}){
  const firstCharToUpperCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1)
    })
  }
  return(
    <Head>
      <title>{firstCharToUpperCase(titleText)}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
