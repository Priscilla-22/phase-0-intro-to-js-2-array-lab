// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

/*appends a cat to the end of the cats array */
function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat("Jerry");
console.log(cats);

/* prepends a cat to the beginning of the cats array */
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat("Jerry");
console.log(cats);

/* removes the last cat from the cats array */
function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);

/*appends a cat and returns a new array, 
leaving the cats array unchanged */
function  appendCat(name) {
    const allCats = [ ...cats, name];
    return allCats;
}
const allCats = appendCat("Jerry");
console.log(allCats);

/* prepends a cat and returns 
a new array, leaving the cats array unchanged:*/
function  prependCat(name) {
    const addCats = [ name, ...cats];
    return addCats;
}
const addCats = prependCat("Jerry");
console.log(addCats);

/*removes the last cat and returns a new array,
 leaving the cats array unchanged:*/
function  removeLastCat() {
    const lastCats = [ ...cats.slice(0, cats.length - 1)];
    return lastCats;
}
const lastCats = removeLastCat();
console.log(lastCats);

/*removes the first cat returns a new array, 
leaving the cats array unchanged: */
function  removeFirstCat() {
    const firstCats = [ ...cats.slice(1)];
    return firstCats;
}
const firstCats = removeFirstCat();
console.log(firstCats);
