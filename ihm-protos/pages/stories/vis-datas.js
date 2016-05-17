// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    {id: 1, content: 'Apparition du peuple celtes', start: new Date(-2000, 1)},
    {id: 2, content: 'Civilisation de Hallstatt', start: new Date(-1300, 1), end: new Date(-475, 1)},
    {id: 3, content: 'Les Celtes historiques', start: new Date(-450, 1), end: new Date(-25, 1)},
    {id: 4, content: 'La guerre des gaules', start: new Date(-58, 1), end: new Date(-50, 1)},
    {id: 5, content: 'Création des provinces gallo-romaines', start: new Date(-1, 1)}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);


var resumeMap = {};
resumeMap[1] = "L’apparition des Celtes est généralement située dans le courant du IIe millénaire av. J.-C. (protohistoire).";
resumeMap[2] = "Le Hallstatt ou Premier âge du fer est une période succédant à l'âge du bronze final et précédant la période de La Tène ou Second âge du fer (fin de la Protohistoire). Il tire son nom de celui d'un site archéologique qui se trouve à Hallstatt dans le Salzkammergut en Autriche.";
resumeMap[3] = "L’expression Celtes historiques désigne les peuples directement liés au second âge du fer, la civilisation de La Tène (Ve siècle av. J.-C.) et particulièrement à l’expansion en direction de l’Italie et du Danube.";
resumeMap[4] = "La guerre des Gaules, de 58 à 51 av. J.-C., est la guerre de conquête entreprise par le général romain Jules César et la résistance que lui opposent les tribus gauloises. La victoire romaine est assurée en 52 av. J.-C. par la bataille et le siège d'Alésia, où les Gaulois, dirigés par Vercingétorix, sont vaincus. La guerre cesse en 51 av. J.-C. après la prise de l'oppidum d'Uxellodunum (dans le Lot) où résistait encore la tribu des Cadurques. Le récit détaillé de cette guerre a été fait par Jules César dans ses Commentaires sur la Guerre des Gaules (De Bello Gallico).";
resumeMap[5] = "En 27, Auguste organise administrativement la gaule en fondant 3 provinces gallo-romaines";

timeline.on('select', function (properties) {
    var id = properties["items"];
    var contents = resumeMap[id];
    if (isEmpty(id)) {
        contents = `<img class="first-slide img-responsive center-block"
                                 src="../images/Celtes-et-Gaulois-11.jpg"
                                 alt="First slide">
                            <h1>Nos ancêtres les gaulois</h1>
                            <p>Qui étaient nos fameux encêtres ? étaient ils vraiment «gaulois» ? Qu'est-ce qu'un
                                gaulois ?</p>`;
    }

    writeResume(contents);
});