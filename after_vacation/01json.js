const user = '{"name" : "saurabh","age":20}'
const jsonObj = JSON.parse(user);
console.log(jsonObj.name)


const data = {
    name : "saurabh",
    age : 20

}

const datastring = JSON.stringify(data)
console.log(datastring)


