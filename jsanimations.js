const popmotion = require('popmotion')

const ball= document.querySelector(".ball");

popmotion.animate( {
    from:"0px",
    to: "250px",
    repeat:Infinity,
    repeatType:"mirror",
    type:"spring",
    onUpdate(update) {
        console.log("ball");
        ball.style.top = update;
    }
});