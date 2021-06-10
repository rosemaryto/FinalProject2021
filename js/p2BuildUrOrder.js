/* -------------------------------------------BUILD ORDER - DOUGH OPTIONS---------------------------------------------- */

const $ = function (id) {
  return document.getElementById(id);
};

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
    var pizzaPrice = pepperoniPrice() + sausagePrice() + hamPrice() + baconPrice() + salamiPrice() + peppersPrice() + olivesPrice() + jalapenosPrice() + MushroomsPrice() + PineapplePrice() + OnionPrice();
    var finalPizzaPrice = pizzaPrice.toFixed(2);
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the pizza $"+finalPizzaPrice;
}

  
  
  
  
  
  
  
  
  
  
  
  