function page(){




//add an event listener to the report a case butoon
// const showReportForm = ()=>{
//     const reportForm = document.querySelector(".report")
//     const form = document.querySelector(".report-case")
//     const body = document.querySelector("body")
//     const nav = document.querySelector(".navigation")
//     const btns = document.querySelector(".registration-btn")
    

//     reportForm.addEventListener("click",()=>{
//         form.style.display = "block"
//         btns.style.display = "none"
//         body.style.overflow = "hidden"
//         nav.style.display = "none"
//     })

// }
// showReportForm()


//add an event listener to the remove the report a case form
const removeReportForm = ()=>{
    const form = document.querySelector(".report-case")
    const btns = document.querySelector(".registration-btn")
    const body = document.querySelector("body")
    const remove = document.querySelector(".cancel-report")
    const nav = document.querySelector(".navigation")

    remove.addEventListener("click",()=>{
        form.style.display = "none";
        btns.style.display = "block";
        btns.style.display = "flex";
        nav.style.display = "block"
        nav.style.display = "flex"
        body.style.overflowY = "scroll"
    })
}
removeReportForm()



//add an event listener to the remove the volunteer form
const removeVolunteerForm = ()=>{
    const reportForm = document.querySelector(".report")
    const form = document.querySelector("#report-form")
    

    reportForm.addEventListener("click",()=>{
        form.style.display = "block"
    })

}
removeVolunteerForm()


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


// change the text in the span every 1.5sec
const changeSpan = () => {
   const span = document.querySelector("span");
 
   const text = ["","Gender.","Religion.","Tribe.","Race."]
    
   span.innerHTML = text[Number(Math.ceil(Math.random() * 4))]

}

setInterval(changeSpan,1500)


}
page()
