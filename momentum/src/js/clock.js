function getClock() {
    const date = new Date();
    const todayDate = date.toDateString();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const time = `${hours} : ${minutes} : ${seconds}`;

    return `${todayDate}<br />${time}`;
}

export default function Clock() {
    const clock = document.querySelector('#clock');

    clock.innerHTML = getClock();
}
