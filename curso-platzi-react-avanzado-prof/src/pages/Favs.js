import React from 'react'
import { FavsWithQuery } from '../components/containers/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus Favoritos'>
      <h2>favoritos</h2>
      <FavsWithQuery />
    </Layout>
  )
}
