"use stricks";


//1. Requirements:Take three numbers from 3 inputs.Compare the numbers to find the smallest.Print the smallest number.

function findSmallestNumber(event) {
    event.preventDefault();

    //Retrieves input values, parseFloat from decimal to number.
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);


    //Check if values are NaN and handle error
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').textContent = "Please enter valid numbers in all the fields";
        return;
    }

    //Find the smallest number
    const smallest = Math.min(num1, num2, num3);


    //Display the result
    document.getElementById('result').textContent = `The smallest number is ${smallest}`;


    console.log("The smallest number is:", smallest);
    return smallest;

}





//2. Positive, Negative, or Zero  Problem Statement:Create a function that takes a number as input and determines if it is positive, negative, or zero.

// checkNumber will reads the number from the inout field, parseFloat will convert the input to a float to handle decimal Number


function checkNumber() {
    const num = parseFloat(document.getElementById("numberInput").value);

    if (num > 0) {
        console.log("The number is positive.");

    } else if (num < 0) {
        console.log("The number is negative.");

    } else if (num === 0) {
        console.log("The number is zero.");
    } else {
        console.log("please enter a valid number.");
    }

    checkNumber();


// 3. Voting Eligibility, Takes the user’s age as input. Checks if the age is 18 or more.Displays the eligibility status in the votingResult.

function checkVotingEligibility(age) {

        if (age >= 18) {

            console.log("You are eligible to vote");
        
        } else if (age > 0){

            console.log("You are not elegible to vote");
        
        } else{
            console.log("Please enter a valid age");
        }
    }
checkVotingEligibility(age)