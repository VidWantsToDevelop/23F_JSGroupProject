const ingridients = {
    "meats": ["beef", "chicken", "pork", "fish", "bear meat (0_0)", "venison", "rabbit"],
    "greens": ["lettuce", "spinach", "kale", "bok choy (Chinese chard)", "cabbage", "mustard greens"],
    "spices": ["salt", "pepper", "cumin", "paprika", "cinnamon", "chilli powder", "saffron", "star anise", "turmeric"],
    "vegetables": ["tomato", "cucumber", "onion", "carrot", "potato", "purple yum", "ginger", "sunchoke"],
    "fruits": ["banana", "pineapple", "lemon", "durian", "pomegranate", "avocado", "cantaloupe"]
}
const columns = {
    "col-1": {
        "id": 1,
        "title": "Pot",
        "ingridients": []
    },
    "col-2": {
        "id": 2,
        "title": "meats",
        "ingridients": ingridients.meats
    },
    "col-3": {
        "id": 3,
        "title": "greens",
        "ingridients": ingridients.greens
    },
    "col-4": {
        "id": 4,
        "title": "spices",
        "ingridients": ingridients.spices
    },
    "col-5": {
        "id": 5,
        "title": "vegetables",
        "ingridients": ingridients.vegetables
    },
    "col-6": {
        "id": 6,
        "title": "fruits",
        "ingridients": ingridients.fruits
    }
}

const columnOrders = ["col-1", "col-2", "col-3", "col-4", "col-5", "col-6"]

export default { columns, columnOrders }