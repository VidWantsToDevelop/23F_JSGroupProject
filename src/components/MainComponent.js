import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import Data from "../data/recipeData"
import Column from "./Column"
import styled from 'styled-components'
import { fetchOpenAIData } from "../services/openaiService"
const { OpenAI } = require('openai');


const Container = styled.div`
    display: flex;
`;

const PrettyButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 0.5rem;
    box-shadow: 5px 5px #457547;

    &:hover {
        color: #4CAF50;
        background-color: white;
        cursor: pointer;
        box-shadow: 5px 5px #457547;
    }
`;

class MainComponent extends React.Component {
    state = {
        columns: Data.columns,
        columnOrder: Data.columnOrders,
        ingredients: Data.ingredients,
        gptResponse: "",
        loading: false,
        warning: false,
        recipes: [],
        isEmpty: true,
        ingredientsInPot: []
    }

    // Get the ingredients from the pot
    whatsInThePot = () => {

        console.log("Getting ingredients from the pot...")
        console.log(this.state.columns["col-0"])
        console.log(this.state.columns["col-0"].ingredientIds.length)

        // Check if the pot is empty
        if(this.state.columns["col-0"].ingredientIds.length === 0) {
            console.log("Pot is empty");
            this.setState({warning: "Pot can't be empty"});

            return;
        }

        // Check if less than 4 ingredients currently in the pot
        if(this.state.columns["col-0"].ingredientIds.length < 4) {
            console.log("Need at least 4 ingredients (" + this.state.columns["col-0"].ingredientIds.length + " provided)");
            this.setState({warning: "Need at least 4 ingredients (" + this.state.columns["col-0"].ingredientIds.length + " provided)"});
            alert("Need at least 4 ingredients (" + this.state.columns["col-0"].ingredientIds.length + " provided");

            return;
        }

        // Check if more than 10 ingredients currently in the pot
        if(this.state.columns["col-0"].ingredientIds.length > 10) {
            this.setState({"warning": "Too many ingredients are in the pot. Please remove some ingredients."});
            alert("Too many ingredients are in the pot. Please remove some ingredients.");

            return;
        }

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

        console.log("Getting recipes...")

        // Make sure to indicate that the output is not empty anymore
        this.setState({isEmpty: false});

        // Generating our recipes
        try {
            this.setState({loading: true});

            const initialList = this.props.initialIngredients.split(',').map(ingredient => ingredient.trim());

            if(initialList.length < 4) {
                this.setState({warning: "Please add at least 4 ingredients."});

                return;
            } else {
                this.setState({warning: null});
            }

            // Get results
            const result = await fetchOpenAIData(this.whatsInThePot());

            // Set the recipes
            this.setState({recipes: result});
        } catch(error) {
            console.error("Error fetching recipes: " + error);
        } finally {
            this.setState({loading: false});
        }

    }

    // almost like a useEffect hook :)
    componentDidUpdate(prevProps, prevState) {
        // Check if something has been put/removed from the pot
        if(prevState.columns["col-0"].ingredientIds.length !== this.state.columns["col-0"].ingredientIds.length) {
            console.log("Pot has been updated");
        }
        
    }

    componentDidMount() {
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
            <div>
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

                <PrettyButton className="generate-button" onClick={() => this.getRecipes()}>Get recipes</PrettyButton>

                <div className="recipe-finder-container"> 
                    <h2>Recipes:</h2>
                    {this.state.warning ? (
                        <p className="warning">{this.warning}</p> 
                    ) : this.state.loading ? (
                        <p className="loading">Looking for recipes...</p> 
                    ) : (
                        <ul>
                        {this.state.isEmpty ? (
                            <p>No recipes as of yet...</p>
                        ) : (
                            this.state.recipes.map((recipe, index) => (
                                <li key={index}>
                                    <h3>{recipe.name}</h3>
                                    <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                                    <p>Steps: {recipe.steps}</p>
                                </li>
                            ))
                        )}
                        </ul>
                    )}
                    </div>
            </div>
        )
    }
}

export default MainComponent