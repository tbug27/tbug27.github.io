const title = document.getElementById("title")
const textOptions = [
    "If somethings not working check your chrome version!",
    "Fun fact! This site has been taken down 3 Time(s)",
    "Only tested on Chrome v114.0.5735.",
    "Join the discord server for new site URLs!",
    "Submit game suggestions in the discord server!",
    "Go to chrome://version to check your version!",
    "If the sites not updating clear your cache!",
    "School admins < literally anyone",
    "Javascript is overrated",
    "Updates... sometimes?",
    "Originally called PDFXPLOIT"
];

document.getElementById("randomtext").innerHTML = textOptions[Math.floor(Math.random() * textOptions.length)];

function changename(cb){
    if (cb.checked){
        title.innerHTML = "Universal UB"
    } else{
        title.innerHTML = "Uni UB"
    }
}

function refreshSplashMsg(){
    document.getElementById("randomtext").innerHTML = textOptions[Math.round(Math.random()*textOptions.length)]
}

const changelogelem = document.getElementById("changelog");
let changelogopen = false

function changelog(){
    if (changelogopen){
        changelogelem.style.opacity = 0
        changelogelem.style.transform = "translateY(9999px)"
        changelogopen = false
        return
    } else{
        changelogelem.style.opacity = 1
        changelogelem.style.transform = "translateY(0px)"
        changelogopen = true
    }
}

function aboutblank(){
    url = window.location
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function cloak(tocloak){
    localStorage.clear("cloak")
    if (tocloak == "clever"){
        localStorage.setItem("cloak", "clever");
    }
    if (tocloak == "drive"){
        localStorage.setItem("cloak", "drive");
    }
    if (tocloak == "docs"){
        localStorage.setItem("cloak", "docs");
    }
    if (tocloak == "classroom"){
        localStorage.setItem("cloak", "classroom");
    }
    if (tocloak == "reset"){
        localStorage.setItem("cloak", "reset");
    }
    updatecloak()
}

function openinaboutblank(){
    let abtab = document.getElementById("aboutblanktab").value
    url = abtab
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function openinnewtab(){
    let newtab = document.getElementById("newtab").value
    console.log(newtab)
    window.open(
        String(newtab),
        '_blank'
      );
}

function openincurrentwindow(){
    let newtab = document.getElementById("currenttab").value
    console.log(newtab)
    window.open(
        String(newtab),
        '_self'
      );
}