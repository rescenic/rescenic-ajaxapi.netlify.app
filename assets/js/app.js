//async code & callback

const getTodos = (callback) => {
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

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log("callback fired!!");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
