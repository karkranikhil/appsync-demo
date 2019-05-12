import React, {useEffect} from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listAuctions } from './graphql/queries';
import {AuctionCard} from './AuctionCard'
import { buildSubscription } from 'aws-appsync';
import {onCreateAuction} from './graphql/subscriptions'
const GridStyle={
    display:'grid',
    gridTemplateColumns:'repeat(5,1fr)',
    gridGap:10
}
export const OnMount=({onEffect})=>{
    useEffect(onEffect, [])
    return null
}
export const Auctions=()=>{
    return (
        // variables={{limit:5}}
        <Query query={gql(listAuctions)} variables={{limit:100}}> 
            {({data,loading, error, subscribeToMore})=>{
                console.log(data)
                if (loading) {
                    return <p>Loading ...</p>;
                  }
                  if (error) {
                    return <p>{error.message}</p>;
                  }
                  return(
                      <>
                      {data && data.listAuctions && data.listAuctions.items?
                        <div style={GridStyle}>
                        <OnMount onEffect={()=>{
                            return subscribeToMore(
                                buildSubscription(gql(onCreateAuction), gql(listAuctions))
                                )
                        }}/>
                        {data.listAuctions.items.map((item)=>(
                                    <AuctionCard name={item.name} price={item.price} key={item.id}/>
                                ))
                            }
                        </div>
                        :null
                    }
                    </>
                  )
            }
            }
        </Query>
    )
}