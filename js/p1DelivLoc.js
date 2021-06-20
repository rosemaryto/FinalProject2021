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


/* -------------------------------VALIDATE DELIVERY INPUTS---------------------------------------------- */
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
          $('spanCC').innerHTML = "Valid CC Required";
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
          $('spanCC').innerHTML = "Valid CC Required";
      } else {
        $('spanCC').innerHTML = "American Express";
      }
      


      //DATE VALIDATION
      const form = $('pizzaForm');
      const expMonth = $('expMonth');
      const expYear = $('expYear');
      const expError = $('expError');
      const month = expMonth.value;
      const year = expYear.value;
      const expDate = new Date(year + '-' + month + '-01');
      if (expDate < new Date()) {
        expError.innerHTML = "Card has expired";
    } else {
        expError.innerHTML = "";
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

function myFunction() {
  var x = $('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}


/* -------------------------------------------BUILD ORDER - DOUGH OPTIONS---------------------------------------------- */


  
  const handTossed = {
      sizes: "Small",
      sizem: "Medium",
      sizel: "Large",
      prices: 9.99,
      pricem: 12.99,
      pricel: 14.99
  };
  
  function buildHTSelect () {
    let sbox = document.createElement('select');
    sbox.setAttribute("id", "htSelect");
    sbox.setAttribute("onchange", "calculateTotal()");
    $('spanHT').appendChild(sbox);
    //SMALL
    var small = document.createElement('option');
    small.setAttribute("value", "small");
    var a = document.createTextNode(handTossed.sizes + " " + handTossed.prices);
    small.appendChild(a);
    $('htSelect').appendChild(small);
    //MED
    var med = document.createElement('option');
    med.setAttribute("value", "medium");
    var b = document.createTextNode(handTossed.sizem + " " + handTossed.pricem);
    med.appendChild(b);
    $('htSelect').appendChild(med);
    //LARGE
    var lg = document.createElement('option');
    lg.setAttribute("value", "large");
    var c = document.createTextNode(handTossed.sizel + " " + handTossed.pricel);
    lg.appendChild(c);
    $('htSelect').appendChild(lg);
  }
  
  const thinCrust = {
      sizem: "Medium",
      sizel: "Large",
      pricem: 11.99,
      pricel: 13.99
  };
  
  function buildTCSelect () {
    let sbox = document.createElement('select');
    sbox.setAttribute("id", "tcSelect");
    sbox.setAttribute("onchange", "calculateTotal()");
    $('spanTC').appendChild(sbox);
    //MED
    var med = document.createElement('option');
    med.setAttribute("value", "medium");
    var b = document.createTextNode(thinCrust.sizem + " " + thinCrust.pricem);
    med.appendChild(b);
    $('tcSelect').appendChild(med);
    //LARGE
    var lg = document.createElement('option');
    lg.setAttribute("value", "large");
    var c = document.createTextNode(thinCrust.sizel + " " + thinCrust.pricel);
    lg.appendChild(c);
    $('tcSelect').appendChild(lg);
  }
  
  const nyStyle = {
      sizel: "Large",
      sizexl: "Extra Large",
      pricel: 16.99,
      pricexl: 19.99
  };
  
  function buildNYSelect () {
    let sbox = document.createElement('select');
    sbox.setAttribute("id", "nySelect");
    sbox.setAttribute("onchange", "calculateTotal()");
    $('spanNY').appendChild(sbox);
    //LARGE
    var lg = document.createElement('option');
    lg.setAttribute("value", "large");
    var b = document.createTextNode(nyStyle.sizel + " " + nyStyle.pricel);
    lg.appendChild(b);
    $('nySelect').appendChild(lg);
    //X-LARGE
    var xlg = document.createElement('option');
    xlg.setAttribute("value", "extra large");
    var c = document.createTextNode(nyStyle.sizexl + " " + nyStyle.pricexl);
    xlg.appendChild(c);
    $('nySelect').appendChild(xlg);
  }
  
  const glutenFree = {
      sizes: "Small",
      prices: 10.99
  };
  
  function buildGFSelect () {
    let sbox = document.createElement('select');
    sbox.setAttribute("id", "gfSelect");
    sbox.setAttribute("onchange", "calculateTotal()");
    $('spanGF').appendChild(sbox);
    //SMALL
    var sml = document.createElement('option');
    sml.setAttribute("value", "small");
    var a = document.createTextNode(glutenFree.sizes + " " + glutenFree.prices);
    sml.appendChild(a);
    $('gfSelect').appendChild(sml);
  }
   
  
  var radios = document.querySelectorAll('input[type=radio][name="crust"]');
      radios.forEach(radio => radio.addEventListener('change', () => {
  
          //CLEAR SPAN TAGS
          for (i = 0; i < document.getElementsByTagName('span').length; i++) {
              document.getElementsByTagName('span')[i].innerHTML = '';
          }
  
      var ele = document.getElementsByName('crust');
  
              for(i = 0; i < ele.length; i++) {
                  if(ele[i].checked && ele[i].value === "HandTossed") {
                  buildHTSelect();
                  break;
              } else {
                  $('spanHT').innerHTML = '';
              }
              
              if (ele[i].checked && ele[i].value === "ThinCrust") {
                  buildTCSelect();
                  break;
              } else {
                  $('spanTC').innerHTML = '';
              }
  
              if (ele[i].checked && ele[i].value === "NewYorkStyle"){
                  buildNYSelect();
                  break;
              } else {
                  $('spanNY').innerHTML = '';
              }
  
              if (ele[i].checked && ele[i].value === "GlutenFree"){
                  buildGFSelect();
                  break;
              } else {
                  $('spanGF').innerHTML = '';
              }
          }
      }));
     
  /*---------------------------------TOTAL PRICE FOR PIZZA-------------------------*/
  //CRUST
  /*hand tossed*/
  var ht_prices = new Array();
      ht_prices["small"]=9.99;
      ht_prices["medium"]=12.99;
      ht_prices["large"]=14.99;
      
  function htPrice() {
      var htPrice=0;
      var theForm = document.forms["pizzaForm"];
      var htCrust = theForm.elements["htSelect"];
      htPrice = ht_prices[htCrust.value];
      return htPrice;
  }
         
  /*thin crust*/
  var tc_prices = new Array();
      tc_prices["medium"]=11.99;
      tc_prices["large"]=13.99;
      
  function tcPrice() {
      var tcPrice=0;
      var theForm = document.forms["pizzaForm"];
      var tcCrust = theForm.elements["tcSelect"];
      tcPrice = tc_prices[tcCrust.value];
      return tcPrice;
  }
      
  /*ny crust*/
  var ny_prices = new Array();
      ny_prices["large"]=16.99;
      ny_prices["extra large"]=19.99;
      
  function nyPrice() {
      var nyPrice=0;
      var theForm = document.forms["pizzaForm"];
      var nyCrust = theForm.elements["nySelect"];
      nyPrice = ny_prices[nyCrust.value];
      return nyPrice;
  }
      
  /*gf crust*/
  var gf_prices = new Array();
      gf_prices["small"]=10.99;
      
  function gfPrice() {
      var gfPrice=0;
      var theForm = document.forms["pizzaForm"];
      var gfCrust = theForm.elements["gfSelect"];
      gfPrice = gf_prices[gfCrust.value];
      return gfPrice;
  }
  
  //CHEESE
  var cheese_prices = new Array();
  cheese_prices["0"]=0;
  cheese_prices["1"]=0;
  cheese_prices["2"]=2.99;
  cheese_prices["3"]=3.99;
  
  function getCheesePrice() {
      var pizzaCheesePrice=0;
      var theForm = document.forms["pizzaForm"];
      var selectedCheese = theForm.elements["cheese"];
      pizzaCheesePrice = cheese_prices[selectedCheese.value];
      return pizzaCheesePrice;
  }
  
  //SAUCE
  var sauce_prices = new Array();
  sauce_prices["0"]=0;
  sauce_prices["1"]=.99;
  sauce_prices["2"]=1.99;
  
  function getSaucePrice() {
      var pizzaSaucePrice=0;
      var theForm = document.forms["pizzaForm"];
      var selectedSauce = theForm.elements["sauce"];
      pizzaSaucePrice = sauce_prices[selectedSauce.value];
      return pizzaSaucePrice;
  }
  
  //TOPPINGS
   function pepperoniPrice() {
      var pepperoniPrice=0;var theForm = document.forms["pizzaForm"];
      var includePepperoni = theForm.elements["Pepperoni"];
      if(includePepperoni.checked==true)
      {pepperoniPrice=.99;}
      return pepperoniPrice;
   }
  function sausagePrice() {
      var sausagePrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeSausage = theForm.elements["Sausage"];
      if(includeSausage.checked==true)
      {sausagePrice=.99;}
      return sausagePrice;
  }
  function hamPrice() {
      var hamPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeHam = theForm.elements["Ham"];
      if(includeHam.checked==true)
      {hamPrice=.99;}
      return hamPrice;
  }
  function baconPrice() {
      var baconPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeBacon = theForm.elements["Bacon"];
      if(includeBacon.checked==true)
      {baconPrice=.99;}
      return baconPrice;
  }
  function salamiPrice() {
      var salamiPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeSalami = theForm.elements["Salami"];
      if(includeSalami.checked==true)
      {salamiPrice=.99;}
      return salamiPrice;
  }
  function peppersPrice() {
      var peppersPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includePeppers = theForm.elements["Peppers"];
      if(includePeppers.checked==true)
      {peppersPrice=.99;}
      return peppersPrice;
  }
  function olivesPrice() {
      var olivesPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeOlives = theForm.elements["Olives"];
      if(includeOlives.checked==true)
      {olivesPrice=.99;}
      return olivesPrice;
  }
  function jalapenosPrice() {
      var jalapenosPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeJalapenos = theForm.elements["Jalapenos"];
      if(includeJalapenos.checked==true)
      {jalapenosPrice=.99;}
      return jalapenosPrice;
  }
  function MushroomsPrice() {
      var MushroomsPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeMushrooms = theForm.elements["Mushrooms"];
      if(includeMushrooms.checked==true)
      {MushroomsPrice=.99;}
      return MushroomsPrice;
  }
  function PineapplePrice() {
      var PineapplePrice=0;
      var theForm = document.forms["pizzaForm"];
      var includePineapple = theForm.elements["Pineapple"];
      if(includePineapple.checked==true)
      {PineapplePrice=.99;}
      return PineapplePrice;
  }
  function OnionPrice() {
      var OnionPrice=0;
      var theForm = document.forms["pizzaForm"];
      var includeOnion = theForm.elements["Onion"];
      if(includeOnion.checked==true)
      {OnionPrice=.99;}
      return OnionPrice;
  }
  
  function calculateTotal() {
      var pizzaPrice = pepperoniPrice() + sausagePrice() + hamPrice() + baconPrice() + salamiPrice() + peppersPrice() + olivesPrice() + jalapenosPrice() + MushroomsPrice() + PineapplePrice() + OnionPrice() + getSaucePrice() + getCheesePrice() + htPrice();
      var finalPizzaPrice = pizzaPrice.toFixed(2);
      
      //display the result
      var divobj = document.getElementById('totalPrice');
      divobj.style.display='block';
      divobj.innerHTML = "Pizza Total: $"+finalPizzaPrice;
  }