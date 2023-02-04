//Fetch the api
//The api is not json, its is actually csv data
const earnings_calendar = "https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&horizon=3month&apikey=NYQ6Y3MD56WEE60B";

import pkg from 'scramjet';
const { StringStream } = pkg;
import pack from 'request';
const { get } = pack;

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
get(earnings_calendar)
    .pipe(new StringStream())
    .CSVParse()                                   // parse CSV output into row objects
    .consume(object => console.log("Row:", object))
    .then(() => console.log("success"));