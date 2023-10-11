import Link from 'next/link'
import React from 'react'
import LinkList from './LinkList'
import CountryFlags from './CountryFlags'

const firstName = "Krushanu"
const lastName = "Mohapatra"

const HomeContent = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-center'>
        <h1>{firstName} <br /> {lastName}</h1>
        <p>Fun loving Gadget Geek<br />Loves Javascript<br />
          <Link className="btn  btn-primary my-10" href="/explore" >Explore my universe</Link>
        </p>
        <LinkList />
        <CountryFlags />
      </div>
    </div>
  )
}

export default HomeContent

