const body = document.querySelector(".snowflakes");

const createSnow = ()=>{
    const snow = document.createElement("span");
    snow.className = "snowflake";

    const minSize = 5;
    const maxSize = 10;

    let snowSize = Math.random()*(maxSize-minSize) + minSize;

    // snow.style.width = snowSize + "px";
    // snow.style.height = snowSize +"px";
    snow.style.left = Math.random()*100 + "vw";
    snow.style.top = Math.random()*100 + "vh";

    body.appendChild(snow);

    setTimeout(()=>{
        snow.remove()
    },100);
}

setInterval(createSnow, 10000);