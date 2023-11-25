import React from "react"
import styled from "styled-components"
import Ingridient from "./Ingridient"
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const IngridientsList = styled.div`
    padding: 8px;
`;

export default class Column extends React.Component {
    render() {
        const uniqueKey = this.props.column.id + "-" + this.props.column.title

        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={"col-" + this.props.column.id}>
                    {provided => (
                        <IngridientsList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                this.props.ingridients.ingridients.map((ingridient, index) => {
                                    return <Ingridient key={ingridient.index} index={index} ingridient={ingridient} />
                                })
                            }

                            {provided.placeholder}
                        </IngridientsList>
                    )}
                </Droppable>
            </Container>
        )
    }
}