// let myDate=new Date();
// console.log(typeof myDate); // "object"
// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString()); // Date part of the date object
// console.log(myDate.toTimeString()); // Time part of the date object
// console.log(myDate.toISOString()); // ISO 8601 format
// console.log(myDate.toLocaleString()); // Locale-specific string representation
// console.log(myDate.toLocaleDateString()); // Locale-specific date representation
// console.log(myDate.toLocaleTimeString()); // Locale-specific time representation
// console.log(myDate.getFullYear()); // Year of the date
// console.log(myDate.getMonth()); // Month of the date (0-11)
// console.log(myDate.getDate()); // Day of the month (1-31)
// console.log(myDate.getDay()); // Day of the week (0-6, where 0 is Sunday)
// console.log(myDate.getHours()); // Hours of the date (0-23)
// console.log(myDate.getMinutes()); // Minutes of the date (0-59)
// console.log(myDate.getSeconds()); // Seconds of the date (0-59)
// console.log(myDate.getMilliseconds()); // Milliseconds of the date (0-999)
// console.log(myDate.getTime()); // Time in milliseconds since January 1, 1970

// 2025-08-01T08:15:19.985Z
// Fri Aug 01 2025 13:45:19 GMT+0530 (India Standard Time)
// Fri Aug 01 2025
// 13:45:19 GMT+0530 (India Standard Time)
// 2025-08-01T08:15:19.985Z
// 1/8/2025, 1:45:19 pm
// 1/8/2025
// 1:45:19 pm
// 2025
// 7
// 1
// 5
// 13
// 45
// 19
// 985
// 1754036119985


// let myCreatedDate = new Date(2005, 1, 27, 5, 30, 0, 0); // Year, Month (0-11), Day, Hours, Minutes, Seconds, Milliseconds
// console.log(myCreatedDate); // Date object for 27th February 2005, 5:30 AM
// console.log(myCreatedDate.toString()); // String representation of the created date

// let myCreatedDate = new Date("2005-00-27"); // Invalid date, will show "Invalid Date" in most browsers
// let myCreatedDate = new Date("2005-02-27"); // Valid date, February 27, 2005"); 
// console.log(myCreatedDate.toLocaleString()); 


// let timeStamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
// console.log(timeStamp); // Prints the current timestamp

// console.log(myCreatedDate.getTime()); // Prints the timestamp for the created date

// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds since January 1, 1970


let newDate=new Date();
console.log(newDate.getDate()); // Prints the current day of the month (1-31)
console.log(newDate.getDay()+1); // Prints the current day of the week (0-6, where 0 is Sunday)
console.log(newDate.getMonth()+1); // // Prints the current month (0-11, where 0 is January)

newDate.toLocaleString('en-US', {
    weekday: 'long', // Full name of the day of the week    
    })