// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`)
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
console.log(inc)
//${recipe}`);
//Explanation: The is expect to extract values from the object recipe and substitute them to their 
// respective placeholders within the console.log stmt in line 13
// For loop stmt has been used to iterate object attributes ingredients to lis its array members.