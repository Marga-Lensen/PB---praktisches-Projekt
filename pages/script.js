const tiere = {
  elefant: {
    name: "Afrikanischer Elefant",
    wissenschaftlicherName: "Loxodonta africana",
    verbreitungsgebiet: "Afrika, südlich der Sahara",
    lebensraum: "Savannen, Wälder, Wüstenränder",
    nahrung: "Pflanzenfresser (Gras, Blätter, Früchte)",
    besonderheiten:
      "Größtes landlebendes Tier der Welt, kann bis zu 70 Jahre alt werden",
    größe: "Bis zu 4 Meter hoch",
    gewicht: "Bis zu 6 Tonnen",
    fortpflanzung: "Trächtigkeitsdauer von 22 Monaten, ein Junges pro Wurf",
    gefährdungsstatus: "Gefährdet (IUCN)",
    saison:
      "Elefanten wandern in der Trockenzeit auf der Suche nach Wasser über weite Strecken",
  },
  löwe: {
    name: "Löwe",
    wissenschaftlicherName: "Panthera leo",
    verbreitungsgebiet: "Afrika",
    lebensraum: "Savannen, Graslandschaften",
    nahrung: "Fleischfresser (Großwild, Antilopen)",
    besonderheiten:
      "Löwen leben in Rudeln, das einzige soziale Mitglied der Katzenfamilie",
    größe: "Bis zu 1,2 Meter Schulterhöhe",
    gewicht: "Bis zu 250 kg",
    fortpflanzung: "Tragzeit von ca. 110 Tagen, 1–4 Jungtiere",
    gefährdungsstatus: "Gefährdet (IUCN)",
    saison:
      "Löwen sind während der Trockenzeit besonders aktiv, um Beutetiere zu jagen",
  },
  affe: {
    name: "Affe",
    wissenschaftlicherName: "Cercopithecidae",
    verbreitungsgebiet: "Afrika, Asien, Südamerika",
    lebensraum: "Tropische und subtropische Wälder",
    nahrung: "Allesfresser (Früchte, Insekten, kleine Tiere)",
    besonderheiten:
      "Affen sind äußerst soziale Tiere mit komplexen sozialen Strukturen",
    größe: "Je nach Art zwischen 30 cm und 1 Meter",
    gewicht: "Zwischen 1 und 35 kg, je nach Art",
    fortpflanzung:
      "Die Tragzeit variiert zwischen 4 bis 8 Monaten je nach Art, 1–2 Jungtiere",
    gefährdungsstatus:
      "Variiert je nach Art (einige Arten sind stark gefährdet)",
    saison:
      "Viele Arten sind während der Regenzeit aktiver aufgrund des Nahrungsangebots",
  },
};

function zeigeTierInfo(tierKey) {
  const tier = tiere[tierKey];
  const tierInfoDiv = document.getElementById("tier-info");

  if (tier) {
    tierInfoDiv.innerHTML = `
            <h2>${tier.name}</h2>
            <p><strong>Wissenschaftlicher Name:</strong> ${tier.wissenschaftlicherName}</p>
            <p><strong>Verbreitungsgebiet:</strong> ${tier.verbreitungsgebiet}</p>
            <p><strong>Lebensraum:</strong> ${tier.lebensraum}</p>
            <p><strong>Nahrung:</strong> ${tier.nahrung}</p>
            <p><strong>Besondere Merkmale:</strong> ${tier.besonderheiten}</p>
            <p><strong>Größe:</strong> ${tier.größe}</p>
            <p><strong>Gewicht:</strong> ${tier.gewicht}</p>
            <p><strong>Fortpflanzung:</strong> ${tier.fortpflanzung}</p>
            <p><strong>Gefährdungsstatus:</strong> ${tier.gefährdungsstatus}</p>
            <p><strong>Saisonale Besonderheiten:</strong> ${tier.saison}</p>
        `;
    tierInfoDiv.style.display = "block";
  } else {
    tierInfoDiv.innerHTML =
      "<p>Keine Informationen zu diesem Tier verfügbar.</p>";
  }
}

document.querySelectorAll(".tier-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    const tierKey = e.target.getAttribute("data-tier");
    zeigeTierInfo(tierKey.toLowerCase());
  });
});

function updateInfo() {
  const openingHoursElement = document.getElementById("hours");
  const feedingTimeElement = document.getElementById("feeding");

  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  // Öffnungszeiten aktualisieren
  if (currentDay === 6 || currentDay === 0) {
    openingHoursElement.innerHTML = "Heute: 9:00 - 19:00 Uhr";
  } else {
    openingHoursElement.innerHTML = "Heute: 9:00 - 18:00 Uhr";
  }

  const feedings = [
    "Löwen: 12:00 Uhr",
    "Elefanten: 14:00 Uhr",
    "Affen: 15:00 Uhr",
  ];
  const randomFeeding = feedings[Math.floor(Math.random() * feedings.length)];
  feedingTimeElement.innerHTML = randomFeeding;
}

document.addEventListener("DOMContentLoaded", updateInfo);

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let counter = 0;

function updateSliderWidth() {
  const size = images[0].clientWidth;
  slider.style.transform = `translateX(${-size * counter}px)`;
}

window.addEventListener("load", updateSliderWidth);
window.addEventListener("resize", updateSliderWidth);

document.getElementById("next").addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  updateSliderWidth();
});

document.getElementById("prev").addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter--;
  updateSliderWidth();
});

setInterval(() => {
  if (counter >= images.length - 1) {
    counter = -1;
  }
  document.getElementById("next").click();
}, 3000);
