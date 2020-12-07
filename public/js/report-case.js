

const getReports = async () =>{
   const reports = await fetch("/report-case/cases")
   const fetchedReports = await reports.json()

   console.log(fetchedReports)
}
getReports()