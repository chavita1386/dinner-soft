const dishes = [
  {
    _id: 1,
    name: "Enchiladas",
    description: "Tortilla envuelta de queso y cebolla con chile",
    ingredients: [
      {
        _id: 1,
        description: "chile"
      },
      {
        _id: 2,
        description: "queso"
      },
      {
        _id: 3,
        description: "cebolla"
      }
    ]
  },
  {
    _id: 2,
    name: "Sopes",
    description:
      "A sope, also known as picadita is a traditional Mexican dish originating in the central and southern parts of Mexico",
    ingredients: [
      {
        _id: 1,
        description: "Lechuga"
      },
      {
        _id: 2,
        description: "Queso"
      },
      {
        _id: 3,
        description: "Crema"
      }
    ]
  },
  {
    _id: 3,
    name: "Pozole",
    description:
      "Pozole, which means hominy, is a traditional soup or stew from Mexico",
    ingredients: [
      {
        _id: 1,
        description: "Lechuga"
      },
      {
        _id: 2,
        description: "Rabanos"
      },
      {
        _id: 3,
        description: "Cebolla"
      }
    ]
  },
  {
    _id: 4,
    name: "Flautas",
    description:
      "Tortilla de maíz enrollada, rellena con diferentes ingredientes",
    ingredients: [
      {
        _id: 1,
        description: "Lechuga"
      },
      {
        _id: 2,
        description: "Queso"
      },
      {
        _id: 3,
        description: "Crema"
      }
    ]
  }
];

export function getDishes() {
  return dishes;
}

export function getDish(id) {
  return dishes.find(x => x._id === id);
}
