
// Load the total number of reported cases
const getReportCount = async () => {
    try {
      const stats = await fetch("/report/count")
    const fetchedStats = await stats.json()
                     
    // console.log(fetchedStats)
    const reportStats = document.querySelector(".r_r")
    reportStats.textContent = fetchedStats   
    } catch (error) {
        console.log(error);
        
    }
   
}

getReportCount()


// load the total number of admins
const getAdminCount = async () => {
    try {
         const stats = await fetch("/admin/count")
    const fetchedStats = await stats.json()
                     
    // console.log(fetchedStats)
    const reportStats = document.querySelector(".admin")
    reportStats.textContent = fetchedStats
    } catch (error) {
        console.log(error);
        
    }
   
}

getAdminCount()


// Load the total numbers of volunteers
const getVolunteerCount = async () => {
    try {
        const stats = await fetch("/volunteer/count")
        const fetchedStats = await stats.json()
                         
        // console.log(fetchedStats)
        const reportStats = document.querySelector(".v")
        reportStats.textContent = fetchedStats
    } catch (error) {
        console.log(error)
    }
    
}

getVolunteerCount()

// const getReportCount = async () => {
//     const stats = await fetch("/report/count")
//     const fetchedStats = await stats.json()
                     
   // console.log(fetchedStats)
// }

// getReportCount()