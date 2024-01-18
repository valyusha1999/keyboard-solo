const word = document.querySelector(".word");
let newWord = "";
let letters = [];
let i = 0;

const blockWords = ["cat", "dog", "draw", "color", "bird"];
function generate() {
    newWord = blockWords[Math.floor(Math.random() * blockWords.length)];

    const markup = newWord.split('').map(item => `<span>${item}</span>`).join('');
    word.innerHTML = markup;

    letters = word.querySelectorAll("span");
    i = 0;
}
generate();


document.addEventListener('keydown', function (event) {
    
    if (event.key === newWord[i]) {
        letters[i].className = "c";
        i++;
        if (i === newWord.length) {
            setTimeout(generate, 100);
        }
    } else {
        letters[i].className = "w";
    };
    
})

