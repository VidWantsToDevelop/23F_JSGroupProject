import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"
import styled from 'styled-components'
const { OpenAI } = require('openai');


const Container = styled.div`
    display: flex;
`;

// console.log(process.env.REACT_APP_OPENAI_API_KEY);

// // Configure the OpenAI API
// const openai = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true,
// });

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders,
        ingredients: Data.ingredients,
        prompt: "What is the recipe for a delicious meal?\n\nPot: potato,beef,salt,turmeric\n\nRecipe:",
        gptResponse: "",
        loading: false
    }

    // Get the ingredients from the pot
    whatsInThePot = () => {

        // Here is the requested format for the OpenAI API (e.g. "potato,beef,salt,turmeric")
        const pot = this.state.columns["col-0"].ingredientIds.map(ingredientId => this.state.ingredients[ingredientId]);
        var potString = "";
        pot.forEach(ingredient => {
            potString += ingredient.ingredient + ","
        })

        // Trim the last comma
        potString = potString.substring(0, potString.length - 1);

        return potString;
    }

    // Get the recipes from the OpenAI API
    getRecipes = async () => {
        try {
            const completion = await openai.chat.completions.create({
                "messages": [{"role": "user", "content": "Tell a joke"}],
                "model": "gpt-3.5-turbo",
            });
            console.log(completion.choices[0]?.message?.content);
        }
        catch(error) {
            console.log("Error occured while fetching the recipes: " + error);
        }
    }

    // almost like a useEffect hook :)
    componentDidUpdate(prevProps, prevState) {
        // Check if something has been put/removed from the pot
        if(prevState.columns["col-0"].ingredientIds.length !== this.state.columns["col-0"].ingredientIds.length) {
            console.log("Pot has been updated");
            console.log(this.whatsInThePot());
        }
        
    }

    componentDidMount() {
        this.getRecipes();
    }

    onDragEnd = result => {
        // TODO: Implement onDragEnd
        const { destination, source, draggableId } = result

        // If dropped outside of the ingredients list -> exit function
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
            const newIngredientIds = Array.from(start.ingredientIds);

            // Remove the ingredient from the source column and add it to the destination column (newIngredientIds)
            newIngredientIds.splice(source.index, 1);
            newIngredientIds.splice(destination.index, 0, Number(draggableIdParsed));

            const newColumn = {
                ...start,
                ingredientIds: newIngredientIds
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
        const startIngredientIds = Array.from(start.ingredientIds);
        startIngredientIds.splice(source.index, 1);
        const newStart = {
            ...start,
            ingredientIds: startIngredientIds
        }; // Remove the ingredient from the source column

        const finishIngredientIds = Array.from(finish.ingredientIds);
        finishIngredientIds.splice(destination.index, 0, Number(draggableIdParsed));
        const newFinish = {
            ...finish,
            ingredientIds: finishIngredientIds
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
                    const ingredients = column.ingredientIds.map(ingredientId => this.state.ingredients[ingredientId])

                    console.log(ingredients)

                    return <Column key={column.id} column={column} ingredients={ingredients} />
                })}
            </Container>
        </DragDropContext>

        )
    }
}

export default MainComponent