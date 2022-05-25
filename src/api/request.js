const https = require("https");

const app_id = "9c5bebb3";
const app_key = "f0e0b37d850ff978bf7b3fa672314e63";
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";
const options = {
   host: 'od-api.oxforddictionaries.com',
   port: '443',
   path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
   method: "GET",
   headers: {
     'app_id': app_id,
     'app_key': app_key
   }
 };
https.get(options, (resp) => {
  let body = '';
  resp.on('data', (d) => {
    body += d;
  });
  resp.on('end', () => {
    let parsed = JSON.stringify(body);
    console.log(parsed);
  });
});