const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()

function student1haiku()
{
    return["mannen zijn gay","ik ben gay","iedereen is gay"]
}

function basicHaiku()
{

    return ["ik kan dit niet","We saw a batman descending","On a day in spring."]

    return ["Toward those short trees","We saw a batman descending","the bismarck got suck."]

}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()