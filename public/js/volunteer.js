const table = document.querySelector("table")


const createTableData = async () => {
//fetch the user details route end-point
const users = await  fetch("/volunteer/users")
const fetchedUsers = await users.json();

console.log(fetchedUsers) 
fetchedUsers.forEach(user => {
  const tr = document.createElement("tr")
  const td = document.createElement("td")

  tr.innerHTML = `
  <td>01</td>
     <td class=Id">#2293553</td>
  <td>${user.firstname} ${user.lastname}</td>
  <td>${user.email}</td>
  <td>${user.role}</td>
  <td>7/18/17</td>
  
  `

  table.appendChild(tr)                 
});    
  
}

createTableData()
