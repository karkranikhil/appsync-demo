import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { listAuctions } from './graphql/queries';
import {AuctionCard} from './AuctionCard'

const GridStyle={
    display:'grid',
    gridTemplateColumns:'repeat(5,1fr)',
    gridGap:10
}
export const Auctions=()=>{
    return (
        // variables={{limit:5}}
        <Query query={gql(listAuctions)} variables={{limit:10}}> 
            {({data,loading, error})=>{
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
                        <div style={GridStyle}>{data.listAuctions.items.map((item)=>(
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