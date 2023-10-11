import React from 'react'

import twitter from '@/public/twitter.png'
import linkedin from '@/public/linkedin.png'
import facebook from '@/public/facebook.png'
import instagram from '@/public/instagram.png'
import youtube from '@/public/youtube.png'
import github from '@/public/github.png'
import npm from '@/public/npm.png'
import mail from '@/public/email.png'

import SocialMediaLinks from './SocialMediaLinks'

const SocialLinks = [
  { src: twitter, alt: 'Twitter', redirectTo: 'https://twitter.com/KRUSHANUCHIKU' },
  { src: linkedin, alt: 'LinkedIn', redirectTo: 'https://www.linkedin.com/in/krushanu/' },
  { src: facebook, alt: 'Facebook', redirectTo: 'https://www.facebook.com/chiku.krushanu' },
  { src: instagram, alt: 'Instagram', redirectTo: 'https://www.instagram.com/krushanumohapatra/?hl=en' },
  { src: youtube, alt: 'Youtube', redirectTo: 'https://www.youtube.com/channel/UCUoNV8a7PLeDtsUstvsP5SA?view_as=subscriber' },
  { src: github, alt: 'Github', redirectTo: 'https://github.com/krushanu' },
  { src: npm, alt: 'NPM', redirectTo: 'https://www.npmjs.com/~krushanu' },
  { src: mail, alt: 'Email', redirectTo: 'https://www.facebook.com/chiku.krushanu' }
]

const LinkList = () => {
  return (
    <>
      <ul className='flex justify-center space-x-5'>
        {SocialLinks.map((eachLink, index) => <SocialMediaLinks key={index} src={eachLink.src} alt={eachLink.alt} redirectTo={eachLink.redirectTo} />)}
      </ul>
      <div hidden>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/uniconlabs" title="Uniconlabs">Uniconlabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/fathema-khanom" title="Fathema Khanom">Fathema Khanom</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/md-tanvirul-haque" title="Md Tanvirul Haque">Md Tanvirul Haque</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/laisa-islam-ani" title="Laisa Islam Ani">Laisa Islam Ani</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/grow-studio" title="Grow studio">Grow studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/artist" title="-Artist">-Artist</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </>
  )
}

export default LinkList
