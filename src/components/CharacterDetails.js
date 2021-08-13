import React from 'react'
import styled from 'styled-components'

const InnerDiv = styled.div`
margin: 0 auto;
width: 60%;
text-align: left;
`

const InnerDetails = styled.h4`
font-size: 1.2rem;
`

const CharacterDetails =(props)=>{
   const { height, mass, birthYear, gender } = props;
    return (
    <InnerDiv>
        <InnerDetails>Height: {height}</InnerDetails>
        <InnerDetails>Mass: {mass}</InnerDetails>
        <InnerDetails>Birth Year: {birthYear}</InnerDetails>
        <InnerDetails>Gender: {gender}</InnerDetails>
    </InnerDiv>
    )
}

export default CharacterDetails;