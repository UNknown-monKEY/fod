// var database =firebase.database();
const firebaseConfig = {
    apiKey: "AIzaSyDLkeddziTg3KSs4xN0sRSSzEfn0WBNJh0",
    authDomain: "food-fba3f.firebaseapp.com",
    databaseURL: "https://food-fba3f-default-rtdb.firebaseio.com",
    projectId: "food-fba3f",
    storageBucket: "food-fba3f.appspot.com",
    messagingSenderId: "544146435715",
    appId: "1:544146435715:web:58c059a39d85670cbe35b6"
  };
  //   copy your firebase config informations

// initialize firebase
firebase.initializeApp(firebaseConfig);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var emailid = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var description = document.getElementById("description").value;
    
    database.ref('user/').push().set({
        name:name,
        emailid:emailid,
        phone:phone,
        address:address,
        description:description,
    });



  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("donate-form").reset();
}

