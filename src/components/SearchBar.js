import React from 'react';

function SearchBar() {
    return (
        <form>
        <input
            type="radio"
            name="ingredient"
            value=""
            data-testid="ingredient-search-radio">
            Ingredient
            

            <input
                type="radio"
                name="name"
                value=""
                data-testid="name-search-radio">
                
                Name

                <input
                    type="radio"
                    name="webmaster"
                    value="talvez"
                    data-testid="first-letter-search-radio" />

                First letter

                <button
                    type="button"
                    data-testid="exec-search-btn" />
                
                </form>
                )
                }