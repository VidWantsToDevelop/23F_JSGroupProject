import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 8px;
    background-color: white;
`;

export class Ingridient extends React.Component {
    render() {
        console.log("Index: " + this.props.index)
        console.log(typeof this.props.ingridient.id)
        return (
            <Draggable draggableId={"ing-" + this.props.ingridient.id} index={this.props.index}>
                {provided => (
                    <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                        {this.props.ingridient.ingridient}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Ingridient