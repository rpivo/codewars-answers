pragma solidity ^0.4.19;

contract HelloWorld {
  // State Variables
  string greeting = "";
  
  function greet() public constant returns (string) {
    return greeting;
  }

  function setGreeting(string newGreeting) public {
    greeting = newGreeting;
  }

}