//Latihan Promise

const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            //console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                //console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                //console.log("Tidak dapat mengambil data.");
                reject("Error getting resource")
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

getTodos("assets/json/luigi.json")
  .then((data) => {
    console.log("promise resolved 1: ", data);
    return getTodos("assets/json/mario.json");
  })
  .then((data) => {
    console.log("promise resolved 2: ", data);
    return getTodos("assets/json/shaun.json");
  })
  .then((data) => {
    console.log("promise resolved 3: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });