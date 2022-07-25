import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import BlogFeed from '../components/BlogFeed'
import Activities from '../components/Activities'
import Faq from '../components/faq'
import Venue from '../components/Venue'
import Team from '../components/Team'
import ContactUs from '../components/ContactUs'

const IndexPage = () => (
  <Layout pageTitle="Home">
    <Hero />
    <div className="m-4 rounded bg-white text-black">
      <About />
      <BlogFeed />
      <Activities />
      <Faq />
      <Venue />
      <Team />
      <ContactUs />
    </div>
  </Layout>
)

export default IndexPage
