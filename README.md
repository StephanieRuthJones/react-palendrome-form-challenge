# Palendrome Checker

In this coding challenge, you'll create a React application that takes a word as input from the user and determines whether it's a palindrome or not. A palindrome is a word that reads the same forwards as it does backwards (e.g., "level" or "madam").

Your task is to create a form with an input field and a submit button. When the user submits the form, the application should display either "This is a palindrome" or "This is NOT a palindrome" depending on the input.

## Instructions

1. Fork this repo
2. Clone your forked repo
3. Create a react form which outputs whether the user input is a palendrome or not.

## Solution Explanation
In the solution, we start by importing the necessary React components and hooks. We define two state variables, word to store the user input, and result to store the result of the palindrome check.

The handleChange function is called when the input value changes. It updates the word state variable with the new value.

The isPalindrome function checks if the given word is a palindrome. It does this by reversing the word and comparing it to the original word (ignoring case).

The handleSubmit function is called when the user submits the form. It prevents the default form submission behavior and calls the isPalindrome function to check if the input word is a

## Additional Challenge

Refactor the component to be a controlled form which displays the "This is a palindrome" or "This is NOT a palindrome" message as the user types.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
