
const tiere = {
    elefant: {
        name: "Afrikanischer Elefant",
        wissenschaftlicherName: "Loxodonta africana",
        verbreitungsgebiet: "Afrika, südlich der Sahara",
        lebensraum: "Savannen, Wälder, Wüstenränder",
        nahrung: "Pflanzenfresser (Gras, Blätter, Früchte)",
        besonderheiten: "Größtes landlebendes Tier der Welt, kann bis zu 70 Jahre alt werden",
        größe: "Bis zu 4 Meter hoch",
        gewicht: "Bis zu 6 Tonnen",
        fortpflanzung: "Trächtigkeitsdauer von 22 Monaten, ein Junges pro Wurf",
        gefährdungsstatus: "Gefährdet (IUCN)",
        saison: "Elefanten wandern in der Trockenzeit auf der Suche nach Wasser über weite Strecken"
    },
    löwe: {
        name: "Löwe",
        wissenschaftlicherName: "Panthera leo",
        verbreitungsgebiet: "Afrika",
        lebensraum: "Savannen, Graslandschaften",
        nahrung: "Fleischfresser (Großwild, Antilopen)",
        besonderheiten: "Löwen leben in Rudeln, das einzige soziale Mitglied der Katzenfamilie",
        größe: "Bis zu 1,2 Meter Schulterhöhe",
        gewicht: "Bis zu 250 kg",
        fortpflanzung: "Tragzeit von ca. 110 Tagen, 1–4 Jungtiere",
        gefährdungsstatus: "Gefährdet (IUCN)",
        saison: "Löwen sind während der Trockenzeit besonders aktiv, um Beutetiere zu jagen"
    },
    pinguin: {
        name: "Kaiserpinguin",
        wissenschaftlicherName: "Aptenodytes forsteri",
        verbreitungsgebiet: "Antarktis",
        lebensraum: "Eiswüsten und Meeresküsten",
        nahrung: "Fisch und Krill",
        besonderheiten: "Kaiserpinguine sind die größten Pinguine und können bis zu 1,2 Meter groß werden",
        größe: "Bis zu 1,2 Meter",
        gewicht: "Bis zu 45 kg",
        fortpflanzung: "Brutzeit im Winter, Männchen brüten das Ei",
        gefährdungsstatus: "Nahezu bedroht (IUCN)",
        saison: "Pinguine überleben den extrem kalten antarktischen Winter während ihrer Brutzeit"
    }
};


function zeigeTierInfo(tierKey) {
    const tier = tiere[tierKey];
    const tierInfoDiv = document.getElementById('tier-info');

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

   
    tierInfoDiv.style.display = 'block';
}


document.querySelectorAll('.tier-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const tierKey = e.target.getAttribute('data-tier');
        zeigeTierInfo(tierKey);
    });
});
function updateInfo() {
            
    const openingHoursElement = document.getElementById('hours');
    const feedingTimeElement = document.getElementById('feeding');
    
    
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 

    
    if (currentDay === 6 || currentDay === 0) { 
        openingHoursElement.innerHTML = 'Heute: 9:00 - 19:00 Uhr';
    } else {
        openingHoursElement.innerHTML = 'Heute: 9:00 - 18:00 Uhr';
    }

   
    const feedings = [
        "Löwen: 12:00 Uhr",
        "Elefanten: 14:00 Uhr",
        "Pinguine: 15:00 Uhr"
    ];
    const randomFeeding = feedings[Math.floor(Math.random() * feedings.length)];
    feedingTimeElement.innerHTML = randomFeeding;
}