// Load the total number of reported cases
const getTotalReportCount = async () => {
  try {
    const stats = await fetch("/report/totalcount");
    const fetchedStats = await stats.json();
  console.log(fetchedStats)
   // const reportStats = document.querySelector(".r_r");
   // reportStats.textContent = fetchedStats;
  } catch (error) {
    console.log(error);
  }
};
getTotalReportCount();

// load the total number of admins
const getAdminCount = async () => {
  try {
    const stats = await fetch("/admin/count");
    const fetchedStats = await stats.json();

    // console.log(fetchedStats)
    const reportStats = document.querySelector(".admin");
    reportStats.textContent = fetchedStats;
  } catch (error) {
    console.log(error);
  }
};
getAdminCount();

// Load the total numbers of volunteers
const getVolunteerCount = async () => {
  try {
    const stats = await fetch("/volunteer/count");
    const fetchedStats = await stats.json();

    const reportStats = document.querySelector(".v");
    reportStats.textContent = fetchedStats;
  } catch (error) {
    console.log(error);
  }
};
getVolunteerCount();

const getPendingReportCount = async () => {
    const stats = await fetch("/report/total_pending")
    const fetchedStats = await stats.json()

  console.log(fetchedStats)
  const reportStats = document.querySelector(".r_u");
 // reportStats.textContent = fetchedStats;
 
}
getPendingReportCount()

const getRespondedReportCount = async () => {
  const stats = await fetch("/report/total_responded")
  const fetchedStats = await stats.json()

console.log(fetchedStats)
const reportStats = document.querySelector(".r_r");
//reportStats.textContent = fetchedStats;

}
getRespondedReportCount()
