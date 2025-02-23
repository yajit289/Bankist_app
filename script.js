const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');



  const displayMovements= function(movements){
    movements.forEach(function(mov,i){

      const type= mov>0 ? "deposit":"withdrawal";

      const html=
      
      `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`

      containerMovements.insertAdjacentHTML("afterbegin" , html)

    })  
  }
 // displayMovements(account1.movements)
  const calcuDisplayBalance= function(movements){
    const balance= movements.reduce((acc,mov)=>acc+mov,0);
    labelBalance.textContent=`${balance} RS`
  }
  //calcuDisplayBalance(account1.movements)
  const calcDiaplaySummary= function(movements){
    const incomes= movements.filter(mov=>mov>0)
      .reduce((acc,mov)=>acc+mov,0)
    labelSumIn.textContent=`${incomes}`
    const outIncomes= movements.filter(mov=>mov<0)
      .reduce((acc,mov)=>acc+mov)
    labelSumOut.textContent=`${outIncomes}`
    const interest= movements.filter(mov=>mov>0).map(deposit=>(deposit*1.2/100)).reduce((acc,int)=>acc+int,0)
    labelSumInterest.textContent=`${interest}`
  }
  //calcDiaplaySummary(account1.movements)
  const createUserNames=function(accs){
   accs.forEach(function(acc){
      acc.userName= acc.owner.toLowerCase().split(' ').map(function(name){
      return name[0]; }).join('')
    })
  }
  createUserNames(accounts)
  console.log(createUserNames)

  //event Handlers

  let currentAccount;

  btnLogin.addEventListener('click',function(e){
    e.preventDefault()
    console.log("login")
   currentAccount=accounts.find(acc=> acc.userName===inputLoginUsername.value)
   console.log(currentAccount);
   if(currentAccount?.pin===Number(inputLoginPin.value)){

    //display ui message

    labelWelcome.textContent= `Welcome Back,${ currentAccount.owner.split('')[0]}`

    //displau ui
    containerApp.style.opacity=100
    //display movements
    displayMovements(currentAccount.movements) 
    //display balance
    calcuDisplayBalance(currentAccount.movements)
    //display  summary
    calcDiaplaySummary(currentAccount.movements)

    // clear input fields

    inputLoginUsername.value=inputLoginPin.value=""
    inputLoginPin.blur()

  

    console.log("LogIN")

   }
   
  })







const eurToUsd=1.1;
/*const totalDeposit=movements.filter(mov=>mov>o)
  .map(mov=> mov*eurToUsd)
  .reduce((acc, mov)=>acc+mov,0)

console.log(totalDeposit)

const newfirstWithdrawl= movements.find(mov=>mov<0)
console.log(newfirstWithdrawl)*/



  /*const checkDogs= function(dogsJulia,dogsKates){
    const dogsJuliaCorrected= dogsJulia.slice()
    dogsJuliaCorrected.splice(0,1)
    dogsJuliaCorrected.splice(-2)

    const dogs=dogsJuliaCorrected.concat(dogsKates)

    console.log(dogs)

    dogs.forEach(function(dogs,i){

      if(dogs>=3){
        console.log(`Dog Number ${i+1} is Adult`)
      }
      else{
        console.log(`Dog Number ${i+1} is Puppy`)
      }

    })

  }
  checkDogs([3,5,2,12,7],[4,1,15,8,3])*/
  

  /* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
const dogages=[5,2,4,1,15,8,3] 
const dogages2=[16,6,,10,5,6,1,4] 

const calcAverageHumanAge= function(ages){
  const humanAge=[];
  if(ages<=2){
    humanAge.push(2*age)
  }

}*/


































  
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // LECTURES
  
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/*





//slice method
  const arr1=[1,2,3,4,5]
  console.log(arr1.slice(2))
  console.log(arr1.slice(2,4))
  console.log(arr1.slice(-2))
  console.log(arr1.slice(-1))
  console.log(arr1.slice(1,-2))
//splice method

console.log(arr1.splice(2))
console.log(arr1)

//reverse method
 const arr2=["t","i","j","a"]
 arr2.reverse()
 console.log(arr2)

// concat method

const letter= arr1.concat(arr2)
console.log(letter)

//join
console.logl(letter.join("-"))


//const arr3 = [23,33,44]


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for(movement of movements){
    if(movement>0){
        console.log(`You Deposited ${movement}`)
    }
    else{
        console.log(`You withdraw ${movement}`)
    }
}

console.log("-----FOR EACH----")

movements.forEach(function(movement){

    if(movement>0){
        console.log(`You Deposited ${movement}`)
    }
    else{
        console.log(`You withdraw ${movement}`)
    }

})


const euroToUsd=1.1;
const movmentsToUsd=movements.map(function(mov){
  return mov*euroToUsd
})

console.log(movements);
console.log(movmentsToUsd);*/


/*const withdrawls= movements.filter(function(mov){
  return mov<0
})
console.log(withdrawls)*/


/*const balance= movements.reduce(function(acc,crr,i,arr){
  console.log(`iteration ${i}:${acc}`)
  return acc+crr;
},100)
console.log(balance)*/
