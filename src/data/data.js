const productos = [
    {
        id: "101" ,
        title: "Call of Duty: Modern Warfare 2 Remastered " ,
        desc: "" ,
        price: "$12000" ,
        category: "shooter" ,
        stock: "" ,
        cover: "/img/CoDModernWarfare2.jpg"
    },
    
    {
        id: "102" ,
        title: "Ready or Not" ,
        desc: "" ,
        price: "$7000" ,
        category: "shooter" ,
        stock: "" ,
        cover: "/img/ReadyOrNot.jpg"
    },
    
    {
        id: "103" ,
        title: "The House of the Dead: Remake" ,
        desc: "" ,
        price: "$3000" ,
        category: "shooter" ,
        stock: "" ,
        cover: "/img/HouseOfTheDead.jpg"
    },
    
    {
        id: "201" ,
        title: "Baldur's Gate 3" ,
        desc: "" ,
        price: "$35000" ,
        category: "aventura" ,
        stock: "" ,
        cover: "/img/BaldursGate3.jpg"
    },
    
    {
        id: "202" ,
        title: "Marvel's Spider-Man Remastered " ,
        desc: "" ,
        price: "$55000" ,
        category: "aventura" ,
        stock: "" ,
        cover: "/img/SpiderManRemastered.jpg"
    },

    {
        id: "203" ,
        title: "Elden Ring" ,
        desc: "" ,
        price: "$50000" ,
        category: "aventura" ,
        stock: "" ,
        cover: "/img/EldenRing.jpg"
    },
    
    {
        id: "301" ,
        title: "Need for Speed: Hot Pursuit Remastered" ,
        desc: "" ,
        price: "$5000" ,
        category: "carreras" ,
        stock: "" ,
        cover: "/img/NeedForSpeedHotPursuitRemastered.jpg"
    },
    
    {
        id: "302" ,
        title: "Assetto Corsa Competizione " ,
        desc: "" ,
        price: "$12000" ,
        category: "carreras" ,
        stock: "" ,
        cover: "/img/AssettoCorsaCompetizione.jpg"
    },

    {
        id: "303" ,
        title: "Forza Horizon 5" ,
        desc: "" ,
        price: "$17000" ,
        category: "carreras" ,
        stock: "" ,
        cover: "/img/ForzaHorizon5.jpg"
    }

]

// CATEGORIAS
//     1XX     ->      SHOOTER
//     2XX     ->      AVENTURA
//     3XX     ->      CARRERAS


//simula demora de red (500ms)
const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    });
};

export default obtenerProductos