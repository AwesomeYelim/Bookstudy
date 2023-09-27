const myObject = {
  values: [1, 2, 3, 4, 5],

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
// Iterate over the object using a for-of loop
for (const value of myObject) {
  console.log(value);
}

console.log(myObject);
