import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav >
          <div className="logo">
              <Image src="/aot.png" width={128} height={77} />
          </div>  
          <Link href="/egames" ><a>egames</a></Link> 
          <Link href="/about"><a>About</a></Link>
          <Link href="/monks"><a>kalabs' friends</a></Link>
        </nav>
     );
} 
 
export default Navbar;