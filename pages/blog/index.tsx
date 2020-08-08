import React from 'react'

import Container from '../../components/container'
import CategorySelector from '../../components/category-selector'
import BlogItem, { IBlogItem } from '../../components/blog-item'
import SEO from '../../components/seo'
import Navbar from '../../components/navbar'

const BlogItems: IBlogItem[] = [
  {
    id: '1',
    type: 'tech',
    url: '/blog/own-website',
    title: 'Personal website/blog with NextJS and Netlify',
    date: 'August 8, 2020',
    subtitle: 'Write and deploy your own website/blog for FREE like this blog.'
  }
]

const Blog = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Container>
        <div className='sm:w-full md:w-1/2 lg:w-1/2'>
          <CategorySelector />
        </div>
        {BlogItems.length === 0 && (
          <div className='mt-6'>
            <h2 className='text-lg text-white'>NO ENTRIES YET.</h2>
          </div>
        )}
        {BlogItems.map((each, index) => (
          <div key={index}>
            <BlogItem
              id={index.toString()}
              type={each.type}
              url={each.url}
              title={each.title}
              date={each.date}
              subtitle={each.subtitle}
            />
          </div>
        ))}
      </Container>
    </>
  )
}

export default Blog
