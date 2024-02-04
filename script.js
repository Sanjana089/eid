let moving = null;
let star = document.getElementById('star');

function pickup(event) {
    star.style.position = 'relative';
    moving = event.target.parentElement;

    moving.style.height = moving.clientHeight + 'px';
    moving.style.width = moving.clientWidth + 'px';
    moving.style.position = 'fixed';
}

function move(event) {
    event.preventDefault(); // Prevent default behavior to prevent scrolling on touch devices

    star.style.top = '0px';
    star.style.left = '0px';
    if (moving) {
        const x = event.clientX || event.changedTouches[0].clientX;
        const y = event.clientY || event.changedTouches[0].clientY;

        moving.style.left = x - moving.clientWidth / 2 + 'px';
        moving.style.top = y - moving.clientHeight / 2 + 'px';
    }
}

function drop(event) {
    if (moving) {
        document.getElementById('cresent').appendChild(moving);
        // Reset the element
        moving.style.left = '';
        moving.style.top = '';
        moving.style.height = '';
        moving.style.width = '';
        moving.style.position = '';
        moving.style.zIndex = '';

        moving = null;
    }
}