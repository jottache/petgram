import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
// import { PhotoCardWithQuery } from './components/containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import Context from './Context'
import { Router } from '@reach/router'
export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(detailId)
  // const UserLogged = ({ children }) => {
  //   return children({ isAuth: true })
  // }
  const Favs = React.lazy(() => import('./pages/Favs'))
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <NotFound default />
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotFound default />
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>

        }
      </Context.Consumer>

      <NavBar />
    </Suspense>
  )
}
