import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
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

export class Ingridient extends React.Component {
    render() {
        console.log("Index: " + this.props.index)
        console.log(typeof this.props.ingridient.id)
        return (
            <Draggable draggableId={"ing-" + this.props.ingridient.id} index={this.props.index}>
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
                        {this.props.ingridient.ingridient}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Ingridient