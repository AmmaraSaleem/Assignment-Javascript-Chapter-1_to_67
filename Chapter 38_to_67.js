// ..........................  Chapter No 38-42 ..........................

//____________________________Task No :1___________________________________

/*   var  num1=prompt("Enter first value:");
   var  num2=prompt("Enter second value:");


 function power(num1,num2)
   {
       var i,value;
       value=num1;
       for(i=1;i<num2;i++)
       {
           value=value*num1;
       }
       return value
   }
   
  var result=power(num1,num2)
  document.write("First Value:"+num1+"<br>"+"Second Value:"+num2+"<br>"+"Result:"+result);


  //____________________________Task No :2___________________________________

  var year=prompt("Enter leap year");
   function leapYear()
   {
       if (0==year%400)
      
           document.write(year+" IS A LEAP YEAR");
       
       else
       
           document.write(year+" IS NOT A LEAP YEAR");
      
   }
   leapYear()

//____________________________Task No :3___________________________________

function Triangle(a,b,c){
    var side,area;
    side=(a+b+c)/2;
    area=Math.sqrt(side*((side-a)*(side-b)*(side-c)));
    return area;
}
    function secondFunction()
    {
        var result=Triangle(10,11,13);
        document.write("The area of triangle is : "+result);


    }
    


secondFunction();


   //____________________________Task No :4___________________________________


function main() {

    function avergeFind(sub1, sub2, sub3) {
        var obt, avargeMarks;
        obt = (sub1 + sub2 + sub3);
        avargeMarks = obt / 300;
        document.write("Average Marks: "+avargeMarks+"<br>")

    }
    function perFind(sub1, sub2, sub3) {
        var obt;
        obt = (sub1 + sub2 + sub3);
        var per = obt * 100 / 300;
        document.write("Percentage: "+per+"%");
    }




    var sub1 = +prompt("Enter English marks");
    var sub2 = +prompt("Enter Urdu marks ");
    var sub3 = +prompt("Enter Maths marks");
    avergeFind(sub1, sub2, sub3)
    perFind(sub1, sub2, sub3)


}
main();


//____________________________Task No :5___________________________________



function myIndexOf(array, search) {

    for (var i = 0; i < array.length; i++) {
        {
            if (array[i] == search) {
                return i;
            }

        }
    }

    return -1;

}

var myArray = ['a', 'b', 'c', 'd'];
document.write(myIndexOf(myArray,'d'));








//____________________________Task No :6___________________________________



function disemvowel(str) {             
    var newString = " ";                            
    for (var i = 0; i < str.length; i++)  
{           
      if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
       {           
       newString += str[i];         
      }  
    }  
    return newString;   
  } 
  document.write(disemvowel('ammara  atiqa  abban')); 


  
//____________________________Task No :7___________________________________

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    
    for(var i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
      document.write(char+next +"<br>");
        count++
      }
    }
    
    return count;
  }
  
  
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  
  document.write("count:"+found);


//____________________________Task No :8___________________________________
var km = prompt("Enter distance in kilometer");


function meter(km) {
    var m = 1000 * km;
    return m
}
function centimeter(km) {
    var cm = 1000 * 100 * km;
    return cm
}
function feet(km) {
    var f = 3280.48 * km;
    return f
}
function inches(km) {
    var iN = 39370.08 * km;
     return iN
}

var result = (meter(km));
var result1 = (centimeter(km));
var result2 = (feet(km));
var result3 = (inches(km));

document.write("The distance in Meters:" + result + "<br>" + "The distance in Centimeter:" + result1 + "<br>" + "The distance in Feet:" + result2 + "<br>" +"The distance in Inches:"+result3); 
 

  }


  //____________________________Task No :9___________________________________
var employees=prompt("How many employees work");
var time=prompt("Enter the time employee worked in hour");

function Employees(employees,time)

var overTime=0,i;
var overPay=0;
for(i=0; i<employees;i++){
    
    if(time>40){
        overTime=time-40;
        overPay=overTime+(12*time);
        return overPay;
    }

}

var result=Employees(employees,time);
document.write("Total Overtime pay of Employees is :"+result);

  
  < // ..........................  Chapter No 43-48 ..........................

  //____________________________Task No :1___________________________________
  
  <a href="#" onclick="alert('Learing javascript')">javaScript</a>
   //____________________________Task No :2___________________________________

  <img src="1.png" onclick="alert('Thanks for purchasing a phone for us')">
  //____________________________Task No :3___________________________________
<table id="myTable">
  <tr>
      <td id="num"> 0</td>
      <td> jhone 10</td>
      <td><input type="button" value="delete" onclick="deleteRow(this)"></td>
  </tr>
  <tr>
      <td id="num">1</td>
      <td> Doe 9</td>
      <td><input type="button" value="delete" onclick="deleteRow(this)"></td>
  </tr>
  <tr>
      <td id="num">2</td>
      <td> Mark 10</td>
      <td><input type="button" value="delete" onclick="deleteRow(this)"></td>
  </tr>
  <tr>
      <td id="num">3</td>
      <td> james 8</td>
      <td><input type="button" value="delete" onclick="deleteRow(this)"></td>
  </tr>
  </table>
---------------------JavaScript---------------------------

  function deleteRow(r){
      var i= r.parentNode.parentNode.rowIndex;
      document.getElementById("myTable").deleteRow(i);
  } 

//____________________________Task No :3___________________________________
  <img src="1.png" id="img"  onmouseover="after_Image()" onmouseout="before_Image()" alt="">

  ---------------------JavaScript---------------------------
  function after_Image(){
  var car_Image=document.getElementById('img');
  car_Image.src="2.png";
}
function before_Image(){
  var car_Image=document.getElementById('img');
  car_Image.src="1.png";  
}


//____________________________Task No :4___________________________________
<center >
<input type="button" value="increase" onclick="add()"  />

<input type="button" value="decrease" onclick="sub()"  />


  <p id="displayCount" >0</p>


---------------------JavaScript---------------------------  
var count = 0;
    var display = document.getElementById("displayCount");

    function add(){
      count++;
      display.innerHTML = count;
    }
    function sub(){
      count--;
      display.innerHTML = count;
    }


</center>


  <! // ..........................  Chapter No 49-52 ..........................

  //____________________________Task No :1__________________________________
  <form>
      <label><b>Enter Email</b></label>
      <input type="emal" name="message" id="user_input1">

      <label><b>Enter Password</b></label>
      <input type="password" name="message" id="user_input2">
     
  </form>
   <input type="submit" onclick="showInput()"><br />

  
   <label><b> Your input: </b> </label>
   <p><span id='display'></span></p>
   <p><span id='display_password'></span></p>
      ---------------------JavaScript---------------------------  
      function showInput() {
          document.getElementById('display').innerHTML = document.getElementById("user_input1").value;
          document.getElementById('display_password').innerHTML = document.getElementById("user_input2").value;
      }
  

//____________________________Task No :2__________________________________
  <p id="para">JavaScript introduces students to the basics of JavaScript, one of today's leading web development
      languages. The course requires knowledge of HTML and CSS and is an ideal transition from HTML into more advanced
      web technologies and Web 2.0 tools. As students explore the fundamentals of JavaScript, they gain an
      understanding of how to implement interactivity, special effects, and enhanced functionality in web development.
      The course features current web-standards compliance techniques for the web and covers the most up-to-date
      practices in JavaScript. For students new to programming,<a href="javascript:void(0)" onclick="read_More()"> read more</a></p>

      --------------------JavaScript---------------------------  

      function read_More() {
          var text = 'the course is even more enriching as it covers basic computer programming concepts and introduces the concepts of variables, operators, arrays, conditionalstatements, loops and functions--all an indispensable part of higher level languages like C, C++, and Java. Students do not need to purchase any software in order to successfully complete this class.This course is appropriate for advanced middle school and high school students.Students are expected to be familiar with standard computer operations(e.g., login, cut & paste, email attachments, etc.Students are strongly encouraged to take a free online placement test before enrolling in this course.';
          var paragraph = document.getElementById('para');
          paragraph.innerHTML = text; }>

  //____________________________Task No :3__________________________________

  <table>
      <tr>
          <th>Student Name</th>
          <th>Roll No</th>
          <th>Department</th>
          <th>Insitute</th>
      </tr>
  </table>
  <table id="myTable">
      <tr>
          <td>Ammara</td>
          <td>2k19/Mkit/3</td>
          <td>bs.it</td>
          <td>Sindh univerity</td>
      </tr>
      <tr>
          <td>Atiqa</td>
          <td>2k19/Mkit/5</td>
          <td>bs.it</td>
          <td>Sindh univerity</td>
      </tr>
      <tr>
          <td>Laiba</td>
          <td>2k19/Mkit/16</td>
          <td>bs.it</td>
          <td>Sindh univerity</td>
      </tr>
  </table>      


  <button onclick="myCreateFunction()">Create row</button>
  <button onclick="myDeleteFunction()">Delete row</button>

  --------------------JavaScript---------------------------  
  function myCreateFunction() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(0);
  
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
  
  
      cell1.innerHTML = "Bushra";
      cell2.innerHTML = "2k19/Mkit/6";
      cell3.innerHTML = "bs.it";
      cell4.innerHTML = "sindh university";
  }
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);}>

  < // ..........................  Chapter No 49-52 ..........................


    //____________________________Task No :1__________________________________

<div>
        <img onclick="showImage(this)"  data-toggle="modal" data-target="#exampleModal" class="img" src="1.png" alt="">
        <img  onclick="showImage(this)"  data-toggle="modal" data-target="#exampleModal" class="img" src="2.png" alt="">
        <img  onclick="showImage( this)" data-toggle="modal" data-target="#exampleModal" class="img" src="1.png" alt="">
        <img   onclick="showImage(this)"data-toggle="modal" data-target="#exampleModal" class="img" src="2.png" alt="">
        <img  onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" class="img" src="1.png" alt="">
        
    </div>



  
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body img">
                <img src="" alt="" id="modalImage">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>

      --------------------JavaScript---------------------------  
   function showImage(e){
     var modalImage=document.getElementById("modalImage");
     modalImage.src=e.src;


   }




    //____________________________Task No :2__________________________________

<p id="para">Hello EveryOne  What going on...!</p> 

<button onclick="large()">Zoom(+)</button>
<button onclick="small()">Zoom(-)</button>


--------------------JavaScript---------------------------  

    function large(){
   var font_large=document.getElementById('para');
   font_large.style.fontSize="10px"
 }
 function small(){
   var font_samll=document.getElementById('para');
   font_samll.style.fontSize="0px"
 }
 
 // ..........................  Chapter No 58-67 ..........................
 //____________________________Task No :1__________________________________

   var val=document.getElementById("main-content");
   var p=val.getElementsByTagName("p");
   for(var i=0; i<p.length;i++){
       var result=p[i].innerHTML;
       console.log(result);

   }
   var First_name=document.getElementById("first-name")
   First_name.value="Ammara";
   
   var Last_name=document.getElementById("last-name")
   Last_name.value="Rehmat";
   
   var Email_address=document.getElementById("email")
   Email_address.value="ammarasaleem780@gmail.com";*/

//____________________________Task No :2__________________________________


