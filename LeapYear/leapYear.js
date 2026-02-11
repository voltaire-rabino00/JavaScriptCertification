let year = 1990;
function isLeapYear (leapYear) {
   if(leapYear % 400 === 0 ) {
     return `${leapYear} is a leap year.`;
   }
   else if (leapYear % 100 === 0) {
     return `${leapYear} is not a leap year.`
   }
   else if (leapYear % 4 === 0) {
     return `${leapYear} is a leap year.`;
   }
   else {
     return `${leapYear} Not a leap year.`;
   }
}
let result = isLeapYear(year);
console.log(result);

// tests completed