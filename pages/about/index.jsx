import About from '../../components/about/about'
import Data from '../../data/en.json'


export default function AboutPage({ text }){
    return <About text={text} />
}


export async function getStaticProps(){
    const text = Data.about
    return {
        props: {
            text
        }
    }
}