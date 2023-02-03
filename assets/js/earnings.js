//Fetch the api
try{
    const res = await fetch("https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=NYQ6Y3MD56WEE60B");
    const data = await res.json();
    console.log(data)
} catch (e) {
    console.error(e);
}
