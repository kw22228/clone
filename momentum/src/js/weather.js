function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const apiKey = '6b58812c034ebf6bc231751107358185';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

export default function Weather() {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
