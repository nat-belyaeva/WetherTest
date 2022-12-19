

//https://www.w3schools.com/xml/xpath_syntax.asp
// https://devhints.io/xpath

// https://www.saucedemo.com/


//absolute Xpath /html/head/body/div.. use / one slash
//relative Xpath //div..           use // double slashes

let passwordButtonXpath = '//div[@class="login-box"]/form/div/input[@id="password"]';
let passwordButtonCss = '#password' //Css selector

// look for every single tag =====
// this is //*

//================= /Contains Xpath/ ================= look for a specific el which contains sth(attr)
let placeHolderOfBtnUsername = '//*[contains(@placeholder,"User")]'; // this placeholder contains a word

// install xpath plugin


// Xpath expression which find any elements in the DOM that has specific values
//================= /Or Xpath/ === //a[@name or @href] ===============
let inputsUsernameAndPasswordTogetherOr = '//*[@data-test="username" or @data-test="password"]';

//Xpath  expression that has  'or' and if one of condition true the element has been found

let inputsUsernameWrongOr ='//*[@data-test="usernameWrong" or @data-test="Username"]';//the el was found by @data-test="Username"

//================/ and Xpath/ =======================

let inputsUsernameAnd ='//*[@data-test="username" and @data-test="Username"]';

// dynamic elements
// ===============/ start with Xpath / ==== //a[starts-with(@href, '/')] ==========================

let elementStartsWith = '//input[starts-with(@class,"input")]';

//===============/Text() Xpath/======================

let findText = '//*[text()="Password for all users:"]';