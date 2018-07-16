console.log('a');

setTimeout(() => console.log('b'), 0);

const promise = new Promise((resolve, reject) => reject());

promise
    .then(() => {
        console.log('c');
    })
    .catch(err => {
        console.log(err);
    });

/*result
a
c
b
*/
