const RESILIENCE = {
    gymName: "Resilience Brazilian Jiu Jitsu",
    city: "São Sebastião do Paraíso - MG",
    instagramGym: "resiliencebjj.ssp",
    coachName: "Igor Nascimento",
    instagramCoach: "igorsantanan",
    phoneIntl: "+5535988826260",
    phonePretty: "+55 35 98882-6260",
    address: "R. Custódio Nascimento, 199 - Braz, São Sebastião do Paraíso - MG",
    mapsQuery: "Resilience Brazilian Jiu Jitsu",
    schedule: [
        {
            day: "Segunda-feira", slots: [
                { time: "06:00", type: "Adulto" },
                { time: "18:30", type: "Adulto" },
                { time: "19:30", type: "Adulto" }
            ]
        },
        {
            day: "Terça-feira", slots: [
                { time: "08:30", type: "Kids" },
                { time: "18:30", type: "Kids" },
                { time: "19:30", type: "Adulto" }
            ]
        },
        {
            day: "Quarta-feira", slots: [
                { time: "06:00", type: "Adulto" },
                { time: "18:30", type: "Adulto" },
                { time: "19:30", type: "Adulto" }
            ]
        },
        {
            day: "Quinta-feira", slots: [
                { time: "08:30", type: "Kids" },
                { time: "18:30", type: "Kids" },
                { time: "19:30", type: "Adulto" }
            ]
        },
        {
            day: "Sexta-feira", slots: [
                { time: "06:00", type: "Adulto No-Gi" },
                { time: "18:30", type: "Adulto No-Gi" }
            ]
        }
    ]
};

// Helpers
const waLink = (phone, text) => {
    const msg = encodeURIComponent(text);
    return `https://wa.me/${phone.replace(/\D/g, '')}?text=${msg}`;
};
const igLink = (handle) => `https://instagram.com/${handle.replace('@', '')}`;
const mapsLink = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const defaultMsg = `Olá! Quero agendar uma aula experimental gratuita na Resilience BJJ.`;
const wa = waLink(RESILIENCE.phoneIntl, defaultMsg);
const igGym = igLink(RESILIENCE.instagramGym);
const igCoach = igLink(RESILIENCE.instagramCoach);
const maps = mapsLink(RESILIENCE.mapsQuery);

// Bind basic info
document.getElementById("coachName").textContent = RESILIENCE.coachName;
document.getElementById("phonePretty").textContent = RESILIENCE.phonePretty;
document.getElementById("addressLine").textContent = RESILIENCE.address;
document.getElementById("addressText").textContent = RESILIENCE.address;
document.getElementById("cityLine").textContent = RESILIENCE.city;
document.getElementById("year").textContent = new Date().getFullYear();

// Buttons
["waTop", "waHero", "waCoach", "waLocal", "waFooter", "waFab", "waBottom"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = wa;
});

["igGymTop", "igGym", "igGym2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = igGym;
});

["igCoach", "igCoach2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = igCoach;
});

["mapsHero", "mapsOpen"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = maps;
});

// Maps embed
document.getElementById("mapsEmbed").src =
    "https://www.google.com/maps?q=" + encodeURIComponent(RESILIENCE.mapsQuery) + "&output=embed";

// Schedule render (accordion)
const scheduleGrid = document.getElementById("scheduleGrid");

const dayTag = (slots) => {
    const hasKids = slots.some(s => s.type.toLowerCase().includes("kids"));
    const hasNogi = slots.some(s => s.type.toLowerCase().includes("no-gi") || s.type.toLowerCase().includes("nogi"));
    if (hasKids && hasNogi) return "Kids • No-Gi";
    if (hasKids) return "Kids • Adulto";
    if (hasNogi) return "No-Gi";
    return "Adulto";
};

const typeLabel = (t) => {
    const norm = t.toLowerCase();
    if (norm.includes("kids")) return `<span class="type"><b>Kids</b></span>`;
    if (norm.includes("no-gi") || norm.includes("nogi")) return `<span class="type"><b>No-Gi</b> (Adulto)</span>`;
    return `<span class="type"><b>Adulto</b></span>`;
};

const makeSlotMessage = (day, time, type) => {
    return `Olá! Quero agendar uma aula experimental gratuita na Resilience BJJ.\n` +
        `Tenho interesse no horário: ${day} ${time} (${type}).\n`;
};

// Open first day by default for quicker conversion
scheduleGrid.innerHTML = RESILIENCE.schedule.map((d, idx) => {
    const openAttr = idx === 0 ? "open" : "";
    const tag = dayTag(d.slots);

    const slotsHtml = d.slots.map(s => {
        const href = waLink(RESILIENCE.phoneIntl, makeSlotMessage(d.day, s.time, s.type));
        return `
          <div class="slot">
            <div class="left">
              <div class="time">${s.time}</div>
              ${typeLabel(s.type)}
            </div>
            <a class="mini" href="${href}" target="_blank" rel="noreferrer">Quero este horário</a>
          </div>
        `;
    }).join("");

    return `
        <details class="day" ${openAttr}>
          <summary class="daySum">
            <span>${d.day}</span>
            <span class="tag">${tag}</span>
          </summary>
          <div class="slots">
            ${slotsHtml}
          </div>
        </details>
      `;
}).join("");
