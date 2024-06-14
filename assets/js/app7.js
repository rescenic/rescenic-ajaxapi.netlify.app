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

//Latihan Async Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
