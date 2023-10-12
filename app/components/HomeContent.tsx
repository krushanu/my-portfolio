import Link from 'next/link'
import React from 'react'
import LinkList from './LinkList'
import CountryFlags from './CountryFlags'

const firstName = "Krushanu"
const lastName = "Mohapatra"

const HomeContent = () => {
  return (
    <div className='flex justify-center p-2'>
      <div className='text-center'>
        <h1 className=''>{firstName} <br /> {lastName}</h1>
        <h4 className='my-10'>Fun loving Gadget Geek<br />Loves Javascript<br /></h4>
        <Link className="btn btn-primary rounded-full mb-10" href="/universe" >Explore my universe</Link>
        <LinkList />
        <CountryFlags />
      </div>
    </div>
  )
}

export default HomeContent
