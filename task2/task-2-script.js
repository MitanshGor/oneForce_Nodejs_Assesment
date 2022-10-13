const fetch = require("node-fetch");
var request = require("request");

temp_data = [];

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    temp_data = data.data;

    var first_user_nameStart_a = [];
    var id_arr_without_a = [];
    var id__wth_a = 0;
    //  letc find first user whose name starts with a
    for (var i of temp_data) {
      if (
        i.first_name.charAt(0) === "a" ||
        i.first_name.charAt(0) === "A" ||
        i.last_name.charAt(0) === "a" ||
        i.last_name.charAt(0) === "A"
      ) {
        id__wth_a = i.id;
        first_user_nameStart_a = i;
      } else id_arr_without_a.push(i.id);
    }

    // console.log(id_arr_without_a);
    if (
        id__wth_a != 0
    ) {
      first_user_nameStart_a.job_title = "boss";
      async () => {
        request(
          {
            url: "https://reqres.in/api/users/" + first_user_nameStart_a.id,
            method: "POST",
            json: true, // <--Very important!!!
            body: first_user_nameStart_a,
          },
          function (error, response, body) {
            console.log(response.data);
            console.log(body);
            console.log(error);
            // console.log(response.)
          }
        );
      };
    }
      async ()=>{
            for(var i  of id_arr_without_a)
                request({
                    url: "https://reqres.in/api/users/"+i,
                    method: "DELETE",
                    json: true,   // <--Very important!!!
                }, function (error, response, body){
                    console.log(response.data);
                    console.log(body)
                    console.log(error)
                    // console.log(response.)
                });
      }
  })
  .catch((err) => console.log(err));
