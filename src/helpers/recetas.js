export default recetas = [
  {
    'id': 1,
    'name': "Pizza",
    'description': "pizza con pepperoni",
    'love': true,
    'recent': 1,
    'ingredientes' : [ 
      {
      'nombre' : "Salsa de tomate con orégano",
      'cantidad': 1,
      'measurement': '150ml',
      },
      {
        'nombre' : "Pepperoni",
        'cantidad': 1,
        'measurement': '100g',
      },
      {
        'nombre' : 'Mozzarella en barra',
        'cantidad': 1,
        'measurement':'100g',
      },
      {
        'nombre' : "mozzarella fresca de búfala",
        'cantidad': 1,
        'measurement':'150g',
      },
      {
        'nombre' : "harina de fuerza",
        'cantidad': 1,
        'measurement ':"500g",
      },
    ],
    'image': require("../assets/img/pizza.jpeg"),
    'tag': "comida rapida",
  },
  {
    'id': 2,
    'name': "Spaguetti",
    'description': "spaguetti",
    'love': false,
    'recent': 0,
    'ingredientes' : [ 
      {
      'nombre' : "Salsa de tomate con orégano",
      'cantidad': 1,
      'measurement': '150ml',
      },
      {
        'nombre' : "pasta",
        'cantidad': 1,
        'measurement': '200g',
      },
      {
        'nombre' : 'cebolla',
        'cantidad': 1,
        'measurement':'1/2',
      },
      {
        'nombre' : "dientes de ajo",
        'cantidad': 2,
        'measurement':'15g',
      },
      {
        'nombre' : "crema de leche",
        'cantidad': 1,
        'measurement ':"100ml",
      },
      {
        'nombre' : "pimentón",
        'cantidad': 1,
        'measurement ':"100g",
      },
      {
        'nombre' : "orégano seco",
        'cantidad': 1,
        'measurement ':"100g",
      },
    ],
    'image': require("../assets/img/spaguetti.jpeg"),
    'tag': "platillo",
  },
  {
    'id': 3,
    'name': "Lasaña",
    'description': "lasaña",
    'love': false,
    'recent': 0,
    'ingredientes' : [ 
      {
      'nombre' : "carne de ternera para guisar",
      'cantidad': 1,
      'measurement': '600g',
      },
      {
        'nombre' : "panceta de cerdo",
        'cantidad': 1,
        'measurement': '300g',
      },
      {
        'nombre' : 'cebolla',
        'cantidad': 1,
        'measurement':'1',
      },
      {
        'nombre' : "zanahoria",
        'cantidad': 2,
        'measurement':'80g',
      },
      {
        'nombre' : "apio",
        'cantidad': 1,
        'measurement ':"50g",
      },
      {
        'nombre' : "vino tinto",
        'cantidad': 1,
        'measurement ':"200ml",
      },
      {
        'nombre' : "salsa de tomate",
        'cantidad': 1,
        'measurement ':"800g",
      },
      {
        'nombre' : "leche",
        'cantidad': 1,
        'measurement ':"50ml",
      },      
      {
        'nombre' : "aceite de oliva",
        'cantidad': 1,
        'measurement ':"3cda",
      },      
      {
        'nombre' : "sal",
        'cantidad': 1,
        'measurement ':"al gusto",
      },
      {
        'nombre' : "pimineta",
        'cantidad': 1,
        'measurement ':"al gusto",
      },
    ],
    'image': require("../assets/img/lasaña.jpeg"),
    'tag': "platillo",
  },
  {
    'id': 4,
    'name': "Brownie",
    'description': "brownies deli",
    'love': false,
    'recent': 0,
    'ingredientes' : [ 
      {
      'nombre' : "mantequilla",
      'cantidad': 1,
      'measurement': '200g',
      },
      {
        'nombre' : " chocolate negro 70% mínimo ",
        'cantidad': 1,
        'measurement': '180g',
      },
      {
        'nombre' : 'huevos',
        'cantidad': 2,
        'measurement':'100g',
      },
      {
        'nombre' : "azúcar normal o glas",
        'cantidad': 1,
        'measurement':'225g',
      },
      {
        'nombre' : "cacao en polvo sin azúcar",
        'cantidad': 1,
        'measurement ':"30g",
      },
      {
        'nombre' : "esencia de vainilla",
        'cantidad': 1,
        'measurement ':"1/2",
      },
      {
        'nombre' : "harina de trigo",
        'cantidad': 1,
        'measurement ':"120g",
      },
    ],
    'image': require("../assets/img/brownie.jpeg"),
    'tag': "postre",
  },
  {
    'id': 5,
    'name': "Macaroon",
    'description': "macaroones deli",
    'love': false,
    'recent': 0,
    'ingredientes' : [ 
      {
      'nombre' : "harina de almendras",
      'cantidad': 1,
      'measurement': '100g',
      },
      {
        'nombre' : "azucar",
        'cantidad': 1,
        'measurement': '220g',
      },
      {
        'nombre' : 'claras de huevo envejecidas',
        'cantidad': 1,
        'measurement':'100g',
      },
      {
        'nombre' : " azúcar blanquilla",
        'cantidad': 2,
        'measurement':'30g',
      },
    ],
    'image': require("../assets/img/macaroon.jpeg"),
    'tag': "postre",
  },
]