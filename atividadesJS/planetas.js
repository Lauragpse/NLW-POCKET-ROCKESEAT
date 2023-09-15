let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
let nomePlaneta = prompt('Digite o nome de um planeta:');

if (planetas.includes(nomePlaneta)) {
    alert(`O planeta ${nomePlaneta} está na lista.`);
} else {
    alert(`O planeta ${nomePlaneta} não está na lista.`);
}
