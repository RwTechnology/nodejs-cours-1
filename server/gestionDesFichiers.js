const fs = require('fs')

// creation un dossier
// if(fs.existsSync("./mesFichiers")){
//     fs.rmdir("./mesFichiers",(erreur)=>{
//         if (erreur) {
//             console.log(erreur);
//         }else{
//             console.log("dossier supprimé avec succes");
//         }
//     })
// }else{
//     fs.mkdir("./mesFichiers",(erreur)=>{
//     if (erreur) {
//         console.log(erreur);
//     }else{
//         console.log("dossier créé avec succes");
//     }
// })
// }

//creation fichier
// fs.writeFile('./mesFichiers/fichier1.txt','je suis un developpeur full stack',(erreur)=>{
//     if (erreur) {
//         console.log(erreur);
//     }
//     else{
//         console.log("fichier créé avec succes");
//     }
// })

//Lecture d'un fichier
// fs.readFile('./mesFichiers/fichier1.txt', (erreur, contenu) => {
//     if (erreur) {
//         console.log(erreur);
//     }
//     else {
//         console.log(contenu.toString());
//     }
// })

//Suppression d'un fichier
if (fs.existsSync('./mesFichiers/fichier1.txt')) {
    fs.unlink('./mesFichiers/fichier1.txt', (erreur) => {
        if (erreur) {
            console.log(erreur);
        }
        else {
            console.log("fichier supprimé avec succes");
        }
    })
} else{
    console.log("impossible de supprimer un fichier qui n'existe pas");
}
