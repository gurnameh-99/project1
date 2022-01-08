import { Button } from '@material-ui/core'
import Link from 'next/link'
import Image from 'next/image'
import styled from "styled-components";
import { borderRadius } from 'styled-system';
const ImageWrap = styled.div`
border-radius: 20px; 
`;

export default function Home() {
  return (
    <div className="title1">
          <Image
          className="image-container"
          src = '/profilepic1.jpg'
          width = '250px'
          height = '250px'
          />
      <h2>Hi, I'm Akshat Mohindra!</h2>
      <h3>An experienced sales professional, husband to a Professor, father of two kids and son to an amazing set of parents.</h3>
      <div>
      <Link href="/about" passHref>
      <Button variant="outlined" style={{
        backgroundColor: "#050505",
        color: "#fff",
        textTransform: 'none',
        padding: '10px 80px',
        fontSize: "20px",
        borderRadius: 20
    }}size="large" >About Me</Button>
      </Link>
      </div>
      <h2 style ={{paddingTop:'50px' , fontSize: '42px'}}>Get in Touch</h2>
      <h3>My inbox is open for collaborations</h3>
      <Link href="mailto:akshatmohindra@gmail.com" passHref>
      <Button variant="outlined" style={{
        backgroundColor: "#050505",
        color: "#fff",
        textTransform: 'none',
        padding: '10px 70px',
        fontSize: "20px",
        borderRadius: 20
    }}size="large" >Say Hello</Button>
      </Link>
      <style jsx>{`
        .title1 {
          text-align: center;
          margin: 40px 20px;
        }
        .title1 h2{
          font-weight: 800;
          font-size: 52px;
        }
        .title1 h3{
          font-weight: 400;
          font-size: 24px;
          color: #424243;
          padding-bottom: 30px
        }
        .image-wrapper {
          box-sizing: content-box;
        }
          /* the magic happens here */
          .image-wrapper > div {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border-radius: 100px;
          }
        
      `}</style>
      


    </div>

    
  )
}