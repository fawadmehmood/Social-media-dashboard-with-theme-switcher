const toggle =  document.querySelector(".toogle");
const circle = document.querySelector(".toogle__circle");
const wrapper = document.querySelector(".wrapper");
const topBackground = document.querySelector(".top_background");
const whiteTexts = document.querySelectorAll(".dark_white");
const cards  = document.querySelectorAll(".card");

toggle.addEventListener("click", changeTheme);
toggle.addEventListener("keyup", function(event){;
        if (event.code === 'Enter') {
                changeTheme();
              }
});




function changeTheme(){
    circle.classList.toggle("move");

    Array.from(whiteTexts).map((whiteText)=>{
                 whiteText.classList.toggle("text__dark");
    });

    Array.from(cards).map((card)=>{
              card.classList.toggle("card__dark");
    });


    wrapper.classList.toggle("wrapper__dark");
    topBackground.classList.toggle("top_background__dark");
    if(circle.classList.contains("move")){
        console.log("contains move");
        Array.from(cards).map((dard)=>{
         
  });
    }
else{
  
}

}