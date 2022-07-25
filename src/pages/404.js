import React from "react"

import Layout from "../components/layout"
import PageContainer from "../components/PageContainer"

const NotFoundPage = () => (
  <Layout pageTitle="404: Not found">
    <PageContainer pageTitle="404: Not found">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageContainer>
  </Layout>
)

export default NotFoundPage
