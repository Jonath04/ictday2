import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <Typography variant='h3'>Registration Form</Typography>
        <br />
        <TextField variant='filled' label='Name'></TextField>
        <br />
        <TextField variant='filled' label='Age'></TextField>
        <br />
        <TextField variant='filled' label='Place'></TextField>
        <br />
        <TextField variant='filled' label='Email'></TextField>
        <br />
        <TextField variant='filled' label='Username'></TextField>
        <br />
        <TextField variant='filled' label='Password'></TextField>
        <br /><br />
        <Button variant='contained' color='primary'>Submit</Button>
      
    </div>
  )
}

export default Registration
