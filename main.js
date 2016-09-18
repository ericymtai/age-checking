function outer() {

          var age = prompt("What is Your Ages? or press 'exit' to stop!");

          if (age === "exit") {
            console.log("exit");
            // document.getElementById("Div").innerHTML = "Thanks for Checking your age!!";
          } else if  (isNaN(age) || age == "" ){
                inner();
          } else  {
                getAge(age) ;
          }

          function inner() {
                var age = prompt("Please enter numbers?");

                if ( isNaN(age) || age == "" ) {
                      inner();
                } else {
                      getAge(age) ;
                }
          };
};

function getAge(age) {

    var text = "You are old enough to ";
    var action = {16: "drive!", 17: "drive!", 18: "drive and vote!", "other": "drive, vote and drink!!"};

    if (age == 16 || age == 17 || age == 18) {
          var x = age;
          alert( text + action[x]);
          outer();
    } else if (age < 16) {
          alert( "YOU ARE SO YOUNG!!");
          outer();
    } else {
          var x = "other";
          alert( text + action[x]);
          outer();
    }

    var records = [];

    records.push(age);
    node = document.createElement("LI");

    for (var i=0; i<=records.length-1; i++) {
        textnode = document.createTextNode("Year: " + records[i]  + " checked, ");
        node.appendChild(textnode);
        document.getElementById("myDiv").appendChild(node);
    }

};

outer();
