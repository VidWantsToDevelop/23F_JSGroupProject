import React from "react"
import styled from "styled-components"
import Ingredient from "./Ingredient"
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    background-color: rgba(255, 255, 255, 0.80);
    border-radius: 2px;

    flex: 1;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const IngredientsList = styled.div`
    padding: 8px;
    flex-grow: 1;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={"col-" + this.props.column.id}>
                    {provided => (
                        <IngredientsList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                this.props.ingredients.map((ingredient, index) => {
                                    return <Ingredient key={ingredient.index} index={index} ingredient={ingredient} />
                                })
                            }

                            {provided.placeholder}
                        </IngredientsList>
                    )}
                </Droppable>
            </Container>
        )
    }
}