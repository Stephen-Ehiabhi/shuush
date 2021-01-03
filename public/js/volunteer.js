const table = document.querySelector("table");

const createTableData = async () => {
  try {
    //fetch the user details route end-point
    const users = await fetch("/volunteer/users");
    const fetchedUsers = await users.json();

    fetchedUsers.forEach((user) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");

      tr.innerHTML = `
  <td class="id">${user._id}</td>
  <td class="full">${user.firstname} ${user.lastname}</td>
  <td class="email">${user.email}</td>
  <td>${user.phone_number}</td>
  <td>${user.volunteer_as}</td>
  <td>${user.occupation}</td>
  <td>${user.gender}</td>
  <td>${user.date_of_registration}</td>
  
  `;

      table.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
};

createTableData();
