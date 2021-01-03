function page() {
  //event listener to open navigation
  const openNavigation = () => {
    const nav = document.querySelector(".nav-links-div");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
      nav.classList.add("add-navigation");
    });
  };
  openNavigation();

  //event listener to open navigation
  const closeNavigation = () => {
    const nav = document.querySelector(".nav-links-div");
    const remove = document.querySelector(".remove-nav");

    remove.addEventListener("click", () => {
      nav.classList.remove("add-navigation");
    });
  };
  closeNavigation();

  //event listener to open volunteer form
  const openVolunteer = () => {
    const v = document.querySelector(".volunteer");
    const v_f = document.querySelector(".volunteer-form");
    const body = document.querySelector("body");
    // const nav = document.querySelector(".navigation")
    const volunteerContainer = document.querySelector(".volunteer-container");

    v.addEventListener("click", () => {
      (body.style.overflow = "hidden"),
        (volunteerContainer.style.display = "block");
      volunteerContainer.style.display = "flex";
    });
  };
  openVolunteer();

  //event listener to close volunteer form
  const closeVolunteer = () => {
    const c = document.querySelector(".remove");
    const v_f = document.querySelector(".volunteer-form");
    const body = document.querySelector("body");
    const volunteerContainer = document.querySelector(".volunteer-container");

    c.addEventListener("click", () => {
      body.style.overflowY = "scroll";
      volunteerContainer.style.display = "none";
    });
  };
  closeVolunteer();

  //event listener to open navigation
  const clickOnLink = () => {
    const link = document.querySelectorAll("li");
    const nav = document.querySelector(".nav-links-div");

    link.forEach((li) => {
      li.addEventListener("click", function () {
        nav.classList.remove("add-navigation");
      });
    });
  };
  clickOnLink();

  // change the text in the span every 1.5sec
  const changeSpan = () => {
    const span = document.querySelector("span");

    const text = ["", "Gender.", "Religion.", "Tribe.", "Race."];

    span.innerHTML = text[Number(Math.ceil(Math.random() * 4))];
  };

  setInterval(changeSpan, 1500);
}

// form element
const form = document.querySelector("#v-form");

//adding a submit event to the form element
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const errors = document.querySelector(".errors");
  const success = document.querySelector(".success");

  const formData = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    phone_number: document.querySelector("#phone_number").value,
    date_of_birth: document.querySelector("#dob").value,
    occupation: document.querySelector("#occupation").value,
    state: document.querySelector("#state").value,
    volunteer_as: document.querySelector("#volunteer_as").value,
    about: document.querySelector("#about").value,
    gender: document.querySelector("#gender").value,
  };

  try {
    const newFormData = await fetch("/volunteer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const fetchedPost = await newFormData.json();

    // console.log(fetchedPost);
    //   throw the errors to the frontend
    errors.textContent = fetchedPost.error;
    success.textContent = fetchedPost.success;
  } catch (error) {
    console.log(error);
  }
});
page();
