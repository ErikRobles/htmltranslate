// Define language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");
// Language Translations

let language = {
    'en' : {
        tra1 : "We can help",
        tra2 : "About",
        tra3 : "Products",
        tra4 : "Contact",
        tra5 : "YOUR IDEAS ALIVE",
        tra6 : "HOW WE CAN HELP YOU",
        tra7 : "Big Data",
        tra8 : "Want to make the best information based decision for your business? Using the latest in data science, we collect, analyze and communicate data to help your business grow."
    },
    'es' : {
        tra1 : "Qué Hacemos",
        tra2 : "Quiénes somos",
        tra3 : "Productos",
        tra4 : "Contactanos",
        tra5 : "TU IDEA NUESTRO CODIGO",
        tra6 : "QUÉ HACEMOS",
        tra7 : "Big Data",
        tra8 : "Recogemos, analizamos y comunicamos la información obtenida que puedas tomar la mejor decicion para tu negocio basado en la información."
    }
};

// Define Language via window hash
if (window.location.hash) {
    if(window.location.hash === "#es") {
        tra1.textContent = language.es.tra1;
        tra2.textContent = language.es.tra2;
        tra3.textContent = language.es.tra3;
        tra4.textContent = language.es.tra4;
        tra5.textContent = language.es.tra5;
        tra6.textContent = language.es.tra6;
        tra7.textContent = language.es.tra7;
        tra8.textContent = language.es.tra8;

    }
}

// Define language reload onclick illiteration
for(i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function() {
        location.reload(true);
    };
}
