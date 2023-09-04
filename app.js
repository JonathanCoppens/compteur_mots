const words = ["Hello", "Garden", "Computer"]

let score = 0

/* let startSentence = prompt("Entrez les mots " + words) */

for(let i = 0; i < words.length; i++) {
        usersWord = prompt("Entrez le mot : " + words[i])
        if(usersWord === words[i]) {
            score++
            console.log(score);
        }
    }
    alert("Votre score est de " + score + " sur " + words.length)

if(score === 3) {
    alert("Le score parfait !")
}
else if(score === 2) {
    alert("Ah ! Presque !")
}
else{
    alert("Plutôt nul comme score...")
}