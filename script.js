function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



  function validate(){
      
  
    const fName= document.forms.regForm.firstName.value;
    const errFN = document.getElementById('error-f-name');
    const errSvgFN = document.getElementById('svg-fn');
    
    const lName = document.forms.regForm.lastName.value;
    const errLN = document.getElementById('error-l-name');
    const errSvgLN = document.getElementById('svg-ln');
   
    const email = document.forms.regForm.yourEmail.value;
    const errEM = document.getElementById('error-email');
    const errSvgEM= document.getElementById('svg-em');

    const password = document.forms.regForm.yourPassword.value;
    const errPW = document.getElementById('error-pw');
    const errSvgPW = document.getElementById('svg-pw');
    


    if(fName.length<1){
        errFN.innerHTML = 'First Name cannot be empty';
        errSvgFN.style.display = 'block';
       
    }
    // else{
    //     fName.length.addEventListener('change', ()=>{
    //         errFN.innerHTML = '';
    //     errSvgFN.style.display = 'none';
    //     })
    // }

    if(lName.length<1){
        errLN.innerHTML = 'Last Name cannot be empty';
        errSvgLN.style.display = 'block';
    }
    // else{
    //     errLN.innerHTML = '';
    //     errSvgLN.style.display = 'none';
    // }
    if(email.length<1){
        errEM.innerHTML = 'Email Address cannot be empty';
        errSvgEM.style.display = 'block';
    }
    // else{
    //     errEM.innerHTML = '';
    //     errSvgEM.style.display = 'none';
    // }
        
    if(password.length<1){
        errPW.innerHTML = 'Password cannot be empty';
        errSvgPW.style.display = 'block';   
    }
    // else{
    //     errPW.innerHTML = '';
    //     errSvgPW.style.display = 'none';
    // }

    if(fName.length<1 || email.length<1 || lName.length<1 || password.length<1){
        return false;
 } 

 else if (!validateEmail(email)){
    errEM.innerHTML = `${email} is not valid`;
        errSvgEM.style.display = 'block';
     
     return false;
  }
}