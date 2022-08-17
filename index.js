const animateCSS = (element, animation, endFunction = undefined) => new Promise((resolve, reject) => {
    const prefix = "animate__"
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        if (endFunction != undefined){
            endFunction()
        }
        resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

let tooltip;


addEventListener('DOMContentLoaded', (event) => {
    // constants
    const discord_popout = document.querySelector("#discord-popout")
    const discord_toggle = document.querySelector("#discord-toggle")

    // Hide discord popout by default
    let discord_popout_visible = false;
    discord_popout.classList.add("hidden")

    // Toggle showing with button, with fancy fade animations
    discord_toggle.addEventListener("click", (event) => {
        event.preventDefault()
        discord_popout_visible = !discord_popout_visible;
        if (discord_popout_visible) {
            discord_popout.classList.remove("hidden")

            animateCSS("#discord-popout", "fadeInDown")
        } else {        
            animateCSS("#discord-popout", "fadeOutUp", ()=>{
                discord_popout.classList.add("hidden")
            })
        }
    })

    // Queries Online Status and Custom Status from lanyard API
    const updateStatus = () => {
        fetch("https://api.lanyard.rest/v1/users/280411966126948353").then((response) => response.json()).then((data) => {
            // ----- set color for online status ------
            // lambda function for changing color of indicator easily
            const online_color = (color) => {discord_popout.querySelector("#discord-online-color").style["background-color"] = color}
            // set color of indicator according to the online status
            switch(data["data"]["discord_status"]) {
                case "online": online_color("green"); break;
                case "idle": online_color("yellow"); break;
                case "dnd": online_color("red"); break;
                case "offline": online_color("dark gray"); break;
            }

            // ----- set custom status text -----
            let custom_status
            // try and read where the status text will be if it exists
            try { custom_status = data["data"]["activities"].find(({type}) => type == 4)["state"]} 
            // if it fails give say in italics that status isn't set
            catch(error) { custom_status = "<i>no custom status currently set<\i>" }
            // set status text to determined status
            discord_popout.querySelector("#discord-status").innerHTML = custom_status 
        }).catch((reason) => {
            console.log("Lanyard Query Failed for reason:" + reason)
            discord_popout.querySelector("#discord-status").textContent = "The API use to query my discord info is down"
        })
    }

    updateStatus();
    // Update Status every 30 seconds
    setInterval(() => updateStatus, 30000)

    // ----- Clicking Discord Popout brings you to profile -----
    discord_popout.addEventListener("click", (event) => {
        const openInBrowser = ()=>{window.open("https://discord.com/users/280411966126948353", "_blank")}

        if (navigator.msLaunchUri) {
            // if browser/os supports launching URIs magically with this function, do it
            navigator.msLaunchUri("discord://-/users/280411966126948353", ()=>{}, openInBrowser);
        } else {
            // just open it in the browser
            openInBrowser()
        }
    })

    // tooltip
    tooltip = document.createElement("span");
    tooltip.style.visibility = "hidden"
    tooltip.classList = ["title"]
    document.body.appendChild(tooltip)

    function onHoverToggleTooltip( e ) {
        tooltip.style.top = e.pageY/*-(tooltip.offsetHeight/2)*/+"px"
        tooltip.style.left = e.pageX/*-(tooltip.offsetWidth/2)*/+"px"
        
        switch(e.type) {
            case "mouseenter":
                tooltip.innerHTML = this.getAttribute("tt-title")
                tooltip.style.visibility = "visible"
                break;
            case "mouseleave":
                tooltip.style.visibility = "hidden"
                break;
        }
    }

    console.log(document.querySelectorAll(".tooltip"))
    document.querySelectorAll(".tooltip").forEach(element => {
        element.addEventListener("mouseenter", onHoverToggleTooltip)
        element.addEventListener("mouseleave", onHoverToggleTooltip)
        element.addEventListener("mousemove", onHoverToggleTooltip)
    })

    // stop buttons being draggable
    window.ondragstart = function() {return false}
});