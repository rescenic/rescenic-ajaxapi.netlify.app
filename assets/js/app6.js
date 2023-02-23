//Latihan Fetch

fetch("assets/json/luigi.json")
.then((response)=>{
  console.log(response);
  return response.json();
})
.then((data1) => {
  console.log(data1);
  return fetch("assets/json/mario.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data2) =>{
    console.log(data2);
    return fetch("assets/json/shaun.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data3)=>{
      console.log(data3);
    })
  })
})
.catch((err)=>{
  console.log(err);
});