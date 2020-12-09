function page(){

//event listener to open navigation
const openNavigation = ()=>{
    const nav = document.querySelector(".nav-links-div")
    const burger = document.querySelector(".burger")
    

  burger.addEventListener("click",()=>{
        nav.classList.add("add-navigation")
    })

}
openNavigation()

//event listener to open navigation
const closeNavigation = ()=>{
    const nav = document.querySelector(".nav-links-div")
    const remove = document.querySelector(".remove-nav")
    

  remove.addEventListener("click",()=>{
        nav.classList.remove("add-navigation")
    })

}
closeNavigation()


//event listener to open navigation
const clickOnLink=()=>{
    const link = document.querySelectorAll("li")
    const nav = document.querySelector(".nav-links-div")

    link.forEach(li=>{
        li.addEventListener("click",function(){
        nav.classList.remove("add-navigation")
      })
    })
    

}
clickOnLink()

// change the text in the span every 1.5sec
const changeSpan = () => {
   const span = document.querySelector("span");
 
   const text = ["","Gender.","Religion.","Tribe.","Race."]
    
   span.innerHTML = text[Number(Math.ceil(Math.random() * 4))]

}

setInterval(changeSpan,1500)


}
page()
