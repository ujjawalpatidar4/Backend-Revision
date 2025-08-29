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

async function getdata(){
    try{
        const user = await getuser();
        console.log(user);

        const orders = await getorders();
        console.log(orders);
    }
    catch(error){
        console.log(error);
    }
}

getdata();