function matchpass() {
    var firstPass = document.f1.password.value;
    var secondPass = document.f1.password2.value;
    if(firstPass == secondPass){
        alert("Your Password is Correct🩷🩷🩷🩷");
      return true;
    }
    else{
      alert("Password must be same!!");
      return false;
    }
  }