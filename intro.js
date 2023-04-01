//-------------------------variable

let name="CHARLOTIN"
console.log(name);

//----------------------fonction ------------------------

const createPerson=(name)=>{
   console.log("Je suis "+name);
}
createPerson(name)

//----------------------  tableau ------------------------

const tableau=[1,2,3,4,5,6,7,8,9,10]
console.log(tableau);
// ajouter une donné dans le tableau
tableau.push(11)
console.log(tableau);

//----------------------  Les objets globaux ------------------------

// console.log(global);

// setTimeout(() => {
//    console.log("salut tout le monde"); 
// }, 2000);

// setInterval(() => {
//     console.log("hello");
// }, 500);

// __dirname
//En Node.js, la variable spéciale "__dirname" est utilisée pour renvoyer le chemin absolu du répertoire du fichier JavaScript en cours d'exécution.
console.log(__dirname);

//__filename
//En Node.js, la variable spéciale "__filename" est utilisée pour renvoyer le chemin absolu du fichier JavaScript en cours d'exécution, y compris le nom du fichier. Cette variable est disponible dans tous les fichiers JavaScript exécutés par Node.js, et est donc souvent utilisée pour afficher le nom du fichier ou pour créer des chemins de fichiers relatifs.
console.log(__filename);


//---------------------- Les modules ------------------------

const etudiant=[
    {
        nom:"JEAN MARIE",
        niveau: 1
    },
    {
        nom:"JEAN Ralph",
        niveau: 2
    }
]

const cours=["Mathematiques","Geographie"]

// ---------------------------- les modules integre
const systeme=require("os")
console.log(
    systeme.userInfo(),
    systeme.version(),
    systeme.hostname()
    );

module.exports = {etudiant,cours};
