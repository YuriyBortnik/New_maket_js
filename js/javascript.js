//topMenu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//button
var buttons = document.getElementsByClassName('button'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
    sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

//Slider
var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;

btn_prev.onclick = function () {
    images[i].className = '';
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
};
btn_next.onclick = function () {
    images[i].className = '';
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
};

// var btn_prev = document.querySelector('#gallery .buttons .prev');
// var btn_next = document.querySelector('#gallery .buttons .next');
//
// var images = document.querySelectorAll('#gallery .photos img');
// var i = 0;
//
// btn_prev.onclick = function () {
//     images[i].style.display = 'none';
//     i--;
//
//     if(i < 0) {
//         i = images.length - 1;
//     }
//
//     images[i].style.display = 'block';
// };
// btn_next.onclick = function () {
//     images[i].style.display = 'none';
//     i++;
//
//     if(i >= images.length) {
//         i = 0;
//     }
//
//     images[i].style.display = 'block';
// };