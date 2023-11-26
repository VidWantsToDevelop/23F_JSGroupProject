import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    margin-bottom: 8px;
    background-color: white;
    opacity: ${props => (props.isDragging ? '0.5' : '1')};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmojiContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    backround-color: gray;
`

export class Ingredient extends React.Component {
    render() {
        console.log("Index: " + this.props.index)
        console.log(typeof this.props.ingredient.id)
        return (
            <Draggable key={"ing-" + this.props.ingredient.id} draggableId={"ing-" + this.props.ingredient.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    >
                        <EmojiContainer>
                            🔥
                        </EmojiContainer>
                        {this.props.ingredient.ingredient}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Ingredient