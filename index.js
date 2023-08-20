const array = [
    {year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]


//test 1 

function superbowlWin(records) {
    const winningRecord = records.find(array => array.result === "W");
    return winningRecord ? winningRecord.year : undefined;
}

console.log(superbowlWin(array)); 
