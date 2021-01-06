const table = document.querySelector("table");

const createTableData = async () => {
  try {
    //fetch the users details route end-point
    const users = await fetch("/report/cases");
    const fetchedusers = await users.json();

    // console.log(fetchedusers)
    fetchedusers.forEach((users) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
  <td>001</td>
  <td class=Id">${users._id}</td>
  <td>${users.anonymous_name}</td>
  <td>${users.the_school_case_happened}</td>
  <td>${users.email}</td>
  <td>${users.date_of_report}</td>
  <td>${users.age_of_the_victim} years old</td>
  <td>${users.case_status}</td>
  <td>${users.victims_story}</td>
  `;
      table.appendChild(tr);
     
    });
  } catch (error) {
    console.log(error);
  }
};

createTableData();


