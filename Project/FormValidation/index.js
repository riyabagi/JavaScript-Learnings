      function clearErrors() {
        errors = document.getElementsByClassName("formerror");
        for (let item of errors) {
          item.innerHTML = " ";
        }
      }
      function seterror(id, error) {
        // sets error inside tag of id
        let element = document.getElementById(id);
        console.log(id);
        element.getElementsByClassName("formerror")[0].innerHTML = error;
      }

      function validateForm() {
        var returnval = true;
        clearErrors();

        var name = document.forms["myform"]["fname"].value;
        // if (name.length == 5) {
        //   seterror("name", "*Name cannot be blank");
        //   returnval = false;
        // }
        if (name.length < 5) {
          seterror("name", "*Length of name is too short");
          returnval = false;
        }

        var email = document.forms["myform"]["femail"].value;
        if (email.length > 25) {
          seterror("email", "*Emial is too long");
          returnval = false;
        }

        var phone = document.forms["myform"]["fphone"].value;
        if (phone.length != 10) {
          seterror("phone", "*Phone number should be of 10 digits");
          returnval = false;
        }

        var password = document.forms["myform"]["fpass"].value;
        if (password.length < 8) {
          seterror("pass", "*Password is too short");
          returnval = false;
        }

        var cpassword = document.forms["myform"]["cpass"].value;
        if (password != cpassword) {
          seterror("cpass", "*Password does not match");
          returnval = false;
        }

        return returnval;
      }