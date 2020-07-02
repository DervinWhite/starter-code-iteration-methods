// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
//console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

//KATA 1:   Use the .filter() method
//Filter the users array to show only the users with an isActive property of true.

let isActiveElement = users.filter(user => user.isActive === true)
printKata(1, isActiveElement)
console.log(isActiveElement)

//KATA 2:  Use the .map() method
//Map over the users array to show only the email addresses of the users.

let emailAddressArray = users.map(user => user.email)
printKata(2, emailAddressArray)
console.log(emailAddressArray)

//KATA 3 Kata 3: Use the .some() method
//Check whether at least one user in the users array has a company property of "OVATION".

let companyPropertyOvationElement = users.some(user => user.company = "Ovation")
printKata(3, companyPropertyOvationElement)
console.log(companyPropertyOvationElement)


//KATA 4: Use the .find() method
//Find the first user in the array over the age of 38.

let firstUserOver38YearsOld = users.find(user => user.age > 38)
    printKata(4, firstUserOver38YearsOld)
console.log(firstUserOver38YearsOld)

//KATA 5: Use the .filter() and .find() methods
//Find the first user in the array over the age of 38 who is active.


let firstUserOver38YearsOldAndActive = users.filter(user => user.age > 38)
.find(user=>user.isActive===true)
printKata(5,firstUserOver38YearsOldAndActive)
console.log(firstUserOver38YearsOldAndActive)

//KATA 6: Use the .filter() and .map() methods
//Show the balance of every user in the array from the "ZENCO" company.

let BalanceofUsersFromZenco = users.filter(user=>user.company==="ZENCO")
.map (user=>user.balance)
printKata (6,BalanceofUsersFromZenco)
console.log(BalanceofUsersFromZenco)

//KATA 7:  Use the .filter() method with .includes() and the .map() method
//Show the age of every user with the "fugiat" tag.

let AgeofEveryUserWithFugiatTag = users.filter(user=> user.tags.includes("fugiat"))
.map(user=>user.age)


printKata(7,AgeofEveryUserWithFugiatTag)
console.log(AgeofEveryUserWithFugiatTag)
