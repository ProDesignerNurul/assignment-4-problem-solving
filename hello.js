// -------------------------------------------1
// Problem Solving Number 1 

function radianToDegree ( radian ) {
    if(typeof radian === 'number') {
        const degree = radian * 57.2958;
        return degree.toFixed(2);
    }
    else {
        return 'Give Me A Number';
    }
}

// Call Function
// let result = radianToDegree(25);
// console.log(result);




// -------------------------------------------2
// Problem Solving Number 2

function isJavaScriptFile (fileName) {
    
    if (typeof fileName === 'string') {
        if (fileName.includes('app.js')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please Enter A File Name";
    }  
}


// Call Function
// const extentionName = isJavaScriptFile('mokbul.js');
// console.log(extentionName);





// --------------------------------------------3
// Problem Solving Number 3

function oilPrice (oilQuantity, petrolQuantity, diselQuantity) {
    if (typeof oilQuantity !== 'number') {
        return 'Please Enter Your First Paremeter Value Number'
    }
    else if (typeof petrolQuantity !== 'number') {
        return 'Please Enter Your Second Paremeter Value Number';
    }
    else if (typeof diselQuantity !== 'number'){
        return 'Please Enter Your Third Paremeter Value Number';
    }
    const perLitrOil = 114;
    const perLitrePetrol = 130;
    const perLitreDisel = 135;

    const oil = oilQuantity * perLitrOil;
    const petrol = petrolQuantity * perLitrePetrol;
    const disel = diselQuantity * perLitreDisel;

    const totalCost = oil + petrol + disel;
    
    return totalCost;
    
}


// Call Function
// const totalCost = oilPrice(0, 2, 3);
// console.log(totalCost);





// ---------------------------------------------------4
// Problem Solving Number 4

function publicBusFare (people) {
    
    if (typeof people === 'number') {
        let perBus = 50;
        let perMicroBus = 11;
        let reminingBusPeople = people % perBus;
        let microBusPeople = reminingBusPeople % perMicroBus;
        let publicBusPeople = microBusPeople;
        let publicBusPeopleCost = 250;
        let totalLocalCost = publicBusPeople * publicBusPeopleCost;
        return totalLocalCost;
    }
    else {
        return 'Give Me People Number';
    }
}


// Call Function
// const public = publicBusFare(365);
// console.log(public);





// ------------------------------------------------------5
// // Problem Solving Number 5

const friendsOne = {name: 'jahangir alam', address: 'sylhet', friend: 'nurul amin'};
const friendsTow = {name: 'nurul amin', address: 'sylhet', friend: 'jahangir alam'};    


function isBestFriend (friendsNameOne, friendsNameTow) {
    if (friendsNameOne.name === friendsNameTow.friend && friendsNameTow.name === friendsNameOne.friend) {
            return true;
        }
        else if (typeof friendsNameOne.name !== 'string' || typeof friendsNameTow.friend !== 'string' || typeof friendsNameTow.name !== 'string' || typeof friendsNameOne.friend !== 'string') {
            return 'Enter A Name';
        }
        else {
            return false;
        }
    
}


// Call Function
// const result1 = isBestFriend(friendsOne, friendsTow);
// console.log(result1);