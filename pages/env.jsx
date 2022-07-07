export default function Env({ test }){
    return <div>Valor de la variable de entorno: {test}</div>
}


export async function getStaticProps() {
    return {
        props: {
            test: process.env.TEST
        }
    }
}