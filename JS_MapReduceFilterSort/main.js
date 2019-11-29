const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

 //filter
// get 21 or older
//  const canDrink = ages.filter(function(age){
//      if(age >= 21){
//          return true;
//      }
//  })

// const canDrink = ages.filter(age => age>=21);

// Filter retail companies
//const retailCompanies = companies.filter(company => company.category==="Retail")
 
// Get 80s compainies
//const eightiesComps = companies.filter(company => (company.start>=1980 && company.start<1990))

// Get comps that lasted 10 years or more
//const compsLastedTenYears = companies.filter(company => (company.end - company.start >= 10))

 //map
// Create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// })

// Create array of comp names and start-end dates
//const comps = companies.map(company => `${company.name}  [${company.start} - ${company.end}]`)
// const comps = companies.map(function(company){
//     return `${company.name}  [${company.start} - ${company.end}]`;
// })

//Square root of ages
//const agesSqrt = ages.map(age => Math.sqrt(age));

//Sqrt and double of ages with two maps sequential
// const ageMap = ages
//                .map(age => Math.sqrt(age))
//                .map(age => age * 2)

 //sort
 //Sort comps by start year
//  const sortedComps = companies.sort(function(c1,c2){
//     if(c1.start > c2.start) return 1; else return -1;
//  })

//const sortedComps = companies.sort((c1,c2) => (c1.start>c2.start ? 1 : -1));

//sort ages
//const sortAges = ages.sort((a,b)=> a-b); //a-b for asc, b-a for desc ages

//reduce
//add ages
// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// }, 0);
//const ageSum = ages.reduce((total,age)=>(total+age),0)

//Get total years for all companies
//const totalYears = companies.reduce((total,company) => total + (company.end - company.start),0)

//Combine methods
// const combined = ages
// .map(age => age*2)
// .filter(age => age>=40)
// .sort((a,b) => a-b)
// .reduce((total,age)=>total+age,0)

console.log();

