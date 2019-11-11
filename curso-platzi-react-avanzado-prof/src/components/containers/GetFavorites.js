import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFAvs } from '../ListOfFavs'

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>loading..</p>
  if (error) return <p>error!</p>
  const { favs } = data

  return <ListOfFAvs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {renderProp}
  </Query>
)
