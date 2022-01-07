import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blog" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })

  return {
    props: { blog: items[0] }
  }

}

export default function BlogDetails({ blog }) {
  const { featured, title, datetime, content } = blog.fields
  return (
    <div className="main">
      <div className="banner">
      
        <Image 
          src={'https:' + featured.fields.file.url}
          width='400%'
          height='400%'
        />
        <h2>{ title }</h2>
      </div>
      {/* <h2>{ title }</h2> */}

      <div className="info">
        <p> Posted on { datetime } </p>
      </div>
        
      <div className="content">
        <div>{documentToReactComponents(content)}</div>
      </div>

      <style jsx>{`
      .main{
        // margin: 40px 40px 40px;
      }
        h2{
          text-transform: uppercase;
          font-weight: 500;
        }
        image.center {
          display: block;
          margin: 0 auto;
      }

        .banner  {
          text-align: center;
        // display: flex;
        // flex-direction: centre;
        // // align-items: stretch;
        // justifyContent: centre;
        //   margin: 20px;
        //   background: #000;
        //   display: inline-block;
        //   padding: 60px;
        //   top: -60px;
        //   left: -10px;
        //   box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0 3%;;
          text-align: right; 
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
        .content{
          font-size: 1.2em;
          text-decoration: none;
          font-weight: 350;
        }
      `}</style>
    </div>
  )
}