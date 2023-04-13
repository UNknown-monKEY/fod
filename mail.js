var database =firebase.database();

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var phone = getElementVal("phone");
  var address = getElementVal("address");
  var description = getElementVal("description");
    
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

