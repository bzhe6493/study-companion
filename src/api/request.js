import axios from "axios";

async function getWordInfo(word) {
  var config = {
    method: "get",
    url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
  };

  var response = await axios(config);
  return response.data;
}

export default getWordInfo;
