//------------------------------------------------SECTION -1----------------------------------- 
//1.profile Builder
let fullName ="Anushka sikarwar";
let age = 19;
let currentSemester = 5;
let hasLaptop = true;
let averageAttendance = 89.9;

console.log(fullName);
console.log(age);
console.log(currentSemester);
console.log(hasLaptop );
console.log(averageAttendance);

//2.Fix the Errors
let city = "Delhi";//string
let graduationYear = 2027;//number
let isHosteller = true;//Bollean
let cgpa = 8.5;//number(float)
let student = {course: "BSc", collegeName: "Govt College"};//object

//3.Swap the Values
let firstName ="Arjun";
let lastName ="Reddy";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log(firstName);
console.log(lastName);

//4.Valid or Invalid?

// let 123name = "Ravi";      // Invalid
// let $amount = 2000;        // Valid
// let var = "keyword";       // Invalid
// let is-Eligible = true;    // Invalid
// let homeTown = "Chennai";  // Valid



    //------------------------------------SECTION - 2-------------------------------------------------- 

//1.Predict the Output
console.log("20" - "5" + 3);//18 converts both strings into numbers: 20 - 5 = 15, then 15 + 3 = 18.
console.log(4 + "6" - 2);//44 First 4 + "6" becomes "46" because + with a string performs concatenation. Then "46" - 2 converts "46" to a number → 44.
console.log("8" * 2 + "2");//162 "8" * 2 converts "8" to 8, giving 16. Then 16 + "2" becomes string concatenation → "162".
console.log("7" + 2 * 3);//"76" Multiplication happens first: 2 * 3 = 6. Then "7" + 6 performs string concatenation → "76".

//2.Implicit vs Explicit Conversion 
console.log("5" + 5); // 55
console.log("5" * 5); //25 

// 3.Mix Data Types 
let a = "5";
let b = 2;
let c = true;

console.log(a + b + c); //52true
console.log(Number(a) + b + c); //8 
console.log(a + c); //5true
console.log(a * (b + c)); //15 
