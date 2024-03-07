import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    justify-content: center;
    align-items:center;
    width: auto;
`;
const CardBox = styled.div`
    height: auto;
    margin: 1em;
    padding: 10px;
    background-color: blue;
    width: auto;
    font-size: 10px;

`;
const Card = ({ results }) => {
    return (
        <CardContainer>
            {
                results && results.map(result => (
                    <CardBox className='card'>
                        <h1> {result.id} </h1>
                        <h1> {result.title} </h1>
                        <h2> {result.body} </h2>
                    </CardBox>
                ))

            }



        </CardContainer>
    )
}

export default Card
