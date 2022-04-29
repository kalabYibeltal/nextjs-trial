import styles from '../../styles/monks.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { monks: data}
    }
}
const Monks = ({ monks }) => {
    return (
        <div> 
            <h1>Monks</h1>
            { monks.map(monk => (
                <Link href = {'/friends/' + monk.id} key={monk.id}>
                   <a className={ styles.single}>
                       <h3> { monk.name} </h3>
                   </a> 
                </Link>
            ))}
        </div>
      );
}
 
export default Monks;