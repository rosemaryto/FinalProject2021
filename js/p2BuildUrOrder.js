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
   

  
  
  
  
  
  
  
  
  
  
  
  