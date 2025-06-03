const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Pour tester 
myPromise.then(result => console.log(result));
