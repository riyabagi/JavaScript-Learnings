let helloWorldPromise  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Wold!");
        }, 2000);
});

helloWorldPromise.then(message => {
    console.log(message);
})