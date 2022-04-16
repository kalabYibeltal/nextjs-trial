import Link from "next/link"
import { useEffect} from 'react'
import { useRouter} from 'next/router'
const Notfound = () => {
    const router = useRouter();
    useEffect(() =>{
        console.log('use effect run')
        setTimeout(() => {
            router.push('/');
        },3000 )
    },[])
    return ( 
        <div className="not-found">
            <h1> Oooops..</h1>
            <h2> go ask your master</h2>
            <Link  href="/"><a>home page</a></Link>
        </div>
     );
}
 
export default Notfound;