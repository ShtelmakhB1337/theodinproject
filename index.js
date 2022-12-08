const object = {a: 1, b: 2, c: 3}

for (const property in object) {
    console.log(`${property} in ${object[property]}`)
}



const lol = [1, 2, 3, 4, 5]

for (const lmao in lol) {
    console.log(`${lmao} is a ${lol[lmao]} in array`)
}