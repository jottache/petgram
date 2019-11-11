import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo' // componente especial que nos permite utilizar la tecnica de render props

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>cargando...</p>
        if (error) return <p>error...</p>
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
