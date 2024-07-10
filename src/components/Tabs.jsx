import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabs = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Jonath</TableCell>
                        <TableCell>20</TableCell>
                        <TableCell>TCR</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        
        </TableContainer>
      
    </div>
  )
}

export default Tabs
