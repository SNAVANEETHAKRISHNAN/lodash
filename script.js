// chunk
let _ = require("lodash");
let arr = [1, 2, 3, 4, 5, 6,
        "a", "b", "c", "d"];
console.log("Before: ", arr)
 
console.log("After: ", _.chunk(arr, 3))

// sum

const _ = require("lodash");  
   
 
var arr1 = [{ 'n': 4 }, { 'n': 2 }, { 'n': 6 }];
      
let gfg = _.sumBy(arr1, function(o) { return o.n; }); 
           
console.log(gfg);

// reduce
const _ = require("lodash"); 
        
var users = [ 1, 2, 3, 4 ];
   
   
let gfg1 = _.reduce(users, function(sum, n) {
  return sum + n;
}, 0);
   
console.log(gfg1);

// filter

const _ = require("lodash"); 
      
var users = [
  { 'user': 'luv',
    'salary': 36000,
    'active': true },
  { 'user': 'kush', 
    'salary': 40000,
    'active': false }
];
  
let filtered_array = _.filter(
    users, function(o) {
       return !o.active;
    }
);
  
console.log(filtered_array);

// find

const _ = require('lodash');
 
let x = [2, 5, 7, 10, 13, 15];
 
let result = _.find(x, function(n) {
    if (n * n > 100) {
        return true;
    }
});
 
console.log(result);