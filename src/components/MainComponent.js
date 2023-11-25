import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders,
        ingridients: Data.ingridients
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

        console.log("DraggableId: " + draggableIdParsed)

        console.log("-1")
        console.log(sourceColId)
        const column = this.state.columns[sourceColId];
        console.log("0")
        console.log(column)
        const newIngridientIds = Array.from(column.ingridientIds);
        console.log("1")
        console.log(newIngridientIds)

        // Remove the ingridient from the source column and add it to the destination column (newIngridientIds)
        newIngridientIds.splice(source.index, 1);
        console.log("2")
        console.log(newIngridientIds)
        newIngridientIds.splice(destination.index, 0, Number(draggableIdParsed));
        console.log("3")
        console.log(newIngridientIds)

        const newColumn = {
            ...column,
            ingridientIds: newIngridientIds
        };

        const newColumnId = "col-" + newColumn.id;

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumnId]: newColumn
            }
        };

        console.log("4")
        console.log(newState)

        this.setState(newState);
    }

    render() {
        return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
            {this.state.columnOrder.map(colId => {
                const column = this.state.columns[colId]
                const ingridients = column.ingridientIds.map(ingridientId => this.state.ingridients[ingridientId])

                console.log(ingridients)

                return <Column key={column.id} column={column} ingridients={ingridients} />
            })}
        </DragDropContext>

        )
    }
}

export default MainComponent