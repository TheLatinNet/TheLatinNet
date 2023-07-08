//
// © Hamd Waseem 2023 under the Apache License 2.0
// https://github.com/hamdivazim/TheLatinNet
//

function showMenu() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }