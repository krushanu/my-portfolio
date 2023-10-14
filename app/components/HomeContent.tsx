import Link from 'next/link'
import React from 'react'
import LinkList from './LinkList'
import CountryFlags from './CountryFlags'

const firstName = "Krushanu"
const lastName = "Mohapatra"

const HomeContent = () => {
  return (
    <div className='flex items-center lg:h-screen justify-center p-2'>
      <div className='text-center space-y-8 lg:space-y-14'>
        <h1 className=''>{firstName} <br /> {lastName}</h1>
        <h4 className=''>Fun loving Gadget Geek<br />Loves Javascript<br /></h4>
        <Link className="btn btn-primary rounded-full" href="/universe" >Explore my universe</Link>
        <LinkList />
        <CountryFlags />
      </div>
    </div>
  )
}

export default HomeContent
