export default function Background() {
    const images = ['fox.png', 'rabbit.png', 'space.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    const src = `public/images/${images[randomIndex]}`;

    const plate = document.querySelector('#background-img');
    const item = `<img src=${src} />`;

    plate.innerHTML = item;
}
