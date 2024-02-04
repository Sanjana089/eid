let moving = null;
let star = document.getElementById('star');
let dropped = false;

function pickup(event) {
    if (!dropped) {
        star.style.position = 'relative';
        star.style.top = '0px';
        star.style.left = '0px';
        moving = event.target.parentElement;

        moving.style.height = moving.clientHeight + 'px';
        moving.style.width = moving.clientWidth + 'px';
        moving.style.position = 'fixed';
    }
}

function move(event) {
    event.preventDefault(); // Prevent default behavior to prevent scrolling on touch devices
    if (!dropped) {
        star.style.top = '0px';
        star.style.left = '0px';
        if (moving) {
            const x = event.clientX || event.changedTouches[0].clientX;
            const y = event.clientY || event.changedTouches[0].clientY;

            moving.style.left = x - moving.clientWidth / 2 + 'px';
            moving.style.top = y - moving.clientHeight / 2 + 'px';
        }
    }
}

function drop(event) {
    if (!dropped && event?.changedTouches[0]?.clientX > 300) {
        moving.style.position = 'absolute';
        star.style.position = 'absolute';
    }
    if (!dropped && moving && event?.changedTouches[0]?.clientX < 120) {
        document.getElementById('cresent').appendChild(moving);
        dropped = true; // prevent anymore touch events once it reaches its place
        easeInGreeting();
        moving.style.left = '';
        moving.style.top = '';
        moving.style.height = '';
        moving.style.width = '';
        moving.style.position = '';
        moving.style.zIndex = '';
        star.style.top = '-20px';
        star.style.left = '30px';

        moving = null;
    }
}

function easeInGreeting() {
    // Show Eid Greeting
    const greeting = document.getElementById('greeting1');
    greeting.style.opacity = 1;
    // Stop star stencil twinkle
    const twinklingStar = document.getElementById('star-shadow');
    twinklingStar.style.animation = 'none';
}