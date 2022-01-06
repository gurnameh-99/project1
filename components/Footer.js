import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
const Footer = () =>{
    return (
        <footer>
      <div className="bottom-bar">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>#talesbyAkshat</a></Link>
          <Link href="mailto:hello@shellbear.me"><a>Contact</a></Link>
      <style jsx>{`
        // .bottom-bar{
        //   display: grid;
        //   grid-template-columns: repeat(auto-fit, minmax(50px, 100px));
        //   grid-gap: 30px;
        //   justify-content: center;
        // }
        .bottom-bar a{
          color: #000;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          margin: 10px 10px 10px;
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
        <p>@2022 Akshat Mohindra</p>
      </footer>
    )
}
export default Footer;