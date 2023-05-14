const { response } = require("express");

const data = {
    name : 'Rajiv Shaha',
    email : 'Rajshaha@gmail.com',
    phone : '982-675-2222'
};

fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})

.then(response =>{
    if(response.ok) {
        console.log('Data inserted successfully');
    } else {
        console.error('Data not inserted');
    }
})

.catch(error =>{
    console.error(error);
});