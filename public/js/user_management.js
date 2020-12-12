const table = document.querySelector("table")


const createTableData = async () => {
  try {
    //fetch the user details route end-point
const users = await  fetch("/admin/users")
const fetchedUsers = await users.json();

// console.log(fetchedUsers) 
fetchedUsers.forEach(user => {
  const tr = document.createElement("tr")
  const td = document.createElement("td")

  tr.innerHTML = `
  <td>${user.id}</td>
     <td class=Id">${user._id}</td>
  <td>${user.firstname} ${user.lastname}</td>
  <td>${user.email}</td>
  <td>${user.role}</td>
  <td>${user.date_of_registration}</td>
  
  `

  table.appendChild(tr)                 
});    
  
  } catch (error) {
    console.log(error);
    
  }

}

createTableData()
