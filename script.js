async function planetInfo(planetName) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetName}`);
    const infos = await response.json();
    console.log(infos);
    document.body.innerHTML += `<p>Nom: ${infos.name}</p>`;
    document.body.innerHTML += `<p>Période de révolution autour du soleil: ${infos.sideralOrbit} jours</p>`;
    document.body.innerHTML += `<p>Période de rotation sur son axe: ${infos.sideralRotation} heures</p>`;
    document.body.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
}

async function moonInfo(moonName) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${moonName}`);
    const infos = await response.json();
    console.log(infos);
    document.body.innerHTML += `<p>Nom: ${infos.name}</p>`;
    document.body.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
}

async function starInfo(starName) {
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${starName}`);
    const infos = await response.json();
    console.log(infos);
    document.body.innerHTML += `<p>Nom: ${infos.name}</p>`;
    document.body.innerHTML += `<p>Rayon équatorial en kilomètres: ${infos.equaRadius} km</p>`;
} 