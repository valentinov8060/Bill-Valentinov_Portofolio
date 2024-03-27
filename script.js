const projectContainer = document.querySelector("#project-container");

const projectCard = (title, desc) => {
    return `<div class="col-md-4 mb-3">
                <div class="card">
                    <img class="card-img-top" src="img/project/${title}.png" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            ${desc}
                        </p>
                        <a href="https://github.com/valentinov8060/${title}" target="_blank" class="btn btn-primary">Visit the Repository</a>
                    </div>
                </div>
            </div>`;
};

const projectCards = (...args) => {
    return args.map((e) => {
        return projectCard(e[0], e[1]);
    });
};

function addProject(title, desc) {
    // Membuat elemen baru untuk setiap proyek dan menambahkannya ke dalam kontainer
    projectCards([title, desc]).forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = card;
        projectContainer.appendChild(cardElement.firstChild); // Menambahkan elemen pertama dari cardElement
    });
}

addProject('MovieDB', 'This project is designed to help users discover information about their favorite movies and explore new ones. It leverages a public API to provide a rich and dynamic movie-searching experience.');

addProject('tic-tac-toe', 'This project is a simple Tic-Tac-Toe game created using HTML, CSS, and JavaScript DOM. Tic-Tac-Toe is a two-player board game with the objective of achieving a horizontal, vertical, or diagonal line with three matching marks (X or O).');