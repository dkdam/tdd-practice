# TDD Javascript Practice

I created this repository for the purpose of TDD (Test Driven Development). Basically for every coding exercises I do to date, I build test units around them to reinforce my codes.

## What is Test Driven Development(TDD)?
Test Driven Development (TDD) is software development approach in which you create unit test cases before write actual codes. This principle is really important when you build large applications as normally any tiny changes in your long lines of codes may change everything so building test units around each of them helps detect where it went and and it's better than spending weeks to find the bugs.

## How TDD works
![Alt text](./tdd.jpeg)

## How to get started in Javascript
This is more of a basic reminder for my future self to intialise these steps when I build these for my future projects.

Make sure to have Node 10.16(or greater) & npm 5.6(or greater) or you can just do it with Yarn 0.25(or greater).

1. mkdir "Your project name here"
2. cd into your project directory
3. npm init -y
4. npm install jest
5. npm install jest --save-dev
6. open package.json file and add "jest" to the test field like so <br/>
{<br/>
  "scripts": {<br/>
    "test": "jest"<br/>
}<br/>
}<br/>
7. touch "your project name".js
8. touch "your project name".test.js

### How to test in javascript
1. cd /javascript
2. npm test

## How to get started in Ruby
1. mkdir ruby && cd ruby
2. gem install rspec
3. rspec --version #To verify if rspec is installed

### How to test for ruby
1. cd /ruby
2. rspec

### Resources for more on TDD
- https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/
- https://www.youtube.com/watch?v=FgnxcUQ5vho&t=50s