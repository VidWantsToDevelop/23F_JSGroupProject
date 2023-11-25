import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`;

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders,
        ingridients: Data.ingridients
    }

    // Get the ingridients from the pot
    whatsInThePot = () => {

        // Here is the requested format for the OpenAI API (e.g. "potato,beef,salt,turmeric")
        const pot = this.state.columns["col-0"].ingridientIds.map(ingridientId => this.state.ingridients[ingridientId]);
        var potString = "";
        pot.forEach(ingridient => {
            potString += ingridient.ingridient + ","
        })

        // Trim the last comma
        potString = potString.substring(0, potString.length - 1);

        return potString;
    }

    // almost like a useEffect hook :)
    componentDidUpdate(prevProps, prevState) {
        // Check if something has been put/removed from the pot
        if(prevState.columns["col-0"].ingridientIds.length !== this.state.columns["col-0"].ingridientIds.length) {
            console.log("Pot has been updated");
            console.log(this.whatsInThePot());
        }
        
    }

    onDragEnd = result => {
        // TODO: Implement onDragEnd
        const { destination, source, draggableId } = result

        // If dropped outside of the ingridients list -> exit function
        if(!destination) {
            return;
        }

        // If dropped in the same place -> exit function
        if(destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // Get the column Id from the droppableId
        const sourceColId = source.droppableId;
        const destinationColId = destination.droppableId;
        const draggableIdParsed = draggableId.split("-")[1];

        const start = this.state.columns[sourceColId];
        const finish = this.state.columns[destinationColId];

        // If droppped in the same column
        if(start === finish) {
            const newIngridientIds = Array.from(start.ingridientIds);

            // Remove the ingridient from the source column and add it to the destination column (newIngridientIds)
            newIngridientIds.splice(source.index, 1);
            newIngridientIds.splice(destination.index, 0, Number(draggableIdParsed));

            const newColumn = {
                ...start,
                ingridientIds: newIngridientIds
            };

            // Match out column id format
            const newColumnId = "col-" + newColumn.id;

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumnId]: newColumn
                }
            };

            // Assigning the new state
            this.setState(newState);

            return;
        }

        // Moving from one column to another
        const startIngridientIds = Array.from(start.ingridientIds);
        startIngridientIds.splice(source.index, 1);
        const newStart = {
            ...start,
            ingridientIds: startIngridientIds
        }; // Remove the ingridient from the source column

        const finishIngridientIds = Array.from(finish.ingridientIds);
        finishIngridientIds.splice(destination.index, 0, Number(draggableIdParsed));
        const newFinish = {
            ...finish,
            ingridientIds: finishIngridientIds
        }; // Add our recipe to the pot

        // Update the state
        const newStartId = "col-" + newStart.id;
        const newFinishId = "col-" + newFinish.id;

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStartId]: newStart,
                [newFinishId]: newFinish
            }
        };

        this.setState(newState);
    }

    onDragStart = result => {
        // TODO: Implement if any fancy visuals are needed
    }

    onDragUpdate = result => {
        // TDOO: Implement if any fancy visuals are needed
    }

    render() {
        return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
        >
            <Container>
                {this.state.columnOrder.map(colId => {
                    const column = this.state.columns[colId]
                    const ingridients = column.ingridientIds.map(ingridientId => this.state.ingridients[ingridientId])

                    console.log(ingridients)

                    return <Column key={column.id} column={column} ingridients={ingridients} />
                })}
            </Container>
        </DragDropContext>

        )
    }
}

export default MainComponent