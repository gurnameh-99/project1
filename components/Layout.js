import Link from 'next/link'
import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
  
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              #talesbyAkshat
            </h1>
            {/* <h2>Spread The Joy</h2> */}
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
      <div className="bottom-bar">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>#talesbyAkshat</a></Link>
          <Link href="mailto:hello@shellbear.me"><a>Contact</a></Link>
      <style jsx>{`
        .bottom-bar{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
          grid-gap: 30px;
          justify-content: center;
        }
        .bottom-bar a{
          color: #000;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
        }
      `}</style>
      </div>
      <div className='socials'>
      <SocialIcon url="https://twitter.com/talesbyakshat" />
      <SocialIcon url="https://www.linkedin.com/in/akshatmohindra/" />
      <SocialIcon url="https://instagram.com/talesbyakshat" />
      <SocialIcon url="mailto:akshatmohindra@gmail.com" />
      <style jsx>{`
        .socials{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 60px));
          grid-gap: 5px;
          justify-content: center;
          margin-top: 25px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
        <p>Designed and Built by Kuhu Chawla</p>
      </footer>
    </div>
  )
}