const firebaseConfig = {
    apiKey: "AIzaSyDLkeddziTg3KSs4xN0sRSSzEfn0WBNJh0",
    authDomain: "food-fba3f.firebaseapp.com",
    databaseURL: "https://food-fba3f-default-rtdb.firebaseio.com",
    projectId: "food-fba3f",
    storageBucket: "food-fba3f.appspot.com",
    messagingSenderId: "544146435715",
    appId: "1:544146435715:web:58c059a39d85670cbe35b6"
  };
  
 firebase.initializeApp(firebaseConfig);
 document.getElementById("donate-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var phone = getElementVal("phone");
  var address = getElementVal("address");
  var description = getElementVal("description");

  saveMessages(name, emailid, phone, address, description);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("donate-form").reset();
}

