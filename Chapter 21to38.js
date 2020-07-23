
                  //ASSIGNMENT JAVASCRIPT CHAPTER 21 to 38//
// ................ CHAPTER N0 20 to 25...............................//

// ...........................Task 1
/*var first_Name=prompt("Enter First Name :");
var last_Name=prompt("Enter Last Name :");
document.write("FULL_NAME: "+first_Name+" "+last_Name);
..............................Task 2
var Fav_mob=prompt("Enter Favorite Mobile Model?");
document.write("My Favorit Phone is : "+ Fav_mob+ "\n"+"Length of string : "+ Fav_mob.length); 
..............................Task 3
var word="Pakistani";
var index=word.indexOf("n");
document.write("String : "+word+"<br>"+"Index of 'n' :"+index);
...............................Task 4
var word="Hello World";
var last_index= word.lastIndexOf("l");
document.write("String : "+word +"<br>"+"Last Index of 'l' :"+last_index);
...............................Task 5
var word="Pakistani";
var index_ch=word.charAt(3);
document.write("String : "+word +"<br>"+"Character at index 3 : "+index_ch);
...............................Task 6
var first_Name=prompt("Enter First Name :");
var last_Name=prompt("Enter Last Name :");
var FULL_NAME=first_Name.concat( " " +last_Name);
document.write("Full Name: " +FULL_NAME);
...............................Task 7
var city="Hyderabad";
var replace=city.replace("Hyder","Islam");
document.write("City: "+city+ "<br>"+
"After replacement: "+ replace);
var messsage="Ali and Sami are best friends.They play circket and football together";
var replace=messsage.splice(/and/g,"&");
document.write(replace);
................................Task 8
var string ="472";
document.write("Value: "+string+"<br>"+ " Type: "+ (typeof string)+"<br>");
var number =parseInt(string);
document.write("Value: "+ number +"<br>"+ " Type: "+ (typeof number));
.................................Task 9
var user=prompt("Enter any word ");
var capital_letter= user.toUpperCase();
document.write("User input: "+user +"<br>"+"Upper case: "+capital_letter);
................................Task 10
var text=prompt("Enter any word");
var first_letter=text.slice(0,1);
first_letter= first_letter.toUpperCase();
var rem_words=text.slice(1);
rem_words= rem_words.toLowerCase();
var title=first_letter+rem_words;
document.write("Title case: "+title);
..............................Task 11
var num=35.36;
var string=num.toString();
var convert=string.replace(".","");
document.write("Number: "+num+"<br>"+"Result : "+convert);
 .............................Task 12
var user=prompt("ENTER USERNAME");
for(var i=0; i<user.length; i++)
{
    var text= user.charCodeAt(i);
    if(text===33)
    {
    alert("Please enter a valid username");
    }
    if(text===44)
    {
    alert("Please enter a valid username");
    }
    if(text===46)
    {
    alert("Please enter a valid username");
    }
    if(text===64)
    {
    alert("Please enter a valid username");
    }
   
    
}
...........................................Task 13
var array=['cake','apple pie','cokeie','chips','patties'];
var user=prompt("Welcome to ABC Bakery.What do you went to order sir/ma'am?");
user=user.toLowerCase();
var items=array.indexOf(user);
if (array.indexOf(user)!=-1)
{
alert(user+" is avaliable at index "+items+" in our bakery");
}
else
{
    alert("We are sorry. "+  user +" is not avaliable in our bakery");
  
}
......................................Task 14
var uni="University of Karachi";
var spilt= uni.split("");
{
    for(var i=0; i<spilt.length; i++)
    document.write(spilt[i]+"<br>");
}
.......................................Task 15
                        
.......................................Task 16
var user=prompt("Enter any word");
var last_ch=user.slice(-1);
document.write("User input: "+user+"<br>"+"Last character of input: "+last_ch);
var string=" The quick brown fox jumps over the lazy dog";
var small=string.toLowerCase();
var spilt=small.split(" ");
var match= 'the';
var count=0;
for(var i=0; i<spilt.length; i++)
{
     if(spilt[i]==match)
     count++;
}
document.write("Text: "+string+ "<br>"+"There are "+count+" occurrence of the word "+ match);
// ................ CHAPTER N0 26 to 30...............................//
// ...........................Task 1
var positive_Integer=prompt("Enter any positive value");
var float=positive_Integer /1964;
document.write("number: "+float+"<br>");
var round_off=Math.round(float);
document.write("round off value: "+round_off+"<br>");
var floor =Math.ceil(float);
document.write("ceil value: "+floor); 
 ...........................Task 2
var negative_Integer=prompt("Enter any positive value");
var float=negative_Integer /23;
document.write("number: "+float+"<br>");
var round_off=Math.round(float);
document.write("round off value: "+round_off+"<br>");
var floor =Math.ceil(float);
document.write("ceil value: "+floor);
 ...........................Task 3
var absoulute_Value=prompt("Enter Absoulute Value ");
var answer=Math.abs(absoulute_Value);
document.write("The absolute value of "+absoulute_Value+" is " +answer);
 ...........................Task 4
var dicRoll=Math.floor(Math.random()*6)+1;
document.write("random dice value: "+dicRoll+'<br>');
var dicRoll=Math.floor(Math.random()*6)+1;
document.write("random dice value: "+dicRoll); 
 ...........................Task 5
var toss=(Math.random()*2)+1;
var floor=Math.floor(toss);
if(floor == 2)
{
    document.write(floor+"<br>"+"random coin value: Heads"+"<br>");
}
    else
    {
    document.write(floor+"<br>"+"random coin value: Tails"+"<br>"); 
    }
  ...........................Task 6
  var start=(Math.random()*100)+1;
  var floor=Math.floor(start);
  document.write("Random Number between 1 and 100: "+floor);
 ...........................Task 7
  var user=prompt("Enter your weight in kilogram");
  var a=parseFloat(user);
  alert("The weight of user is: "+ user +" kilograms");
  var user=prompt("Enter a number between 1 to 10");
  var random=(Math.random()*10)+1;
  var floor=Math.floor(random);
   if(floor==2)
  {
      alert("Congratulation the user !");
  }
  else
  {
      alert("Try again");
  }*/

  
  // ................ CHAPTER N0 30 to 34...............................//
// ...........................Task 1

 /*var date=new Date();
 document.write(date);
...........................Task 2
 
 var month=["Jan","Feb","March","April","May","June","July","August","September","Octuber","November","December"];
 var date=new Date();
 document.write("Current month: "+month[date.getMonth()]);
 ...........................Task 3
 var date=new Date();
 var String =date.toString();
 var today=String.slice(0,3);
 document.write("Today is "+today);
 ...........................Task 4
var day=["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];
var date=new Date();
var today=date.getDay();
if(day[today]==="Sun"||day[today]==="Sat")
{
    document.write("It's Fun day")
}
...........................Task  5
var date = new Date();
var Today_date=date.getDate();
if(Today_date<16)
{
    document.write("First fifteen days of the month");
}
else
{
    document.write("Last days of the month");
}
//...........................Task 6
var date = new Date();
var min_Milli =date.getTime();
var convert= min_Milli/(1000*60*60);
document.write("Current Date: "+date+"<br>");
document.write("Elapsed millisecond since January 1,1970: "+min_Milli+"<br>");
document.write("Elapsed minutes since January 1, 1970: "+convert);
//...........................Task 7
//...........................Task 8
var Later_date = new Date("Dec 31,2020");
document.write(Later_date);
//...........................Task 12
var date= new Date();
var past_year=date.getFullYear()-100;
date.setFullYear(past_year);
document.write("100 years back, it was "+date);
         
    
//...........................Task 13
var  age=prompt("Enter your age");
var date= new Date();
var current_year=date.getFullYear();
var date_of_birth=(current_year-age);
document.write("Your age is: "+age+"<br>"+"Your birth year is: "+date_of_birth);
//...........................Task 14
var Customer_Name="ABC Customer";
var Current_Month="February";
var Number_of_Unit="410";
var per_unit=16; 
var late_pay=350;
var Net_Amount_pay=(Number_of_Unit*per_unit);
var gross_amount=(Net_Amount_pay+late_pay)
document.write(" Customer Name: "+Customer_Name+"<br>");
document.write(" Month: "+Current_Month+"<br>");
document.write(" Number of units: "+Number_of_Unit+"<br>");
document.write(" Charges per Unit: "+per_unit+"<br>");
document.write("Net Amount Payable(within Due Date): "+Net_Amount_pay+"<br>");
document.write(" Late payment surcharge: "+late_pay+"<br>");
document.write(" Gross Amount Payable(after Due Date): "+gross_amount);
// ................ CHAPTER N0 35 to 38...............................//
// ...........................Task 1
function date(){
 document.write(new Date)  
}
date();  
// ...........................Task 2
function full_Name(first_Name,Last_Name){
document.write("Full Name: "+ first_Name+" "+Last_Name);
}
full_Name("Ammara","Rehmat");
// ...........................Task 3
var num1=+prompt("Enter first number");
var num2=+prompt("Enter second number");
function sum(n1,n2){
   return n1+n2
   
}
var result=sum(num1,num2);
document.write(result);
// ...........................Task 5
var value=+prompt("Enter any number");
function square(num){
   return num*num;
   
}
var result=square(value);
document.write("Square of: "+value+" is "+result);
  // ...........................Task 6
  
var value=+prompt("Enter any number");
function Factorial(value){
   var ans =1;
   for(var i=2; i<=value;i++)
   ans=ans*i;
   return ans;
}
var result=Factorial(value);
document.write("Factorial of: "+value+" is "+result);
// ...........................Task 4
function calculator(n1, op, n2) {
    if (op === "+") {
        return n1 + n2;
    }
    else if (op === "-") {
        return n1 - n2;
    }
    else if (op === "*") {
        return n1 * n2;
    }
    else if (op === "/") {
        return n1 / n2;
    }
    else if (op === "%") {
        return n1 % n2;
    }
    else{
        "Incorrect Operator"
    }
}
var result1 =calculator(14,"+",4);
var result2 =calculator(14,"-",4);
var result3 =calculator(14,"*",4);
var result4 =calculator(14,"/",4);
var result5 =calculator(14,"%",4);
document.write("Addition "+ result1+"<br>");
document.write("Substraction " +result2+"<br>");
document.write("Multiplication "+result3+"<br>");
document.write("Division "+ result4+"<br>");
document.write("Modules "+result5);
// ...........................Task 7
var n1=prompt("Enter first number");
var n2=prompt("Enter second number");
function counting(start,end){
    for(var i=start; i<=end; i++)
    {
        document.write(i+ "<br>");
    }
}
counting(n1,n2);
// ...........................Task 8
// ...........................Task 9
function area_of_rectangle(width,hight){
 var area =width *hight;
 return area;
}
 var result=area_of_rectangle(5,10)
 document.write("Area of Rectangle is "+result); */


// ...........................Task 11

// function first_letter_Capital(str){
// return str.replace(/\w\S*/g, function(txt) {
    // return txt.charAt(0).toUppercase() +txt.substr(1).toLowerCase();
// }) ;
 //}
 //document.write(first_letter_Capital('the quick brown fix')); 

// ...........................Task 10

 /*var word=prompt("Enter any word");
  function palindrome(letter){
      var check="";
      for(var i=word.length-1; i>=0; i--){
          check+=word[i];
         
      }
      if(word===check)
      {
          return word;
      }
      else{
           return "This is not palindrome word";
      }
  }
  var rem_words=palindrome(word);
  document.write("Palindrome words "+rem_words);
// ...........................Task 13
  function char_count(string,char){
 
    var letter_Count=0;
    for(var i=0; i<string.length; i++){
        if(string.charAt(i)==char){
            letter_Count+=1;
        }
    }
    return letter_Count;
  }
  document.write(char_count('JSResourceS.com','o'));*/



 
