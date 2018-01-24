
function validate(){
    // username
  let un =  document.getElementById('username').value;
  console.log("username" + " : "+ un);
  if (un.length<5 || un.length>12){
    console.log("username per trumpas arba per ilgas");
    return;
  }
  let found=false;
  for (var i = 0; i < un.length; i++){
    if (un[i]>="0" && un[i]<="9"){
        found=true;
        break;
    }
  }
  if (!found) {
    console.log("klaida, nera skaiciaus");
  }

    // password
  let up = document.getElementById('mypassword').value;
  console.log("password" + " : " + up);
  if(up.length<5 || up.length>12){
    console.log("passwordas per trumpas arba per ilgas");
    return;
  }
  found=false;
  for (var i = 0; i < up.length; i++) {
    if ( up[i]==="!" || up[i]==="." || up[i]==="," || up[i]===";" || up[i]==="|" ||
         up[i]==="!" || up[i]==="?" || up[i]==="[" || up[i]==="]" || up[i]==="{" ||
         up[i]==="}" || up[i]==="/" || up[i]==="\\" || up[i]==="*" ) {
      found=true;
      break;
    }
  }
  if (!found) {
    console.log("klaida,nera simbolio");
  }
  //name

  let name1=document.getElementById("name").value;
  console.log("Name" + " : " + name1);
  let s=/^[A-Z][a-z0-9_\-]{4,11}$/;
  if (!s.test(name1)) {
    console.log("Vardas ne is didziosios raides");
    return;
  }

  let ad=document.getElementById("ad").value;
  console.log("Address" + " : " + ad);

  let zip=document.getElementById('zip').value;
  console.log("ZIP CODE" + " : " + zip);
  let r1=/^[0-9]*$/;
    if (!r1.test(zip)) {
      console.log("Zipas yra ne skaiciai");
      return;
    }

    let m=document.getElementById("m").value;
    console.log("MAILAS" + " : " + m);
    let r2=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!r2.test(m)) {
      console.log("Incorrect mail syntax");
      return;
}
let man=document.getElementById("sex1").checked;
let woman=document.getElementById("sex2").value;
let x=0;
console.log(man);
/*
if (man) {
  console.log("lytis pasirinkta");
  return;
}

let eng=document.getElementById('l1').value;
let oth=document.getElementById('l2').value;
if (eng || oth) {
  console.log("language chosen");
  return;
}

}
*/
