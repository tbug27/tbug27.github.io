let messages = [
    "Just a moment while we set everything up...",
    "Inspo from Space and Plexile Arcade",
    "Thank you to everyone who helped me make this, yk who u are :D",
    "Thanks for using the site!",
    "Stack Overflow best girl :3",
    "Join the discord! (plz :D)",
    "To suggest a game, make a suggestion in the discord!",
    "If somethings down, make a bug report in the discord!",
    "This took a lot longer than it should've 😭",
    "Damn, I suck ass at coding 😭🙏"
]

let randomIndex = Math.floor(messages.length * Math.random())

const loaderText = document.getElementById('loader-text');
loaderText.innerHTML = messages[randomIndex]

if (localStorage.getItem('load-enabled') == 'true'){
    window.addEventListener('load',()=>{
        const loader = document.getElementById('loader');
        window.setTimeout(()=>{
            loader.style.transition = "0.2s"
            loader.style.opacity = 0
            if(loader){window.setTimeout(()=>{loader.remove()},200)}
        })
    })
} else{
    document.getElementById('loader').remove();
}