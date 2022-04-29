import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
    
        <div className={styles.grid}>
          <a href="https://nerdlegame.com/" className={styles.card}>
            <h2>nerdle &rarr;</h2>
            <p>mastered by kalab Yibeltal</p>
          </a>

          <a href="https://www.nytimes.com/games/wordle/index.html" className={styles.card}>
            <h2>woordle &rarr;</h2>
            <p>Devloped by new york times.</p>
          </a>

          <a
            href="https://lyricle.app"
            className={styles.card}
          >
            <h2>lyrcle &rarr;</h2>
            <p>Devloped by Rodas, barok and tibebu</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>chess &rarr;</h2>
            <p>
              Takes 20,000 games to master.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by MegaMind
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
