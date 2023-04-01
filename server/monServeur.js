// Importation du module http de Node.js
const http = require('http');
const fs = require('fs');

// Création d'un serveur HTTP avec la méthode createServer()
// Cette méthode prend en argument une fonction de rappel qui sera exécutée à chaque requête entrante
const server = http.createServer((request, response) => {
    // Cette ligne sera exécutée à chaque nouvelle requête entrante

    response.setHeader('Content-Type', 'text/html');
    let fichier=""
    if (request.url == "/" || request.url =="/accueil") {
        fichier="../IHM/accueil.html";
    } 
    else if (request.url == "/profile") {
        fichier="../IHM/profile.html";
    }
    else {
        fichier="../IHM/erreur.html";
    }
    fs.readFile(fichier,(erreur,contenu) => {
        if (erreur) {
            console.log(erreur);
            response.end();
        }
        else{
            response.end(contenu);
        }
    })
});

// Démarrage du serveur sur le port 3000 de l'hôte local (localhost)
// Une fois le serveur démarré, la fonction de rappel sera exécutée
server.listen(3000, "localhost", () => {
    console.log("server listening on port 3000"); // Cette ligne sera exécutée une fois le serveur démarré
});

