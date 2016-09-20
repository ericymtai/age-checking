function ageCheck() {


//     while ( typeof age != "number" || isNaN( age ) == true ) {
//                
//           age = Number( prompt( "Please enter your age" ) );

//           getAge( age );
//                
//     }

    while ( typeof age != "string" || isNaN( age ) != false ) {
               
          age = prompt( "Please enter your age" ) ;

          getAge( age );
               
    }

    function getAge( age ) {

          var text = "You are old enough to ";

          var action = { 16: "drive!", 17: "drive!", 18: "drive and vote!", "other": "drive, vote and drink!!" };

          if ( isNaN( age ) == true ) {
                alert( "Enter number please!!" );

          } else if ( age > 100 ) {
                alert( "CANNOT BE OVER 100!!" );

          } else if ( age == '' ) {
                alert( "You haven't enter your age yet!!" );

          } else if ( age < 16 ) {
                alert( "YOU ARE SO YOUNG!!" );

          } else if ( age == 16 || age == 17 || age == 18 ) {
                var x = age;
                alert( text + action[x] );

          }  else {
                var x = "other";
                alert( text + action[x] );

          }

          var records = [];

          records.push( age );

          node = document.createElement( "LI" );

          for ( var i=0; i<=records.length-1; i++ ) {

              textnode = document.createTextNode( "Age: " + records[i]  + " checked." );
              node.appendChild( textnode );
              document.getElementById( "recordDiv" ).appendChild( node );
          }

    };

};

ageCheck();
