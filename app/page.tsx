'use client'
import Image from 'next/image'
import Currency from './components/Currency/Currency'

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      <Currency/>
    </main>
  )
}
