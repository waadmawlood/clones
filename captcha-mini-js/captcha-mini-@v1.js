// Copyright 2022. All rights reserved.
// Author : Waad Mawlood Obaid  - Baghdad/Iraq - 1997
// portfolio : https://waad.netlify.app/
// github : https://github.com/waadmawlood
// linkedin : https://www.linkedin.com/in/waadmawlood/

let randon_captcha = float2int((Math.random() * 25) + 1) ;
const form = window.document.getElementsByClassName("captcha-mini")[0].addEventListener("submit", submitForm);
let inputDiv = document.querySelectorAll(".captcha-input")[0]; //= "<img src="+"images/c13.jpg"+" alt="+"captcha+"+" width="+"90px"+"><br><input type="+"text"+" placeholder="+"code..."+" style="+"margin-top: 2px;"+">";
let valueCaptcha = mapCode(randon_captcha);
inputDiv.innerHTML = "<img src='images/c"+ randon_captcha +".jpg' alt='captcha' width='90px'><br><input type='text' id='c"+ randon_captcha +"' placeholder='code...' style='margin-top: 2px;'><small id='msgCaptcha' style='color:red; font-size:12px; display:none'>Please input code in image...</small>";
function submitForm(event){
    let inputCaptcha = window.document.getElementById("c" + randon_captcha);
    if(inputCaptcha.value != valueCaptcha){ event.preventDefault(); window.document.getElementById("msgCaptcha").style.display = "block"; }}
function float2int (value) { return value | 0; }
function mapCode(value){ var mapCodes = { 1:"MPAFY", 2:"SGAMP", 3:"REJS", 4:"EWW", 5:"FNAZ", 6:"YHPX",
        7:"JADKF", 8:"PKBPG", 9:"HZHK", 10:"PCA", 11:"SMD", 12:"AJRYB", 13:"YRJZ",
        14:"EMYNX", 15:"XBN", 16:"SGD", 17:"CBBFC", 18:"PWJ", 19:"GYY", 20:"NFAH",
        21:"GPAEG", 22:"CCB", 23:"NXCA", 24:"TRNJN", 25:"TKN",}; return mapCodes[value]; }