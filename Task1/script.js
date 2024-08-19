// script.js
const images = [
    { src: 'images/image1.jpg', caption: 'Caption for Image 1' },
    { src: 'images/image2.jpg', caption: 'Caption for Image 2' },
    { src: 'images/image3.jpg', caption: 'Caption for Image 3' }
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('galleryImage');
    const captionElement = document.getElementById('caption');
    
  
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = images[index].src;
        captionElement.textContent = images[index].caption;
        
       
        imgElement.style.opacity = 1;
    }, 500); 
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
