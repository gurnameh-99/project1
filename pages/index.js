import { Button } from '@material-ui/core'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="title1">
      <h2>Hi, I'm Akshat Mohindra!</h2>
      <h3>An experienced sales professional, husband to a Professor, father of two kids and son to an amazing set of parents.</h3>
      <div>
      <Link href="/about" passHref>
      <Button variant="outlined" style={{
        backgroundColor: "#050505",
        color: "#fff",
        textTransform: 'none',
        padding: '10px 70px',
        fontSize: "18px"
    }}size="large" >About Me</Button>
      </Link>
      </div>
      <h2>Get in Touch</h2>
      <h3>My inbox is open for collaborations</h3>
      <Link href="mailto:akshatmohindra@gmail.com" passHref>
      <Button variant="outlined" style={{
        backgroundColor: "#050505",
        color: "#fff",
        textTransform: 'none',
        padding: '10px 70px',
        fontSize: "18px"
    }}size="large" >Say Hello</Button>
      </Link>
      <style jsx>{`
        .title1 {
          text-align: center;
          margin: 40px 20px;
        }
        .title1 h2{
          font-weight: 500
        }
        .title1 h3{
          font-weight: 400
        }
      `}</style>
      


    </div>

    
  )
}