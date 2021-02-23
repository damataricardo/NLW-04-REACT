import Head from 'next/head'
import { Profiler } from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Contdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';



import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className = {styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
    <ExperienceBar />

    <section>
      <div>
        <Profile/>
        <CompletedChallenges/>
        <Contdown/>
      </div>
      <div>

      </div>

    </section>
    </div>
  )
}
