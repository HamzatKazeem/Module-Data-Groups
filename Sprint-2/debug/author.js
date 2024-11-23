// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(author)
/*
for (const value of author) {
  console.log(value);
}
  */
// Explanation: Javascript object are not iterable unless they implement the iterable protocol such as arrey.
// Therefore, we cannot use for stmt as expressed in line 16. We can only use Object.keys or Object.entries, to iterate over the properties or entries of an object.

