import { createClient } from 'contentful'
import BlogCard from '../components/BlogCard'
export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blog' })

  return {
    props: {
      blogs: res.items,
    }
  }
}

export default function Blogs({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
      <style jsx>{`
        .blog-list{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 3rem 2rem;
        }
      `}</style>
    </div>
  )
}