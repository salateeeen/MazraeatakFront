export function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    const { latitude: lat, longitude: lng } = coords;
    localStorage.setItem(`coordinates`, JSON.stringify([lat, lng]));
  });
}