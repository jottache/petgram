import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../components/containers/RegisterMutation'
import { LoginMutation } from '../components/containers/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => { // el register(mutation) la data, el error y el loading llegan como datos de la render prop
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(({ data }) => {
                      const { signup } = data
                      activateAuth(signup)
                    })
                  }
                  const errorMsg = error && 'el usuario ya existe'

                  return (
                    <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                  )
                }
              }
            </RegisterMutation>
            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(({ data }) => {
                      const { login } = data
                      activateAuth(login)
                    })
                  }
                  const errorMsg = error && 'usuario o contrañesa incorrecta'
                  return (
                    <UserForm disabled={loading} error={errorMsg} title='iniciar sesion' onSubmit={onSubmit} />
                  )
                }
              }
            </LoginMutation>
          </>
        )
      }
    }
  </Context.Consumer>
)
