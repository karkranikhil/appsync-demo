import React, {useState} from 'react'
import {Formik} from 'formik'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import {createAuction} from './graphql/mutations'
import { CreateAuctionForm } from './createAuctionForm';
const initialState={
    name: "",
    price: 0
  }
 const CreateAuctionFormContainer=()=>{
   const [inputs, setInputs] = useState(initialState)
   const handleChange=(event)=>{
       setInputs({...inputs,[event.target.name]:event.target.value})
   }
   const submitHandler=(e, createAuction)=>{
       e.preventDefault()
       const {name, price}= inputs
       console.log('handleSubmit')
       createAuction({
        variables:{
            input:{
                name,
                price
            }
        }
      }).then(res => {
        console.log(res)
        setInputs({...inputs,...initialState})
      });
   }
    return(
        <Mutation mutation={gql(createAuction)}>
        {(createAuction, { data, loading, error }) => {
            if (loading) {
                return <p>Loading ...</p>;
              }
              if (error) {
                return <p>{error.message}</p>;
              }
            return (
            <CreateAuctionForm 
                data={inputs} 
                handleChange={handleChange}
                handleSubmit={(event)=>submitHandler(event, createAuction)}
            />
            )
         }}
        </Mutation>
    )
}


export default CreateAuctionFormContainer