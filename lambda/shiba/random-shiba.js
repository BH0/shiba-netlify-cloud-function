const fetch = require("node-fetch"); 
// For more info, check https://docs.netlify.com/functions/build-with-javascript
module.exports.handler = async function(event, context) {
    console.log("queryStringParameters", event.queryStringParameters)
    const count = 10; 
    fetch('http://shibe.online/api/shibes?count='+count+'&urls=true&httpsUrls=true')
    .then(res => res.json())
    .then(json => {
        const shiba =  json[Math.floor(Math.random() * count)];
        console.log("Shiba: " + shiba);  
        return {
            // return null to show no errors
            statusCode: 200, // http status code
            body: JSON.stringify({
                shiba: shiba
            })
        }
    }); 
  }
  
  