import About from '../../components/about/about'
import en from '../../data/en.json'
import es from '../../data/es.json'


export default function AboutPage({ text }){
    return <About text={text} />
}

export async function getStaticPaths(){
    const paths = [
        { params: { lang: 'en' } },
        { params: { lang: 'es' } }
    ]
    return { paths, fallback: false }
}

export async function getStaticProps({ params }){
    const text = params.lang === 'en' ? en.about : es.about
    return {
        props: {
            text
        }
    }
}