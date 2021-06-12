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


/* -------------------------------------------VALIDATE DELIVERY INPUTS---------------------------------------------- */
const $ = function (id) {
  return document.getElementById(id);
};

window.addEventListener('load', () => {
      $('saveSubmit').addEventListener('click', () => {
      //clear error msg
      $('spanName').value = "";
      $('spanName2').value = "";
      $('spanAddress').value = "";
      $('spanAddress2').value = "";
      $('spanCity').value = "";
      $('spanCity2').value = "";
      $('spanState').value = "";
      $('spanState2').value = "";
      $('spanZip').value = "";
      $('spanZip2').value = "";
      $('spanPhone').value = "";
      $('spanEmail').value = "";
      $('spanCVC').value = "";
      $('spanCC').value = "";

      //get values entered by user
      const name = $('name1').value; 
      const name2 = $('name2').value; 
      const addressType = $('addressType').value;
      const address = $('address1').value;
      const address2 = $('address2').value;
      const city = $('city1').value;
      const city2 = $('city2').value;
      const state = $('state1').value;
      const state2 = $('state2').value;
      const zip = $('zip1').value;
      const zip2 = $('zip2').value;
      const phone = $('phone').value;
      const email = $('email').value;
      const cvc = $('cvc').value;
      const cc = $('creditCard').value;

      //regular expressions for validity testing
      const namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
      const addressPattern = /^[0-9]+(?:\s[a-zA-Z]+)+$/;
      const cityPattern = /^[a-zA-Z',.\s-]{1,25}$/;
      const statePattern = /^[a-zA-Z]{2}$/;
      const zipPattern = /^\d{5}?$/;
      const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
      const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
      const cvcPattern = /^\d{3}?$/;
      const amexPattern = /^(?:3[7][0-9]{13})$/;
      const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const masterPattern = /^(?:5[1-5][0-9]{14})$/;
      

      //check user entries for validity
      let isValid = true;
      //NAME
      if (name === "" || !namePattern.test(name)) {
          isValid = false;
          $('spanName').innerHTML = "Full Name Required";
      } else {
          $('spanName').innerHTML = "";
      }
      //NAME2
      if (name2 === "" || !namePattern.test(name2)) {
          isValid = false;
          $('spanName2').innerHTML = "Full Name Required";
      } else {
          $('spanName2').innerHTML = "";
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
      //ADDRESS2
      if (address2 === "" || !addressPattern.test(address)) {
          isValid = false;
          $('spanAddress2').innerHTML = "Street Address Required";
      } else {
          $('spanAddress2').innerHTML = "";
      }
      //CITY
      if (city === "" || !cityPattern.test(city)) {
          isValid = false;
          $('spanCity').innerHTML = "City Required";
      } else {
          $('spanCity').innerHTML = "";
      }
      //CITY2
      if (city2 === "" || !cityPattern.test(city)) {
          isValid = false;
          $('spanCity2').innerHTML = "City Required";
      } else {
          $('spanCity2').innerHTML = "";
      }
      //STATE
      if (state === "" || !statePattern.test(state)) {
          isValid = false;
          $('spanState').innerHTML = "State Required";
      } else {
          $('spanState').innerHTML = "";
      }
      //STATE2
      if (state2 === "" || !statePattern.test(state)) {
          isValid = false;
          $('spanState2').innerHTML = "State Required";
      } else {
          $('spanState2').innerHTML = "";
      }
      //ZIP
      if (zip === "" || !zipPattern.test(zip)) {
          isValid = false;
          $('spanZip').innerHTML = "Zip Code Required";
      } else {
          $('spanZip').innerHTML = "";
      }
      //ZIP2
      if (zip2 === "" || !zipPattern.test(zip)) {
          isValid = false;
          $('spanZip2').innerHTML = "Zip Code Required";
      } else {
          $('spanZip2').innerHTML = "";
      }
      //PHONE
      if (phone === "" || !phonePattern.test(phone)) {
          isValid = false;
          $('spanPhone').innerHTML = "Phone Number Required";
      } else {
          $('spanPhone').innerHTML = "";
      }
      //EMAIL
      if (email === "" || !emailPattern.test(email)) {
          isValid = false;
          $('spanEmail').innerHTML = "Valid Email Required";

      } else {
          $('spanEmail').innerHTML = "";
      }
      //CVC
      if (cvc === "" || !cvcPattern.test(cvc)) {
          isValid = false;
          $('spanCVC').innerHTML = "Valid CVC Required";

      } else {
          $('spanCVC').innerHTML = "";
      }

      //CC VISA
      if (cc === "" || !visaPattern.test(cc)) {
          isValid = false;
          $('spanCC').innerHTML = "Valid CVC Required";
      } else {
        $('spanCC').innerHTML = "Visa";
      }

      //CC MASTERCARD
      if (cc === "" || !masterPattern.test(cc)) {
          isValid = false;
          $('spanCC').innerHTML = "Valid CC Required";
      } else {
        $('spanCC').innerHTML = "MasterCard";
      }

      //CC AMEX
      if (cc === "" || !amexPattern.test(cc)) {
          isValid = false;
          $('spanCC').innerHTML = "Valid CVC Required";
      } else {
        $('spanCC').innerHTML = "American Express";
      }
      
  });
  $('name1').focus();

});

/* --------------------------------VALIDATE BILLING INPUTS------------------------------- */
//SAME AS DELIVERY INFO
function addressFunction() {
    if ($("same").checked) {
        $("name2").value = $('name1').value;
        $("address2").value = $("address1").value;
        $("aptNumber2").value = $("aptNumber1").value;
        $("city2").value = $("city1").value;
        $("state2").value = $("state1").value;
        $("zip2").value = $("zip1").value;

    } else {
        $('name2').value = "";
        $("address2").value = "";
        $("aptNumber2").value = "";
        $("city2").value = "";
        $("state2").value = "";
        $("zip2").value = "";
    }
}