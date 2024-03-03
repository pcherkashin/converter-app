import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TempConverter from './../components/temperature'
import DistConverter from './../components/distance'
import VolConverter from './../components/gallons'
import WeightConverter from './../components/pounds'
import LengthConverter from './../components/feet'
import InchConverter from './../components/inches'
import SquareConverter from './../components/square'
import OunceConverter from './../components/ounces'
import CurrencyConverter from './../components/currency'

import Footer from './../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Units Converter</title>
        <meta name='description' content='Units Converter' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.componentContainer}>
          <CurrencyConverter />
        </div>
        <div className={styles.componentContainer}>
          <TempConverter />
        </div>
        <div className={styles.componentContainer}>
          <VolConverter />
        </div>
        <div className={styles.componentContainer}>
          <WeightConverter />
        </div>
        <div className={styles.componentContainer}>
          <OunceConverter />
        </div>
        <div className={styles.componentContainer}>
          <DistConverter />
        </div>
        <div className={styles.componentContainer}>
          <LengthConverter />
        </div>
        <div className={styles.componentContainer}>
          <InchConverter />
        </div>
        <div className={styles.componentContainer}>
          <SquareConverter />
        </div>
        <hr />
        <Footer />
      </main>
    </>
  )
}
