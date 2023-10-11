import HomeImage from './components/HomeImage'
import HomeContent from './components/HomeContent'

export default function Home() {
  return (
    <main className='container'>
      <div className='grid grid-cols-2'>
        <HomeImage />
        <HomeContent />
      </div>
    </main>
  )
}
