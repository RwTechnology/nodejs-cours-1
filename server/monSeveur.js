// Importation du module http de Node.js
const http = require('http');

// Création d'un serveur HTTP avec la méthode createServer()
// Cette méthode prend en argument une fonction de rappel qui sera exécutée à chaque requête entrante
const server = http.createServer((request, response) => {
    // Cette ligne sera exécutée à chaque nouvelle requête entrante

    response.setHeader('Content-Type', 'text/html');
    response.write("<head><meta charset ='utf8'><title>Document</title></head>");
            if(request.url=="/")
            {
                response.write("<p>salut</p>");
    } else{
                response.write("<p>url est non valide</p>");
    }
            //end() est utilisée pour envoyer le corps de la réponse et terminer la réponse. Elle peut prendre un argument optionnel qui spécifie le contenu de la réponse. Dans cet exemple, elle prend une chaîne de caractères "Hello World" qui est envoyée en tant que corps de la réponse.
            response.end()
});

// Démarrage du serveur sur le port 3000 de l'hôte local (localhost)
// Une fois le serveur démarré, la fonction de rappel sera exécutée
server.listen(3000, "localhost", () => {
                console.log("server listening on port 3000"); // Cette ligne sera exécutée une fois le serveur démarré
});

