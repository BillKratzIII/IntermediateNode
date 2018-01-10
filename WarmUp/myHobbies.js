const hobbies = [
    { name: 'fishing', lengthInYearsHobby: 28 },
    { name: 'cooking', lengthInYearsHobby: 10 },
    { name: 'gardening', lengthInYearsHobby: 4 }
];

function printHobbyInfo( hobby ) {

    console.log( ` I have practiced ${ hobby.name } for ${ hobby.lengthInYearsHobby } years ` );

};

function printAllHobbies() {

    hobbies.forEach( hobby => {

        printHobbyInfo( hobby );

    });

};

function sortByYearsPracticed( a, b ) {

    return a.lengthInYearsHobby - b.lengthInYearsHobby;

};

function sortByHobbyName( a, b ) {

    if ( a.name < b.name ) {

        return -1;

    } else if ( a.name > b.name ) {

        return 1;

    } else {

        return 0;

    }

};

console.log('\nIn order of array index (no sort):');
printAllHobbies();
console.log('\nIn order of years practiced:');
hobbies.sort( sortByYearsPracticed );
printAllHobbies();
console.log('\nIn order of hobby names (alphabetical):');
hobbies.sort( sortByHobbyName );
printAllHobbies();
