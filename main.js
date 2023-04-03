let a = 0;
let b = 0;

let q = matchMedia("(max-width:760px)");
// let p = matchMedia("(min-width:761px)");
let navchk=1;
setInterval(()=>{
  if(q.matches==false){
    document.querySelector(".options").style.display ="flex";
    head1.style.height="45px";
    if(navchk==0){
      head1.style.height="45px";
      navchk=1;
    }
  }
  else if(q.matches){
    if(navchk==1){
      document.querySelector(".options").style.display = "none";
      head1.style.height="45px";
    }
  }},1);

  setInterval(()=>{
    if(q.matches){
      head.style.background = "#fcb900";
      document.getElementById("logoimage").src =
        "images/images-removebg-preview.png";
        document.querySelector(".pop").style.background = "red";
}
},1);
setInterval(()=>{
  if(q.matches == false){
  if(chk==1){
    head.style.background = "white";
      document.getElementById("logoimage").src =
        "images/download-removebg-preview.png";
      document.querySelector(".pop").style.background = "white";
  }}

},1)
let head = document.getElementById("check");
let head1=document.getElementById("check1");
let chk=0;
window.addEventListener("scroll", () => {
  
  if (q.matches == false) {
    
    head.style.animation = "navbar 2S ease-in-out 0s 1 ";
    setTimeout(() => {
      chk=1;
      head.style.background = "white";
      document.getElementById("logoimage").src =
        "images/download-removebg-preview.png";
      document.querySelector(".pop").style.background = "white";
    }, 980);
  }
  else if(q.matches){
    if(a==1){
      document.querySelector(".options").style.display = "none";
      head1.style.height="45px";
      a = 0;
    }
  }
});

document.querySelector(".pop").addEventListener("click", () => {
  b++;
  a++;
  navchk--;
  if (a == 1) {
    document.querySelector(".options").style.display = "grid";
    head1.style.height="225px";
    
  } 
  else {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
    navchk=1;
  }
});
document.getElementById("upper").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++// ++++++++++++++++++++++++++++++++++++++++++++++++++
let clk1 = 0;
document.getElementById("MENU").addEventListener("click", () => {
  clk1 = 1;

  document.getElementById("middle1").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a=0;
  } 
    document.getElementById("MENU").style.borderBottom = "1px solid red";
    setTimeout(() => {
      document.getElementById("MENU").style.borderBottom = "none";
    }, 700);
  
});
document.getElementById("middle1").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
document.getElementById("MENU").addEventListener("mouseover", () => {
  document.getElementById("MENU").style.borderBottom = "1px solid red";
});
document.getElementById("MENU").addEventListener("mouseout", () => {
  if (clk1 == 1) {
    setTimeout(() => {
      document.getElementById("MENU").style.borderBottom = "none";
      clk1 = 0;
    }, 700);
  } else {
    document.getElementById("MENU").style.borderBottom = "none";
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++// ++++++++++++++++++++++++++++++++++++++++++++++++++
let clk2 = 0;
document.getElementById("HAPPY-MEAL").addEventListener("click", () => {
  clk2 = 1;
  document.getElementById("middle2").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a=0;
  } 
  document.getElementById("HAPPY-MEAL").style.borderBottom = "1px solid red";
  setTimeout(() => {
    document.getElementById("HAPPY-MEAL").style.borderBottom = "none";
  }, 700);
});
document.getElementById("middle2").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
document.getElementById("HAPPY-MEAL").addEventListener("mouseover", () => {
  document.getElementById("HAPPY-MEAL").style.borderBottom = "1px solid red";
});
document.getElementById("HAPPY-MEAL").addEventListener("mouseout", () => {
  if (clk2 == 1) {
    setTimeout(() => {
      document.getElementById("HAPPY-MEAL").style.borderBottom = "none";
      clk2 = 0;
    }, 700);
  } else {
    document.getElementById("HAPPY-MEAL").style.borderBottom = "none";
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++// ++++++++++++++++++++++++++++++++++++++++++++++++++
let clk3 = 0;
document.getElementById("Restaurarnt").addEventListener("click", () => {
  clk3 = 1;
  document.getElementById("middle4").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a=0;
  } 
  document.getElementById("Restaurarnt").style.borderBottom = "1px solid red";
  setTimeout(() => {
    document.getElementById("Restaurarnt").style.borderBottom = "none";
  }, 700);
});
document.getElementById("middle4").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
document.getElementById("Restaurarnt").addEventListener("mouseover", () => {
  document.getElementById("Restaurarnt").style.borderBottom = "1px solid red";
});
document.getElementById("Restaurarnt").addEventListener("mouseout", () => {
  if (clk3 == 1) {
    setTimeout(() => {
      document.getElementById("Restaurarnt").style.borderBottom = "none";
      clk3 = 0;
    }, 700);
  } else {
    document.getElementById("Restaurarnt").style.borderBottom = "none";
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++// ++++++++++++++++++++++++++++++++++++++++++++++++++
let clk4 = 0;
document.getElementById("McDelivery").addEventListener("click", () => {
  clk4 = 1;
  document.getElementById("middle5").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a=0;
  } 
  document.getElementById("McDelivery").style.borderBottom = "1px solid red";
  setTimeout(() => {
    document.getElementById("McDelivery").style.borderBottom = "none";
  }, 700);
});
document.getElementById("middle5").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
document.getElementById("McDelivery").addEventListener("mouseover", () => {
  document.getElementById("McDelivery").style.borderBottom = "1px solid red";
});
document.getElementById("McDelivery").addEventListener("mouseout", () => {
  if (clk4 == 1) {
    setTimeout(() => {
      document.getElementById("McDelivery").style.borderBottom = "none";
      clk4 = 0;
    }, 700);
  } else {
    document.getElementById("McDelivery").style.borderBottom = "none";
  }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++// ++++++++++++++++++++++++++++++++++++++++++++++++++
let clk5 = 0;
document.getElementById("News").addEventListener("click", () => {
  clk5 = 1;
  document.getElementById("middle6").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a=0;
  } 
  document.getElementById("News").style.borderBottom = "1px solid red";
  setTimeout(() => {
    document.getElementById("News").style.borderBottom = "none";
  }, 700);
});
document.getElementById("middle6").addEventListener("click", () => {
  if (a == 1) {
    document.querySelector(".options").style.display = "none";
    head1.style.height="45px";
    a = 0;
  }
});
document.getElementById("News").addEventListener("mouseover", () => {
  document.getElementById("News").style.borderBottom = "1px solid red";
});
document.getElementById("News").addEventListener("mouseout", () => {
  if (clk5 == 1) {
    setTimeout(() => {
      document.getElementById("News").style.borderBottom = "none";
      clk5 = 0;
    }, 700);
  } else {
    document.getElementById("News").style.borderBottom = "none";
  }
});

let burger = document.getElementById("Burgers&Wraps");
let Snacks = document.getElementById("Snacks&Sides");
let Dessertss = document.getElementById("Dessertss");
let Beveragess = document.getElementById("Beveragess");
burger.addEventListener("click", () => {
  burger.style.color = "#DB0007";
  Snacks.style.color = "#b7b7b7";
  Dessertss.style.color = "#b7b7b7";
  Beveragess.style.color = "#b7b7b7";

  burger.style.borderBottom = "2px solid red";
  Snacks.style.border = "none";
  Dessertss.style.border = "none";
  Beveragess.style.border = "none";

  // document.querySelector(".infoleft").style.order="1";
  // document.querySelector(".inforight").style.order="0";

  document.querySelector(".Burgers").style.display = "flex";
  document.querySelector(".Sides").style.display = "none";
  document.querySelector(".Desserts").style.display = "none";
  document.querySelector(".Beverages").style.display = "none";
});
Snacks.addEventListener("click", () => {
  burger.style.color = "#b7b7b7";
  Snacks.style.color = "#DB0007";
  Dessertss.style.color = "#b7b7b7";
  Beveragess.style.color = "#b7b7b7";

  burger.style.border = "none";
  Snacks.style.borderBottom = "2px solid red";
  Dessertss.style.border = "none";
  Beveragess.style.border = "none";

  document.querySelector(".Burgers").style.display = "none";
  document.querySelector(".Sides").style.display = "flex";
  document.querySelector(".Desserts").style.display = "none";
  document.querySelector(".Beverages").style.display = "none";
});
Dessertss.addEventListener("click", () => {
  burger.style.color = "#b7b7b7";
  Snacks.style.color = "#b7b7b7";
  Dessertss.style.color = "#DB0007";
  Beveragess.style.color = "#b7b7b7";

  burger.style.border = "none";
  Snacks.style.border = "none";
  Dessertss.style.borderBottom = "2px solid red";
  Beveragess.style.border = "none";

  document.querySelector(".Burgers").style.display = "none";
  document.querySelector(".Sides").style.display = "none";
  document.querySelector(".Desserts").style.display = "flex";
  document.querySelector(".Beverages").style.display = "none";
});
Beveragess.addEventListener("click", () => {
  burger.style.color = "#b7b7b7";
  Snacks.style.color = "#b7b7b7";
  Dessertss.style.color = "#b7b7b7";
  Beveragess.style.color = "#DB0007";

  burger.style.border = "none";
  Snacks.style.border = "none";
  Dessertss.style.border = "none";
  Beveragess.style.borderBottom = "2px solid red";

  document.querySelector(".Burgers").style.display = "none";
  document.querySelector(".Sides").style.display = "none";
  document.querySelector(".Desserts").style.display = "none";
  document.querySelector(".Beverages").style.display = "flex";
});

document.getElementById("btn1").addEventListener("mouseover", () => {
  document.getElementById("btn1").style.background = "red";
});
document.getElementById("btn1").addEventListener("mouseout", () => {
  document.getElementById("btn1").style.background = "transparent";
});
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("btn1").style.background = "red";
  setTimeout(() => {
    document.getElementById("btn1").style.background = "transparent";
  }, 300);
});
document.getElementById("btn2").addEventListener("mouseover", () => {
  document.getElementById("btn2").style.background = "red";
});
document.getElementById("btn2").addEventListener("mouseout", () => {
  document.getElementById("btn2").style.background = "white";
});
document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("btn2").style.background = "red";
  setTimeout(() => {
    document.getElementById("btn2").style.background = "white";
  }, 300);
});

let r = 1;
let l = 1;
let time = 1950;

let one = document.getElementById("r1");
let two = document.getElementById("r2");
let three = document.getElementById("r16");

let t1 = document.getElementById("text1");
let t2 = document.getElementById("text2");
let t3 = document.getElementById("text3");

document.getElementById("btn2").addEventListener("click", () => {
  document.querySelector(".container").style.animation =
    "anime 2s ease-in-out 0s 1 normal";
  document.querySelector(".container2").style.animation =
    "anime2 2s ease-in-out 0s 1 normal";

  if (r == 0) {
    setTimeout(() => {
      one.style.order = "1";
      two.style.order = "2";
      three.style.order = "0";

      t1.style.order = "1";
      t2.style.order = "2";
      t3.style.order = "0";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    r++;
    l = 1;
  } else if (r == 1) {
    setTimeout(() => {
      one.style.order = "0";
      two.style.order = "1";
      three.style.order = "2";

      t1.style.order = "0";
      t2.style.order = "1";
      t3.style.order = "2";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    r++;
    l = 0;
  } else if (r == 2) {
    setTimeout(() => {
      one.style.order = "2";
      two.style.order = "0";
      three.style.order = "1";

      t1.style.order = "2";
      t2.style.order = "0";
      t3.style.order = "1";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    r = 0;
    l = 2;
  }
});

document.getElementById("btn1").addEventListener("click", () => {
  document.querySelector(".container").style.animation =
    "ANIME 2s ease-in-out 0s 1 normal";
  document.querySelector(".container2").style.animation =
    "ANIME2 2s ease-in-out 0s 1 normal";
  if (l == 0) {
    setTimeout(() => {
      one.style.order = "1";
      two.style.order = "2";
      three.style.order = "0";

      t1.style.order = "1";
      t2.style.order = "2";
      t3.style.order = "0";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    l++;
    r = 1;
  } else if (l == 1) {
    setTimeout(() => {
      one.style.order = "2";
      two.style.order = "0";
      three.style.order = "1";

      t1.style.order = "2";
      t2.style.order = "0";
      t3.style.order = "1";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    l++;
    r = 0;
  } else if (l == 2) {
    setTimeout(() => {
      one.style.order = "0";
      two.style.order = "1";
      three.style.order = "2";

      t1.style.order = "0";
      t2.style.order = "1";
      t3.style.order = "2";

      document.querySelector(".container").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
      document.querySelector(".container2").style.animation =
        "anim 2s ease-in-out 0s 1 normal";
    }, time);
    l = 0;
    r = 2;
  }
});

let timedelay = 1950;
let bookcount = 1;
let bookcount2 = 1;
document.getElementById("arrowright").addEventListener("click", () => {
  document.querySelector(".bookcontainer").style.animation =
    " bookslider 2s ease-in-out 0s 1";
  if (bookcount == 0) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "1";
      document.querySelector(".booktwo").style.order = "2";
      document.querySelector(".bookthree").style.order = "3";
      document.querySelector(".bookfour").style.order = "4";
      document.querySelector(".bookfive").style.order = "5";
      document.querySelector(".booksix").style.order = "0";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount++;
    bookcount2 = 1;
  } else if (bookcount == 1) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "0";
      document.querySelector(".booktwo").style.order = "1";
      document.querySelector(".bookthree").style.order = "2";
      document.querySelector(".bookfour").style.order = "3";
      document.querySelector(".bookfive").style.order = "4";
      document.querySelector(".booksix").style.order = "5";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount++;
    bookcount2 = 0;
  } else if (bookcount == 2) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "5";
      document.querySelector(".booktwo").style.order = "0";
      document.querySelector(".bookthree").style.order = "1";
      document.querySelector(".bookfour").style.order = "2";
      document.querySelector(".bookfive").style.order = "3";
      document.querySelector(".booksix").style.order = "4";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount++;
    bookcount2 = 5;
  } else if (bookcount == 3) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "4";
      document.querySelector(".booktwo").style.order = "5";
      document.querySelector(".bookthree").style.order = "0";
      document.querySelector(".bookfour").style.order = "1";
      document.querySelector(".bookfive").style.order = "2";
      document.querySelector(".booksix").style.order = "3";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount++;
    bookcount2 = 4;
  } else if (bookcount == 4) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "3";
      document.querySelector(".booktwo").style.order = "4";
      document.querySelector(".bookthree").style.order = "5";
      document.querySelector(".bookfour").style.order = "0";
      document.querySelector(".bookfive").style.order = "1";
      document.querySelector(".booksix").style.order = "2";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount++;
    bookcount2 = 3;
  } else if (bookcount == 5) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "2";
      document.querySelector(".booktwo").style.order = "3";
      document.querySelector(".bookthree").style.order = "4";
      document.querySelector(".bookfour").style.order = "5";
      document.querySelector(".bookfive").style.order = "0";
      document.querySelector(".booksix").style.order = "1";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount = 0;
    bookcount2 = 2;
  }
});

document.getElementById("arrowleft").addEventListener("click", () => {
  document.querySelector(".bookcontainer").style.animation =
    " bookslider2 2s ease-in-out 0s 1";
  if (bookcount2 == 0) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "1";
      document.querySelector(".booktwo").style.order = "2";
      document.querySelector(".bookthree").style.order = "3";
      document.querySelector(".bookfour").style.order = "4";
      document.querySelector(".bookfive").style.order = "5";
      document.querySelector(".booksix").style.order = "0";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2++;
    bookcount = 1;
  } else if (bookcount2 == 1) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "2";
      document.querySelector(".booktwo").style.order = "3";
      document.querySelector(".bookthree").style.order = "4";
      document.querySelector(".bookfour").style.order = "5";
      document.querySelector(".bookfive").style.order = "0";
      document.querySelector(".booksix").style.order = "1";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2++;
    bookcount = 0;
  } else if (bookcount2 == 2) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "3";
      document.querySelector(".booktwo").style.order = "4";
      document.querySelector(".bookthree").style.order = "5";
      document.querySelector(".bookfour").style.order = "0";
      document.querySelector(".bookfive").style.order = "1";
      document.querySelector(".booksix").style.order = "2";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2++;
    bookcount = 5;
  } else if (bookcount2 == 3) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "4";
      document.querySelector(".booktwo").style.order = "5";
      document.querySelector(".bookthree").style.order = "0";
      document.querySelector(".bookfour").style.order = "1";
      document.querySelector(".bookfive").style.order = "2";
      document.querySelector(".booksix").style.order = "3";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2++;
    bookcount = 4;
  } else if (bookcount2 == 4) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "5";
      document.querySelector(".booktwo").style.order = "0";
      document.querySelector(".bookthree").style.order = "1";
      document.querySelector(".bookfour").style.order = "2";
      document.querySelector(".bookfive").style.order = "3";
      document.querySelector(".booksix").style.order = "4";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2++;
    bookcount = 3;
  } else if (bookcount2 == 5) {
    setTimeout(() => {
      document.querySelector(".bookone").style.order = "0";
      document.querySelector(".booktwo").style.order = "1";
      document.querySelector(".bookthree").style.order = "2";
      document.querySelector(".bookfour").style.order = "3";
      document.querySelector(".bookfive").style.order = "4";
      document.querySelector(".booksix").style.order = "5";
      document.querySelector(".bookcontainer").style.animation =
        " book 2s ease-in-out 0s 1";
    }, timedelay);
    bookcount2 = 0;
    bookcount = 2;
  }
});

let city = 1;
document.querySelector(".c1").addEventListener("click", () => {
  document.querySelector(".cityarrow").style.border = "1px solid black";
  if (city == 1) {
    document.querySelector(".c2").style.animation = "res 0.7s ease-in-out 0s 1";
    document.querySelector(".cityarrow ").style.top = "4px";
    setTimeout(() => {
      document.querySelector(".c2").style.height = "90px";
      document.querySelector(".c2").style.animation =
        "re2 0.7s ease-in-out 0s 1";
    }, 650);

    document.querySelector(".cityarrow").style.borderRight = "none";
    document.querySelector(".cityarrow").style.borderBottom = "none";
    city++;
  } else {
    document.querySelector(".c2").style.animation =
      "res2 0.7s ease-in-out 0s 1";
    document.querySelector(".cityarrow ").style.top = "0px";
    setTimeout(() => {
      document.querySelector(".c2").style.height = "0px";
      document.querySelector(".c2").style.animation =
        "re2 0.7s ease-in-out 0s 1";
    }, 650);

    document.querySelector(".cityarrow").style.borderLeft = "none";
    document.querySelector(".cityarrow").style.borderTop = "none";
    city = 1;
  }
});

document.querySelector(".c2").addEventListener("click", () => {
  document.querySelector("#middle4").style.background = "#fcb900";
  document.querySelector(".Select-City").style.display = "block";
  // document.querySelector(".restaurantright").style.backgroundImage= "url(images/restaurant/vector-white-dot-on-yellow-background.jpg)";
});
document.querySelector(".Agra").addEventListener("click", () => {
  document.querySelector(".store1").style.display = "block";
  document.querySelector(".store2").style.display = "none";
  document.querySelector(".store3").style.display = "none";
  document.querySelector(".agrainfo").style.display = "flex";
  document.querySelector(".ajmerinfo").style.display = "none";
  document.querySelector(".aligarhinfo").style.display = "none";
  document.querySelector("#changename").innerText = "Agra";

  if (city == 2) {
    document.querySelector(".cityarrow").style.border = "1px solid black";
    document.querySelector(".c2").style.animation =
      "res2 0.7s ease-in-out 0s 1";
    setTimeout(() => {
      document.querySelector(".c2").style.height = "0px";
      document.querySelector(".c2").style.animation =
        "re2 0.7s ease-in-out 0s 1";
    }, 650);

    document.querySelector(".cityarrow").style.borderLeft = "none";
    document.querySelector(".cityarrow").style.borderTop = "none";
    city = 1;
  }
});
let tick1 = 0;
let tick2 = 0;
let tick3 = 0;
let tick4 = 0;
document.querySelector(".tickone").addEventListener("click", () => {
  if (tick1 == 0) {
    document.querySelector(".tickone").style.background = "#fcb900";
    tick1++;
  } else {
    document.querySelector(".tickone").style.background = "transparent";
    tick1 = 0;
  }
});
document.querySelector(".ticktwo").addEventListener("click", () => {
  if (tick2 == 0) {
    document.querySelector(".ticktwo").style.background = "#fcb900";
    tick2++;
  } else {
    document.querySelector(".ticktwo").style.background = "transparent";
    tick2 = 0;
  }
});
document.querySelector(".tickthree").addEventListener("click", () => {
  if (tick3 == 0) {
    document.querySelector(".tickthree").style.background = "#fcb900";
    tick3++;
  } else {
    document.querySelector(".tickthree").style.background = "transparent";
    tick3 = 0;
  }
});
document.querySelector(".tickfour").addEventListener("click", () => {
  if (tick4 == 0) {
    document.querySelector(".tickfour").style.background = "#fcb900";
    tick4++;
  } else {
    document.querySelector(".tickfour").style.background = "transparent";
    tick4 = 0;
  }
});

document.querySelector(".Ajmer").addEventListener("click", () => {
  document.querySelector(".store2").style.display = "block";
  document.querySelector(".store1").style.display = "none";
  document.querySelector(".store3").style.display = "none";
  document.querySelector(".ajmerinfo").style.display = "flex";
  document.querySelector(".agrainfo").style.display = "none";
  document.querySelector(".aligarhinfo").style.display = "none";
  document.querySelector("#changename").innerText = "Ajmer";

  if (city == 2) {
    document.querySelector(".cityarrow").style.border = "1px solid black";
    document.querySelector(".c2").style.animation =
      "res2 0.7s ease-in-out 0s 1";
    setTimeout(() => {
      document.querySelector(".c2").style.height = "0px";
      document.querySelector(".c2").style.animation =
        "re2 0.7s ease-in-out 0s 1";
    }, 650);
    document.querySelector(".cityarrow").style.borderLeft = "none";
    document.querySelector(".cityarrow").style.borderTop = "none";
    city = 1;
  }
});

document.querySelector(".Aligarh").addEventListener("click", () => {
  document.querySelector(".store3").style.display = "block";
  document.querySelector(".store2").style.display = "none";
  document.querySelector(".store1").style.display = "none";
  document.querySelector(".aligarhinfo").style.display = "flex";
  document.querySelector(".ajmerinfo").style.display = "none";
  document.querySelector(".agrainfo").style.display = "none";
  document.querySelector("#changename").innerText = "Aligarh";

  if (city == 2) {
    document.querySelector(".cityarrow").style.border = "1px solid black";
    document.querySelector(".c2").style.animation =
      "res2 0.7s ease-in-out 0s 1";
    setTimeout(() => {
      document.querySelector(".c2").style.height = "0px";
      document.querySelector(".c2").style.animation =
        "re2 0.7s ease-in-out 0s 1";
    }, 650);
    document.querySelector(".cityarrow").style.borderLeft = "none";
    document.querySelector(".cityarrow").style.borderTop = "none";
    city = 1;
  }
});

let orderbtn = 0;
document.querySelector(".orderbtn").addEventListener("click", () => {
  orderbtn = 1;
  setTimeout(() => {
    document.querySelector(".orderbtn").style.background = "red";
  }, 300);
});
document.querySelector(".orderbtn").addEventListener("mouseover", () => {
  document.querySelector(".orderbtn").style.background = "darkslategray";
});
document.querySelector(".orderbtn").addEventListener("mouseout", () => {
  if (orderbtn == 1) {
    orderbtn = 0;
  } else {
    document.querySelector(".orderbtn").style.background = "red";
  }
});

document.getElementById("newstextone").addEventListener("mouseover", () => {
  document.getElementById("newstextone").style.color = "red";
});
document.getElementById("newstextone").addEventListener("mouseout", () => {
  document.getElementById("newstextone").style.color = "black";
});

document.getElementById("newstextonee").addEventListener("mouseover", () => {
  document.getElementById("newstextonee").style.color = "black";
});
document.getElementById("newstextonee").addEventListener("mouseout", () => {
  document.getElementById("newstextonee").style.color = "red";
});
