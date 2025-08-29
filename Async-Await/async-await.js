async function getUser (id) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(id>0) resolve("User Found");
            else reject("User not found");
        },2000);
    })
}

getUser(1).then(response => console.log(response)).catch(response => console.log(response));

