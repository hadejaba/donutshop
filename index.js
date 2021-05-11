// create an array of about 10 preditions
var fortunes = ["You will meet your soulmate",
    "You will die",
    "You will start a new job",
    "You will win the lottery",
    "You will get engaged",
    "An exciting opportunity lies ahead",
    "You will recieve wise advice",
    "You will find great fortunes in unexpected places",
    "You will move to a new country",
    "You will get a raise"
];

function tellFortune() {
    var randomFortune = Math.floor(Math.random() * fortunes.length);
    document.getElementById('btn').innerHTML = fortunes[randomFortune];
};
