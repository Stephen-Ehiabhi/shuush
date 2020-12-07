

const getStats = async () => {
    const stats = await fetch("/report-case/count")
    const fetchedStats = await stats.json()
                     
    console.log(fetchedStats)
}

getStats()