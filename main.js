

function outer() {

      var age = prompt("What is Your Ages?");

      if ( isNaN(age) || age == "" ){
            inner();
      } else {
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
  } else if (age < 16) {
        alert( "YOU ARE SO YOUNG!!");
  } else {
        var x = "other";
        alert( text + action[x]);
  }

};


outer();
