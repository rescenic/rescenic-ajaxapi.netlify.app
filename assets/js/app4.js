// Latihan Promise

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch data
        resolve("some data");
        // reject("some error");
    });
};

getSomething().then(
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    }
);
