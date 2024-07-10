import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Jonath</h1>
      <input placeholder='username' />
      <br /><br />
      <input type="password" placeholder='password' />
      <br /><br />
      <button>Login</button>
      <br /><br /><br /><br />
      <Typography variant='h2'>Login Page</Typography>
      <br />
      <TextField variant='outlined' label='Username'/>
      <br />
      <TextField variant='filled' label= 'Password'></TextField>
      <br />
     <Button variant='contained' color='secondary'  >Login</Button>
     <Button variant='text' color='secondary'> Login </Button>
     <Button variant='outlined' color='primary'> Login </Button>

    </div>
  )
}

export default First
