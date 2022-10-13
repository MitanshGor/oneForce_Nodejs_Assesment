var url = require("url");
const axios = require("axios");
const cache = require("./cache.json");


exports.getString = (req, res) => {

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);
  try {
    
    //  fetch parameter number from url 
    var number = parseInt(query.number);
    var number_temp = number;

    //  check if number is valid for operation
    if (number == null || number == "") res.json({ message: "Invalid Number" });
    else {
      var string = "";

    //    if number already present in cache then get number from cache
      if (Object.keys(cache).includes("" + number))
        res.json({
          FetchedFrom: "Cache",
          number: number_temp,
          output: cache[number],
        });
      else {        // if number not in cache then create operation on number and add number to cache
        while (number != 0) {
          if (number % 5 == 0 && number % 3 == 0) string = string + "FixBuz ";
          else if (number % 5 == 0) string = string + "Buz ";
          else if (number % 3 == 0) string = string + "Fiz ";
          else string = string + number + " ";
          number = number - 1;
        }
        cache[number_temp] = string;
        console.log(cache);
        console.log(Object.keys(cache).includes("1"));
        res.json({
          FetchedFrom: "Calculated",
          number: number_temp,
          output: string,
        });
      }
    }
  } catch (e) {
    //  check for any exceptions
    res.json({ message: "Invalid Number" });
  }
};
