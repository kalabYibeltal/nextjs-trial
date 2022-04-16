import Head from 'next/head'
import Navbar from './../comps/navbar';
import Footer from './../comps/footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> kalab | home</title>
        <meta name="keywords" content="monks" />
      </Head>
      <div >
    
        <h1 className={styles.title}> Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati ex sed. Ab ducimus et sed ipsam dignissimos molestiae labore fugit at. Esse, distinctio! Dolorum, velit! Esse ratione optio nam!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati ex sed. Ab ducimus et sed ipsam dignissimos molestiae labore fugit at. Esse, distinctio! Dolorum, velit! Esse ratione optio nam!</p>
        
      </div>
    </>
  );
}
