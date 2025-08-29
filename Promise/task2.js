// Chaining

async function getuser(){
    return new Promise(resolve => {
        setTimeout(() => resolve("User data"), 1000);
    });
}
async function getorders(){
    return new Promise(resolve => {
        setTimeout(() => resolve("order data"), 1000);
    });
}

getuser().
then(user => {
    console.log(user);
    return getorders();
})
.then(orders => console.log(orders))
.catch(e => console.log(e));