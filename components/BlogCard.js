import Link from 'next/link'
import Image from 'next/image'
export default function BlogCard({ blog }) {
  const { title, slug,datetime, thumbnail } = blog.fields

  return (
    <div className="card">
      <div className="featured">
      <Image 
          src={'https:' + thumbnail.fields.file.url}
          width= '400px'
          height= '300px'
          alt = {title}
        />
        {/* <Link href={'/blogs/' + slug}><a>Read More</a></Link> */}
      </div>
      <div className="content">
      
        <div className="info">
        <h4>
        <Link href={'/blogs/' + slug}><a>{ title }</a></Link>
          </h4>

          {/* <p>Published on { datetime }</p> */}
          
        </div>
        {/* <div className="actions">
          <Link href={'/blogs/' + slug}><a>Read More</a></Link>
        </div> */}
      </div>
      <style jsx>{`
      
      .featured{
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
        .card {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 10px;
        //   position: relative;
          top: -40px;
          left: -10px;
          
          border-radius: 10px;
          text-align: center;
        }
        .info a{
        //   padding: 5px;
          color: #000;
          text-decoration: none;
        
        }
        .info h4 {
          margin: 4px 0;
          font-size: 1.5rem
          
        }
        .info p {
          margin: 0;
          color: #777;
          font-size: 1rem;
        }
        .actions {
          margin-top: 5px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #000;
          padding: 40px 0px;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}