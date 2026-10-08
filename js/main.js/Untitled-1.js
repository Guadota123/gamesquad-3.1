// Validacion de Formulario (Ejercitación 3.1)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const errorMsg = document.getElementById('errorMsg');

        if (!email.includes('@')) {
            errorMsg.textContent = 'Por favor ingresá un correo válido.';
        } else {
            errorMsg.style.color = '#22c55e';
            errorMsg.textContent = '¡Sesión iniciada con éxito!';
        }
    });
}

// Carga Dinámica de Datos DOM (Ejercitación 3.1)
const squadList = document.getElementById('squadList');
if (squadList) {
    const squads = [
        { juego: 'Rocket League', rango: 'Diamond II', miembros: '2/3' },
        { juego: 'Valorant', rango: 'Gold I', miembros: '4/5' },
        { juego: 'Fortnite', rango: 'Platino', miembros: '3/4' }
    ];

    squads.forEach(squad => {
        const card = document.createElement('div');
        card.className = 'squad-card';
        card.innerHTML = `
            <h3>${squad.juego}</h3>
            <p><strong>Rango:</strong> ${squad.rango}</p>
            <p><strong>Cupo:</strong> ${squad.miembros}</p>
            <button class="btn-primary">Unirse</button>
        `;
        squadList.appendChild(card);
    });
}