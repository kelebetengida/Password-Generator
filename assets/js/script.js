// Assignment Code
var generateBtn = document.querySelector("#generate");

//First decalared a global array of capital letters and lower case letters and special characters and numeric values.
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=",">","<",",",".","/","?",";",":","*"];
var number = ["1","2","3","4","5","6","7","8","9","0"];



function generatePassword(){
  var pot =[]
  var finalPassword=[]
   //asking the user the length of password and storing it as a varable. 
  
  var characterLength = parseInt(prompt("how long is your password?"));
  if (characterLength<=8|| characterLength>=128){
    return alert("invalid length")
  }
 
  var shouldContainSmallLetter = confirm("would you like to include lowercarse letters?");
  var shouldContainUppercaseLetter = confirm("would you like toinclude uppercarse letters?")
  var shouldContainSpecialCharater = confirm("would you like to include special characters?")
  var shouldContainNumber = confirm("would you like to include numbers?")


  if (shouldContainSmallLetter){
    pot = pot.concat(lowerCaseLetters)
  }
  if (shouldContainUppercaseLetter){
    pot = pot.concat(upperCaseLetter)
  }
  if (shouldContainSpecialCharater){
    pot = pot.concat(specialCharacters)
  }
  if (shouldContainNumber){
    pot = pot.concat(number)
  }

  // validating the users answer so that the characters are 8-128 long
 for (let i=0; i<characterLength; i++){
    var randomNumber= Math.floor(Math.random() * (pot.length-1));
    var temp=pot[randomNumber]
    finalPassword.push(temp)
  }

console.log(finalPassword)

  //Ask the user wether they want the different kind of character in form of boolean. 
return finalPassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
