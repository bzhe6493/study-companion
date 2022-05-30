import axios from "axios";

async function getWordInfo(word) {
  var config = {
    method: "get",
    url: "https://od-api.oxforddictionaries.com/api/v2/thesaurus/en-us/" + word,
    headers: {
      app_id: "9c5bebb3",
      app_key: "f0e0b37d850ff978bf7b3fa672314e63",
    },
  };

  var response = await axios(config);
  return response.data;
}

export default getWordInfo;
