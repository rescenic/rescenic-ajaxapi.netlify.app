//Callback Hell

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
          //console.log(request.responseText);
          const data = JSON.parse(request.responseText);
          callback(undefined, data); //JSON.parse() | JSON.stringify()
      } else if (request.readyState === 4) {
          //console.log("Tidak dapat mengambil data.");
          callback("Tidak dapat mengambil data.", undefined);
      }
  });

  request.open("GET", resource);
  request.send();
};

console.log(1);
console.log(2);

getTodos("assets/json/luigi.json", (err, data) => {
  console.log(data);
  getTodos("assets/json/mario.json", (err, data) => {
    console.log(data);
    getTodos("assets/json/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});
