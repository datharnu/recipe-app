import { Heart, RefreshCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Button from './Button'; // Adjust the path based on your project structure

export default function Header({ refresh, recipe }) {
    const [undoStack, setUndoStack] = useState([]);
    const [recipeList, setRecipeList] = useState([])

    // console.log(recipeList)

    useEffect(() => {
        if (recipe && recipe.meals && recipe.meals.length > 0) {
            const newRecipeList = [recipe.meals[0].idMeal];
            setRecipeList(newRecipeList);
            localStorage.setItem('recipeIDs', JSON.stringify(newRecipeList));
            console.log(newRecipeList)
        }
    }, [recipe]);



    const handleClick = () => {
        refresh();
    };




    const backClick = async () => {
        const storedRecipeIDs = localStorage.getItem('recipeIDs');
        if (storedRecipeIDs) {
            const parsedRecipeIDs = JSON.parse(storedRecipeIDs);

            if (parsedRecipeIDs.length > 0) {
                const lastRecipeID = parsedRecipeIDs[parsedRecipeIDs.length - 1];

                try {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${lastRecipeID}`);
                    const data = await response.json();

                    if (data.meals && data.meals.length > 0) {
                        const lastRecipe = data.meals[0];
                        // Do something with the lastRecipe
                        console.log(lastRecipe);
                    }

                    // Remove the last ID from the stack since you have already fetched it
                    parsedRecipeIDs.pop();
                    setRecipeList(parsedRecipeIDs);
                    localStorage.setItem('recipeIDs', JSON.stringify(parsedRecipeIDs));
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    };



    // const backClick = () => {
    //     if (undo) {
    //         undo(); // Call the stored action
    //         setUndo(null); // Reset undo after using it
    //     }
    // };

    // // Function to perform an action and store it for undo
    // const performAction = () => {
    //     refresh();
    //     setUndo(() => handleClick); // Store the current action for undo
    // };

    return (
        <section className='lg:flex '>
            {/* Mobile view */}
            <div className='flex p-7 justify-between lg:hidden'>
                <div className='flex gap-5'>
                    <Button label='Back' onClick={backClick} />
                    <Button label='Favorites' />
                </div>
                <div className='flex gap-5 '>
                    {/* Pass the performAction function to the onClick prop */}
                    <RefreshCw className="w-[34.77px] h-[34px]" onClick={handleClick} />
                    <Heart className="w-[26.07px] h-[34px]" />
                </div>
            </div>
        </section>
    );
}
