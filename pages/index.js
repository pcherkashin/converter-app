import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TempConverter from './../components/temperature'
import DistConverter from './../components/distance'
import VolConverter from './../components/gallons'
import WeightConverter from './../components/pounds'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Units Converter</title>
        <meta name="description" content="Units Converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      < TempConverter />
      < DistConverter />
      < VolConverter />
      < WeightConverter />

      </main>
    </>
  )
}
