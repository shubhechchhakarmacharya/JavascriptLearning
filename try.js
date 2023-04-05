// // 
// let num1 = 4;
// let num2 = 6;
// let sum = Number(num1) + Number(num2)
// console.log(sum)
// let email = "WhatIf@gmail.com"
// // console.log(email.slice(2,6))
// // console.log(email.lastIndexOf('a'))
// // console.log(email.substring(2,9))
// // console.log(email.length)
// console.log(email.toUpperCase())
// console.log(email)
// // sum ++;
// // sum += 20 ;
// // sum -= 20 ;
// // sum *= 2 ;
// // sum /= 5 ;
// sum **= 3;
// console.log(sum)
// console.log(`First number is ${num1} and second number is ${num2} their sum is ${sum} with email ${email}.`)

// let array = ['James', 'Rachel', 'Royesh' ]
// //console.log(array.concat(['Jever', 'Zomber']))
// // console.log(array.pop())
// // show = array[2] = 'Giney'
// // console.log(array)
// console.log(array.indexOf('Rachel'))

// console.log(array.includes('James'))
// console.log(sum == 30)
// console.log(sum != 20)
// //loop
// for(let i = 0; i< array.length; i++){
//     console.log(array[i], i)
// }

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }
// let j = 4
// do{
//     console.log(j);
//     j++;
// }while(j<4)

// //Conditional
// if(email.length >=12 && email.includes('@')){
//     console.log("It is strong.")
// }
// else if(email.length >=8 || email.includes('@')){
//     console.log("It is medium.")
// }
// else{
//     console.log("It is very weak")
// }

// let arr = [30, 20, 0, 50, 100, 40, 60]
// for( let i=0; i<arr.length; i++ ){
//     if(arr[i] === 20){      //20 lai xodera aru execute hunxa
//         continue;
//     }
//     console.log(arr[i]);
//     if( arr[i] === 50 ){     //yo paxi kei execute hudaina
//         break;
//     }
// }
// // Switch case implementation
// today = 'Friday'
// switch(today){
//     case 'Sunday':
//         console.log('Today is Sunday.')
//         break;
//     case 'Monday':
//         console.log('Today isMonday.')
//         break;
//     case 'Tuesday':
//         console.log('Today is Tuesday.')
//         break;
//     case 'Wednesday':
//         console.log('Today is Wednesday.')
//         break;
//     case 'Thursday':
//         console.log('Today is Thursday.')
//         break;
//     case 'Friday':
//         console.log('Today is Friday.')
//         break;
//     case 'Saturday':
//         console.log('Today is Saturday.')
//         break;
// }

// let age = 40;
// if(true){
//     let age = 50;
//     console.log('inside code block ', age)
// }
// console.log('outside code block ', age)


/*<form>
<label for="inputField">Enter comma-separated values:</label>
<input type="text" id="inputField" name="inputField">
<button type="button" onclick="processInput()">Submit</button>
</form>

<script>
function processInput() {
  const inputString = document.getElementById("inputField").value;
  const inputArray = inputString.split(",");
  console.log(inputArray); // Output: ["value1", "value2", "value3"]
}
</script> */


// //This both might work similar but it makes different in hoisting
// /*JavaScript Hoisting refers to the process whereby the interpreter appears to move the 
// declaration of functions, variables or classes to the top of their scope, 
// prior to execution of the code*/
// //function declaration works first ma call garera paxi function lekhyo vane
// weekend();
// function weekend(){
//     console.log("The weekend begins.")
// };

// //function expression doesnot works first ma call garera paxi function lekhyo vane
// const dull = function(){
//     console.log("The weekend is dull.")
// };

// weekend();
// dull();

// const fun = function(day , spot){
//     console.log(`This weekend we'll go to ${spot} on ${day}`)
// };
// fun('Friday', 'Switzerland')


// const calculate = function(length , breadth){
//     return 2 * (length + breadth);
// };

// const perimeter = calculate(20,10);
// console.log(perimeter);


// //Arrow Function must have () if there is no parameters to pass
// const calcArea = (radius) =>{
//     return 3.15 * radius **2
// };
// let area = calcArea(4);
// console.log(area)

    // let sum = (first) + (last)    
    // document.getElementById("sum").textContent = `The sum is ${sum}`;
	// console.log(sum)
	// let newP = document.createElement("p");
	// let paragraph = document.createTextNode(`The sum id ${sum}`)
	// newP.appendChild(paragraph);
	// document.body.appendChild(newP);
	// console.log(p) 

// const Total = (price, tax) =>{
//     let totalsum = 0
//     for( let i = 0; i<price.length; i++){
//         totalsum += price[i] + price[i] * tax;
//     }
//     return totalsum;
// };

// productTotal = Total([200, 50, 1000], 0.15)
// console.log(productTotal)

// //callback function
// let numbers = [10, 20, 30, 40, 50];
// numbers.forEach((number, index) => {
//     console.log(index, number);
// });

// //injecting js in html
// const ul = document.querySelector('.demo');
// days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let html = ``;

// console.log(document.createElement("li"))
// const listItem = document.createElement("li");
// listItem.innerText = "Some text"

// const unorderedList = document.createElement("ul")
// unorderedList.append(listItem)

// document.getElementById("demo").append(unorderedList)

// days.forEach((day) => {
//     html += `<li style = "color: green"> ${day}</li>`
// });
// console.log(html);
// ul.innerHTML = html;

//  const text = (text) =>{
// 	// create a new paragraph element
// 	const newParagraph = document.createElement("p");

// 	// set some content for the paragraph
// 	const paragraphContent = document.createTextNode(text);

// 	// add the content to the paragraph
// 	newParagraph.appendChild(paragraphContent);

// 	// add the paragraph to the document
// 	document.body.appendChild(newParagraph);
// 	console.log(newParagraph)
//  }
//  text("This paragraph was created dynamically using JavaScript!")


//  para = document.querySelectorAll('div');
//  console.log(para);


function calculate(){
	// console.log(e)
	// e.preventDefault();

	let last =  Number(document.getElementById('lnum').value);
    let first = Number(document.getElementById('fnum').value);
	let operation = document.getElementById('operation').value;
	let calcOperation = 0;
	console.log(first,last,operation)
		
		if(operation === 'add'){
			calcOperation += first + last;
		}
		else if(operation === 'subtract'){
			calcOperation += first - last;
		}
		else if(operation === 'multiply'){
			calcOperation += first * last;
		}
		else if(operation === 'divide'){
			calcOperation += first / last;
		}
		else{
			calc.textContent = 'Give valid input'
			return ;
		}
		console.log(calcOperation)
		calc.textContent = `Answer is ${calcOperation}`
	}


	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		console.log(request, request.readystatechange)
	})
	request.open('GET', 'https:/jsonplaceholder.typicode.com/todos/')
	request.send();


	// input field banaune eventlistner add garne (onchange, input) difference pattaa lagaune string aauxa 
	// type garda gardai delimeter liyera tukraune comma le string kasari tukraune 
	// string le tukrisakexi ahilei lai console matra garne map ki foreach garne 
	// kaatna milne gari tag banera aauxa cross thichyo vane haraunu parxa 

	//If you have button in form to stop reloading have to use
	//e.preventDefault();

				// function arrayCheck() {
				// 	const arr = document.getElementById('array').value;
				// 	let array = arr.split(",");
				// 	console.log(array)
				// 	const output = document.getElementById('output');
				// 	output.innerHTML = " ";
				// 	array.forEach(arra => {
				// 		console.log(arra.trim())
				// 	});
				// 	for (let i = 0; i < array.length; i++) {
				// 		let span = document.createElement("span");
				// 		span.innerHTML = array[i].trim();
				// 		let spanChild = document.createElement("span")
				// 		spanChild.textContent = 'X'
				// 		spanChild.addEventListener('click',(e)=>{
				// 			spanChild.parentElement.remove();
				// 			array.splice(i, 1); // The first argument (i) specifies the index at which to start changing the array, and the second argument (1) specifies how many elements should be removed.
				// 			document.getElementById('array').value = array.join(", ");
				// 		})
						
				// 		if(array[i] !== array[i+1]){
				// 			output.append(span);
				// 			span.append(spanChild);
				// 		}
				// 		else{
				// 			continue;
				// 		}
				// 		console.log(span);
				// 	};
				// };
	document.addEventListener("DOMContentLoaded", () => {
		const array = document.getElementById("array");
		const output = document.getElementById("output");
	  
		array.addEventListener("input", () => {
		  const values = array.value.split(",").map((arra) => arra.trim());
	  
		  output.innerHTML = "";
	  
			function spanAdd(){
				const arr = new Set(values);
				arr.forEach((value) => {
				const span = document.createElement("span");
				span.className = "tag"
				span.textContent = value;
			
				const spanChild = document.createElement("span");
				spanChild.className = "tag-remove"
				spanChild.textContent = "X";
			
				spanChild.addEventListener("click", () => {
					values.splice(values.indexOf(value), 1);
					array.value = values.join(", ");
					span.remove();
				});
			
				span.append(spanChild);
				output.append(span);
				});
			}
			spanAdd();
		});
	  });