const leapYears = function(year) {
    const divByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const fourHun = year % 400 === 0;
    
    if (divByFour && (!isCentury || fourHun)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
