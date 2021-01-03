
// form element
const form = document.querySelector("#form");

//adding a submit event to the form element
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const errors = document.querySelector(".errors");
  const success = document.querySelector(".success");

  const formData = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  try {
    const newFormData = await fetch("/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const fetchedPost = await newFormData.json();

    console.log(fetchedPost);
    //   throw the errors to the frontend
    errors.textContent = fetchedPost.error;
    success.textContent = fetchedPost.success;
  } catch (error) {
    console.log(error);
  }
})
