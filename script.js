
const wishButton = document.getElementById("wishButton");
const newYearMessage = document.getElementById("newYearMessage");


// Snowfall Effect
const snowContainer = document.createElement('div');
snowContainer.classList.add('snow-container');
document.body.appendChild(snowContainer);

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // random fall speed
    snowContainer.appendChild(snowflake);

    // Remove snowflake after animation to keep the DOM clean
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

snowContainer.style.opacity = 0;
newYearMessage.style.opacity = 0;
// Create snowflakes every 500ms (consistent frequency)
setInterval(createSnowflake, 500);

wishButton.addEventListener("click", () => {
    newYearMessage.classList.toggle("hidden");
    if (newYearMessage.classList.contains("hidden")) {
        wishButton.textContent = "Wish me New Year";
        snowContainer.style.opacity = 0;
        newYearMessage.style.opacity = 0;
    } else {
        wishButton.textContent = "Hide Message";
        snowContainer.style.opacity = 100;
        newYearMessage.style.opacity = 100;
    }
});

const iframe = document.getElementById("countdown_iframe");
iframe.onload = () => {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const body = iframeDoc.body;

    // Apply CSS to make text transparent
    body.style.color = "transparent";
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


const bg = document.getElementById("bg");
    window.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        bg.style.background = `radial-gradient(circle, rgba(${Math.round(255 * x)}, ${Math.round(
            255 * y
        )}, 255, 1), #7873f5)`;
    });