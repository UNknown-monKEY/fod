var database =firebase.database();

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
        description=description,
    }



  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("donate-form").reset();
}

