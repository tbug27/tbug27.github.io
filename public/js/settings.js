let hash = window.top.location.hash;
let optionElements = [];

function updateElements(){

    let settingsIframe = document.getElementById('settingsIframe')

    if (hash){

        window.document.getElementById(window.top.location.hash.replace('#','')).setAttribute('active','true')

        settingsIframe.src = ""

        settingsIframe.src = `/pages/settings/${hash.replace('#','')}.html`
    }
}

window.addEventListener('DOMContentLoaded',()=>{

    document.querySelectorAll('[active="false"]').forEach((option)=>{

        optionElements.push(option)
        
        option.addEventListener('click',()=>{
            //gts all active elements, sets them to inactive
            document.querySelectorAll('[active="true"]').forEach((oldActiveElem)=>{
                oldActiveElem.setAttribute('active','false');
            })

            //sets clicked element to active
            option.setAttribute('active','true')

            //sets url to the specific option
            window.top.location.hash = option.id
        })
    })

    updateElements()
    
})

window.top.addEventListener('hashchange',(e)=>{
    //set hash to the new hash
    hash = window.top.location.hash

    updateElements()
})