// Global object

console.log(global);

global.setTimeout(() => {
    console.log('hello');
}, 3000);

// we can use the methods of the global object directly without global

setTimeout(() => {
    console.log('hello');
    clearInterval(int);
}, 3500);

// set interval execute forever 
// we can kill it using clearInterval() method

const int = setInterval(() =>{
    console.log('hi');
}, 1000)


console.log(__dirname);
console.log(__filename);


// no access to DOM methods
console.log(document.querySelector);