import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders
    }

    render() {
        return (
        <div className="lists-container">
            {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId]
                const ingridients = column.ingridients.map(ingridient => {
                    return <li>{ingridient}</li>
                })

                return <Column key={column.id} column={column} ingridients={ingridients} />
            })}
        </div>

        )
    }
}

export default MainComponent