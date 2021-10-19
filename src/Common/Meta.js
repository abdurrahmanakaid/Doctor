import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To BoroBazar | Vintage',
  description: 'We sell the best products for cheap',
  keywords: 'fresh vegetables, Fresh Cilantro, cheap electroincs',
}

export default Meta
