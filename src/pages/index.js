import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from '../components/HomePageDivisions/Profile'
import AboutUs from '@/components/HomePageDivisions/AboutUs'
import Message from '../components/HomePageDivisions/Message'
import Domains from '../components/HomePageDivisions/Domains'
import NavBar from '../components/NavBar/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden h-screen w-screen">
        <nav className="sticky top-0 z-50">
          <NavBar />
        </nav>

        <Profile />
        <AboutUs />
        <Domains />
        <Message />
      </div>
    </>
  );
}
