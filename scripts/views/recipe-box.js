function saveRecipe(recipeObj) {
    localStorage.setItem("recipe", JSON.stringify(this.recipeObj)
)}
console.log(recipeObj)

let savedRecipe = localStorage.getItem("recipe")
    savedRecipe.forEach(element => {
        //use handlebars here to parse each recipe
    });
console.log(savedRecipe)