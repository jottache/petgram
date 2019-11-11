import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

const HomePage = ({ categoryId }) => {
  return (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={categoryId} />
        </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
