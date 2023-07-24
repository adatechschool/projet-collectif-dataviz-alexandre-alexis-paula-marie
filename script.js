async function planetInfo(planetName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");
  const actualPlanetName = document.getElementById("name");

  container.innerHTML = "";

  if (!actualPlanetName || actualPlanetName.innerHTML !== infos.name) {
    container.innerHTML += `<p><strong id="name">${infos.name}</strong></p>`;
    container.innerHTML += `<p>Année: ${infos.sideralOrbit} jours</p>`;
    container.innerHTML += `<p>Jour: ${infos.sideralRotation} heures</p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
  }
}

async function moonInfo(moonName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");
  const actualPlanetName = document.getElementById("name");

  container.innerHTML = "";

  if (!actualPlanetName || actualPlanetName.innerHTML !== infos.name) {
    container.innerHTML += `<p><strong id="name">${infos.name}</strong></p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
  }
}

async function starInfo(starName) {
  const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
  const infos = await response.json();
  const container = document.getElementById("informations");
  const actualPlanetName = document.getElementById("name");

  container.innerHTML = "";

  if (!actualPlanetName || actualPlanetName.innerHTML !== infos.name) {
    container.innerHTML += `<p><strong id="name">${infos.name}</strong></p>`;
    container.innerHTML += `<p>Rayon: ${infos.equaRadius} km</p>`;
  }
}

// FONCTION CONCERNANT L'ISS ------------------
const position = async function issInfo() {
  const response = await fetch("http://api.open-notify.org/iss-now.json");
  const infos = await response.json();
  // console.log(infos)
  const positionIss = infos.iss_position
  // console.log(positionIss)
  const latitude = positionIss.latitude
  const longitude = positionIss.longitude
  let marker = L.marker([latitude, longitude]).addTo(map);
  console.log(marker)
}
position();
