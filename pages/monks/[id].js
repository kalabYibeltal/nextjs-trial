export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths =  data.map(monk =>{
        return { params:{ id: monk.id.toString() }}
    
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await  res.json()

    return {
        props:{monk: data}
    }
}

const Details = ({ monk }) => {
    return (  
        <div>
            <h1>{ monk.name }</h1>
            <p>{ monk.email }</p>
            <p>{ monk.website }</p>
        </div>
    );
} 
 
export default Details;