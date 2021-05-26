var btnRemove = Array.from(document.getElementsByClassName("remove"));
var Price=Array.from(document.getElementsByClassName("price"));
var btnMoins=Array.from(document.getElementsByClassName("btnmoins"));
var Total=document.getElementById("total");
var counter=Array.from(document.getElementsByClassName("quantite"));
var buttonsPlus=Array.from(document.querySelectorAll("#btnplus"));
var IconHeart = Array.from(document.getElementsByClassName("far fa-heart"));
//Eventslisteners
//for (let i = 0; i < buttonsPlus.length; i++) {
  //buttonsPlus[i].addEventListener("click", incrementation);
//}
//for (let i = 0; i < btnMoins.length; i++) {
  //btnMoins[i].addEventListener("click", decrementation);
//}

// functions declarations
//function incrementation(event) {
  //event.target.previousElementSibling.innerHTML =
  //Number(event.target.previousElementSibling.innerHTML) + 1;
//}

//function decrementation(event) {
 // if (Number(event.target.nextElementSibling.innerHTML) > 0){
    //  event.target.nextElementSibling.innerHTML =
     // Number(event.target.nextElementSibling.innerHTML) - 1;
  //}
//}
for (let i = 0; i < buttonsPlus.length; i++) {
    buttonsPlus[i].addEventListener("click", function () {
      counter[i].innerHTML = Number(counter[i].innerHTML) + 1;
      CalculTotal();
    });


    }
  for (let i=0; i<btnMoins.length; i++){
    btnMoins[i].addEventListener("click" , function(){
      if(Number(counter[i].innerHTML)>0){
        
        counter[i].innerHTML= Number(counter[i].innerHTML)-1 ;
          CalculTotal();
        
      }
      });
      }
    function CalculTotal() {
        let Price = Array.from(document.getElementsByClassName("price"));
      let counter = Array.from(document.getElementsByClassName("quantite"));
      
        let sum = 0;
          for (let i = 0; i < Price.length; i++) {
            sum += Number(Price[i].innerHTML)*Number(counter[i].innerHTML);
          }
          Total.innerHTML = sum;
        }


    for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
  Section[i].remove();
    CalculTotal();
});
}
for (let i = 0; i < IconHeart.length; i++) {
  IconHeart[i].addEventListener("click", function () {
    if(  IconHeart[i].classList.contains('.....')===true){
      IconHeart[i].classList.remove('.....')}
      else{
      IconHeart[i].classList.add('.....')
    IconHeart[i].classList.toggle("fas");
      }
    })
  }