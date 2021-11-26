var game = {};

game.murderer = "??";

game['weapons'] = [{
        type: 'lasers',
        location: 'lab'
    },
    {
        type: 'andry cats',
        location: 'kitchen'
    }
];

game.name = [];
game.name[0] = 'Miss Teigne';
game.name.push({
    "name": "Miss",
    "skill": "Politics"
});

game.characters = {
    "name": "Jean-Massiet",
    "skill": "Politics"
};

console.log(typeof (game.characters));
console.log(typeof (game.name));

// game.characters.push({
//     "name": "lol-Massiet",
//     "skill": "Politics"
// });


array1 = ["a", "b", "c", "d", "e", "f", "g"];
array2 = ["1", "2", "3", "4", "5", "6", "7"];
array3 = [];

arrayLength = array1.length > array2.length ? array1.length : array2.length;

var arrayLength2;

if(array1.length > array2.length) {
    arrayLength2 = array1.length;
} else {
    arrayLength2 = array2.length;
}

for (i = 0; i < arrayLength; i++) {
    array3[array1[i]] = array2[i];
}

// array 