import React from 'react'
import { Form, Input, Button, Title, Span } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
      <>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit}>
          <Input disabled={disabled} type='email' placeholder='email' value={email.value} onChange={email.onChange} />
          <Input disabled={disabled} type='password' placeholder='password' value={password.value} onChange={password.onChange} />
          <Button disabled={disabled}>{title}</Button>
        </Form>
        {
          error && <Span>{error}</Span>
        }
    </>
  )
}
