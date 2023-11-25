import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders
    }

    onDragEnd = result => {
        // TODO: Implement onDragEnd
    }

    render() {
        return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
            {this.state.columnOrder.map(colId => {
                const column = this.state.columns[colId]
                const ingridients = column.ingridients

                return <Column key={column.id} column={column} ingridients={ingridients} />
            })}
        </DragDropContext>

        )
    }
}

export default MainComponent