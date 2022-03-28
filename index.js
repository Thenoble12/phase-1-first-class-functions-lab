const returnFirstTwoDrivers = (driverArr) => driverArr.slice(0,2);

const returnLastTwoDrivers = (driverArr) => driverArr.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {return (value) => fareMultiplier * value};    

const fareDoubler = (value) => value * 2;

const fareTripler = (value) => value * 3;

const selectDifferentDrivers = (driverArr, arrFunction) =>  arrFunction(driverArr);