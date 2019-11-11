import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

// es anonima por que todavia no colocamos inicio de secion en fotos
const LIKE_PHOTO = gql`
mutation likePhoto ($input: LikePhoto!){
    likePhoto (input: $input){
        id,
        liked,
        likes
    }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
