import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails'



const Character =(props)=>{
    const { results } = props;
    const [seeInfo, setSeeInfo] = useState(false);
    const [openButton, setOpenButton] = useState('See More ⬇️')

    function openFunction(){
        if(seeInfo){
            setSeeInfo(false);
            setOpenButton('See More ⬇️')
        } else{
            setSeeInfo(true);
            setOpenButton('Close ❌')
        }
    }

    const MainDiv = styled.div`
    display: flex;
    background: #8D99AE;
    border: 1px solid black;
    width: 70%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    transition: .3s;
    border-radius: 10px;
    &:hover{
        background-color: #EF233C;
    }
    `
    const MainButton = styled.button`
    border-radius: 10px;
    background: black;
    border: 1px solid white;
    color: white;
    padding: 7px;
    font-size: 15px;
    `
    const MainName = styled.h3`
        font-size: 1.2rem;
        color: white;
    `
    return (
        <>
        <MainDiv>
        <MainName>{results.name}</MainName>
        <MainButton onClick={e=>openFunction()}>{openButton}</MainButton>
        </MainDiv>
        {seeInfo && 
            <div>
            <CharacterDetails height={results.height} mass={results.mass} birthYear={results.birth_year} gender={results.gender} />
            </div>}
            </>
    )
}




export default Character;
