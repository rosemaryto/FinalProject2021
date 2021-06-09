//IF OTHER ADDRESS IS SELECTED
//MAKE TEXT BOX APPEAR
const otherAddr = document.querySelector('#addressType');
otherAddr.addEventListener('change', (e) => {
  const otherResult = document.querySelector('#addressBox');
  //IF OTHER IS SELECTED
  if (e.target.value === "other") {
    //CREATE TEXT BOX
    buildTextBox();
  } else {
    // otherResult.removeChild(otherResult.firstChild);
    otherResult.innerHTML = "";
  }
});

 //BUILD TEXT BOX
function buildTextBox () {
  //LABEL
  var newLabel = document.createElement('label');
  newLabel.setAttribute("class", "form-label");
  newLabel.innerHTML = "Please enter your address";
  document.getElementById('addressBox').appendChild(newLabel);
  //INPUT
  let tbox = document.createElement('input');
  tbox.setAttribute("type", "text");
  tbox.classList.add("form-control");
  document.getElementById("addressBox").appendChild(tbox);
}


/* -------------------------------------------VALIDATE INPUTS---------------------------------------------- */
const $ = function (id) {
  return document.getElementById(id);
};

window.addEventListener('load', () => {
      $('save').addEventListener('click', () => {
      //clear error msg
      $('spanName').value = "";
      $('spanAddress').value = "";
      $('spanCity').value = "";
      $('spanState').value = "";
      $('spanZip').value = "";
      $('spanPhone').value = "";
      $('spanEmail').value = "";

      //get values entered by user
      const name = $('name').value; 
      const addressType = $('addressType').value;
      const address = $('address').value;
      const city = $('city').value;
      const state = $('state').value;
      const zip = $('zip').value;
      const phone = $('phone').value;
      const email = $('email').value;

      //regular expressions for validity testing
      const namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
      const addressPattern = /^[0-9]+(?:\s[a-zA-Z]+)+$/;
      const cityPattern = /^[a-zA-Z',.\s-]{1,25}$/;
      const statePattern = /^[a-zA-Z]{2}$/;
      const zipPattern = /^\d{5}?$/;
      const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
      const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;

      //check user entries for validity
      let isValid = true;
      //NAME
      if (name === "" || !namePattern.test(name)) {
          isValid = false;
          $('spanName').innerHTML = "Full Name Required";
      } else {
          $('spanName').innerHTML = "";
      }
      //ADDRESS TYPE
      if (addressType === "") {
        isValid = false;
        $('spanAddressType').innerHTML = "Selection Required";
      } else {
        $('spanAddressType').innerHTML = "";
      }
      //ADDRESS
      if (address === "" || !addressPattern.test(address)) {
          isValid = false;
          $('spanAddress').innerHTML = "Street Address Required";
      } else {
          $('spanAddress').innerHTML = "";
      }
      // //CITY
      if (city === "" || !cityPattern.test(city)) {
          isValid = false;
          $('spanCity').innerHTML = "City Required";
      } else {
          $('spanCity').innerHTML = "";
      }
      // //STATE
      if (state === "" || !statePattern.test(state)) {
          isValid = false;
          $('spanState').innerHTML = "State Required";
      } else {
          $('spanState').innerHTML = "";
      }
      // //ZIP
      if (zip === "" || !zipPattern.test(zip)) {
          isValid = false;
          $('spanZip').innerHTML = "Zip Code Required";
      } else {
          $('spanZip').innerHTML = "";
      }
      // //PHONE
      if (phone === "" || !phonePattern.test(phone)) {
          isValid = false;
          $('spanPhone').innerHTML = "Phone Number Required";
      } else {
          $('spanPhone').innerHTML = "";
      }
      // //EMAIL
      if (email === "" || !emailPattern.test(email)) {
          isValid = false;
          $('spanEmail').innerHTML = "Valid Email Required";

      } else {
          $('spanEmail').innerHTML = "";
      }
      // document.getElementById('name').focus();
  });
  $('name').focus();

});

