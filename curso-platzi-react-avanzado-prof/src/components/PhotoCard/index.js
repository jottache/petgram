import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { Link } from '@reach/router'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../favButton'
import { ToggleLikeMutation } from '../containers/toggleLikeMutation'

// const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, element] = useNearScreen()
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          {/* ira al mismo path, con una query string donde su valor sera la id */}
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: { input: { id } } })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}
