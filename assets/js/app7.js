//Latihan Async Await

const getTodos = async () => {
    const response = await fetch("assets/json/luigi.json");
    const data = await response.json();
    //console.log(data);
    return data;
};

console.log(1);
console.log(2);

getTodos()
.then((data) => console.log("resolved: ", data))
.catch((err) => {
  console.log("rejected: ", err.message);
})

console.log(3);
console.log(4);
