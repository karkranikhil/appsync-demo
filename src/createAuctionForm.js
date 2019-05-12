import React from 'react'
import {Formik} from 'formik'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import {createAuction} from './graphql/mutations'

export const CreateAuctionForm=(props)=>{
   const {name, price}= props.data
    return(
            <form onSubmit={props.handleSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={name}
                    margin="normal"
                    onChange={props.handleChange}
                />
                <br/>
                <TextField
                    name="price"
                    label="Price"
                    value={price}
                    margin="normal"
                    onChange={props.handleChange}
                />
                <br/>
                <Button variant="contained" type="submit" >
        Submit
      </Button>

             </form>
    )
}


