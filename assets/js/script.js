$("document").ready(function(){



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRj2F0x0nOfv9QVEJB_Pa0pqtNdkLouIw",
    authDomain: "multiplayer-rps-adfe5.firebaseapp.com",
    databaseURL: "https://multiplayer-rps-adfe5.firebaseio.com",
    storageBucket: "multiplayer-rps-adfe5.appspot.com",
    messagingSenderId: "62673509464"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

//capture userLogin, and send info to firebase
  $(document).on("click", "#submitBtn", function (){

    var login = $("#userLogin").val().trim();
    console.log(login);

    var player1
    var player2 = 

    database.ref().set({
      player1: {

      }

    });

    return false;
  });

  //captures information stored in firebase, and prints it to 
  database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());

    var userOne = $("#userOne");
    var userTwo = $("#userTwo");
    var userCount = 0;

    if(userCount == 0 ){
      userOne.html(snapshot.val().userLogin);
      userCount++;
    }else if(userCount == 1){
      userTwo.html(snapshot.val().userLogin);
    } else{
      $("#logForm").html("Ro Sham Bo!!!!")
    }


    login = snapshot.val().userLogin;

  }, function(errorObject) {

    console.log("The read failed: " + errorObject.code);
  });







}); //end doc.ready