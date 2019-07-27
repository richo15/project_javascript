console.log ("saya java script");

document.getElementById ("headTree")
    .innerHTML = "Belajar Java Scrip";

    var name = "Richo";
    console.log (name);

    var lastName = "Jojo";
    console.log (lastName);
    
    //Cara lama ES5

    var fullName= name + " " + lastName;

    console.log (name + " " + lastName);
    console.log (fullName);
    console.log ("Nama Saya :"+ fullName);

    //Cara Baru ES6
    console.log (`Nama Saya :${fullName}`);

    // Komen 1 line
    /**
     * line 1
     * line 2
     */

//operator penambahan
     var x=5;
     var y=7;

     var z=x+y;
     console.log (z);

//operator perkalian   
    var a=5;
    var b=7;

    var c=a*b;
    console.log (c); 
    
  //operator
  /**
   * ++ increment
   * -- decremen 
   */
  
   var d=10;
   d +=5;
   console.log (d);

   var e=10;
   e -=5;
   console.log (e);

   var e=10;
   e *=5;
   console.log (e);

   // % => modulo
   var f=10;
   g =f % 3;
   console.log (g);

   var text1="richo";
   var text2="jojo";
   var text3=text1 + " " + text2;
   console.log (text3);

   document.getElementById ("loop")
    .innerHTML = text3;

    /**
     * == ; equal value
     * === : equal value * type
     * != : not equal
     * !== : not equal value & type
     * > : lebih besar
     * < : lebih Kecil
     * ? : ternary
     */