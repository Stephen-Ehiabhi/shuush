const table = document.querySelector("table");

const createTableData = async () => {
  try {
    //fetch the user details route end-point
    const users = await fetch("/admin/users");
    const fetchedUsers = await users.json();

     console.log(fetchedUsers)
    fetchedUsers.forEach((user) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");

      tr.innerHTML = `
  <td>${user.id}</td>
     <td class=Id">${user._id}</td>
  <td>${user.firstname} ${user.lastname}</td>
  <td>${user.email}</td>
  <td>${user.role}</td>
  <td>${user.date_of_registration}</td>
  
  `;

      table.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
};

createTableData();

function openAdmin() {
  const addAddmin = document.querySelector(".add_user");
  const form = document.querySelector(".admin_form_container");

  function add() {
    form.style.display = "block";
    form.style.display = "flex";
  }

  addAddmin.addEventListener("click", add);
}
openAdmin();

function closeAdmin() {
  const removeAdmin = document.querySelector(".remove");
  const form = document.querySelector(".admin_form_container");

  function add() {
    form.style.display = "none";
  }

  removeAdmin.addEventListener("click", add);
}
closeAdmin();

const loadAdmin = () => {
  // form element
  const form = document.querySelector("form");

  //adding a submit event to the form element
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const errors = document.querySelector(".errors");
    const success = document.querySelector(".success");

    const formData = {
      id: document.querySelector("#id").value,
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    try {
      const newFormData = await fetch("/admin/register", {
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
  });
};
loadAdmin();
