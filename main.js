images = [
    "img/img-1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg"
];


function initSlideshow() {
    setImage(0);
    setInterval(function () {
        nextImage();
    }, 5000);

}


var currentImage = 0;

function nextImage() {
    if (currentImage + 1 === images.length) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    setImage(currentImage);
}

function prevImage() {
    if (currentImage === 0) {
        currentImage = images.length - 1;
    } else {
        currentImage--;
    }
    setImage(currentImage);
}


function setImage(image) {
    document.querySelectorAll('.mySlides')[0].src = images[image];
    // alert(currentImage);
    for (var i = 0; i < images.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active')
        };
    }
    dots[image].className += " active";
}


var box = document.querySelector('.dotBox');
for (var i = 0; i < images.length; i++) {
    var dot = document.createElement('span');
    box.appendChild(dot);
    dot.className = 'dot';
}


var dots = document.querySelectorAll('.dot');
for (var i = 0; i < images.length; i++) {
    dots[i].count = i;
    dots[i].onclick = function () {
        setImage(this.count);
    }
}


window.onload = initSlideshow();