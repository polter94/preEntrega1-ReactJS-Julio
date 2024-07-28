const productos = [
    {
        id: "101" ,
        title: "Call of Duty: Modern Warfare 2 Remastered " ,
        desc: "fjasdklvaienvonasdvkbhawvibaw;viuawilvugwligywsig" ,
        price: "" ,
        category: "shooter" ,
        stock: "" ,
        cover: 
    }
    
    {
        id: "102" ,
        title: "Ready or Not" ,
        desc: " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc" ,
        price: "" ,
        category: "shooter" ,
        stock: "" ,
        cover: ""
    }
    
    {
        id: "103" ,
        title: "The House of the Dead: Remake" ,
        desc: " piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure L" ,
        price: "" ,
        category: "shooter" ,
        stock: "" ,
        cover: ""
    }
    
    {
        id: "201" ,
        title: "Baldur's Gate 3" ,
        desc: "by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem" ,
        price: "" ,
        category: "aventura" ,
        stock: "" ,
        cover: ""
    }
    
    {
        id: "202" ,
        title: "Marvel's Spider-Man Remastered " ,
        desc: "with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsu" ,
        price: "" ,
        category: "aventura" ,
        stock: "" ,
        cover: ""
    }

    {
        id: "203" ,
        title: "ELDEN RING" ,
        desc: "1500s, when an unknown printer took a galley of type and scrambled it " ,
        price: "" ,
        category: "aventura" ,
        stock: "" ,
        cover: ""
    }
    
    {
        id: "301" ,
        title: "Need for Speed: Most Wanted" ,
        desc: "veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed " ,
        price: "" ,
        category: "carreras" ,
        stock: "" ,
        cover: ""
    }
    
    {
        id: "302" ,
        title: "Assetto Corsa Competizione " ,
        desc: "pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that " ,
        price: "" ,
        category: "carreras" ,
        stock: "" ,
        cover: ""
    }

    {
        id: "303" ,
        title: "Forza Horizon 5" ,
        desc: "fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia " ,
        price: "" ,
        category: "carreras" ,
        stock: "" ,
        cover: ""
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