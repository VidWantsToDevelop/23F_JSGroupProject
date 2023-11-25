import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 8px
`;



export class Task extends React.Component {
    render() {
        console.log(this.props.task)
        return (
            <Container>
                {this.props.task}
            </Container>
        )
    }
}

export default Task