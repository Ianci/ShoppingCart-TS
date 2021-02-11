import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

export const Item = () => {
    const classes = useStyles()
    return (
        <div>
           <Typography>Hola</Typography> 
        </div>
    )
}


const useStyles = makeStyles((theme) => {

})