const ingredients = {
    "1": 
        {
            "id": "1",
            "ingredient": "beef"
        },
    "2":
        {
        "id": "2",
        "ingredient": "chicken"
        },
    "3":
        {
        "id": "3",
        "ingredient": "pork"
        },
    "4":
        {
        "id": "4",
        "ingredient": "fish"
        },
    "5":
        {
            "id": "5",
            "ingredient": "bear meat (0_0)"
        },
    "6":
        {
            "id": "6",
            "ingredient": "venison"
        },
    "7":
        {
            "id": "7",
            "ingredient": "rabbit"
        },
    "8":
        {
            "id": "8",
            "ingredient": "lettuce"
        },
    "9":
        {
            "id": "9",
            "ingredient": "spinach"
        },
    "10":
        {
            "id": "10",
            "ingredient": "kale"
        },
    "11":
        {
            "id": "11",
            "ingredient": "bok choy (Chinese chard)"
        },
    "12":
        {
            "id": "12",
            "ingredient": "cabbage"
        },
    "13":
        {
            "id": "13",
            "ingredient": "mustard greens"
        },
    "14":
        {
            "id": "14",
            "ingredient": "salt"
        },
    "15":
        {
            "id": "15",
            "ingredient": "pepper"
        },
    "16":
        {
            "id": "16",
            "ingredient": "cumin"
        },
    "17":
        {
            "id": "17",
            "ingredient": "paprika"
        },
    "18":
        {
            "id": "18",
            "ingredient": "cinnamon"
        },
    "19":
        {
            "id": "19",
            "ingredient": "chilli powder"
        },
    "20":
        {
            "id": "20",
            "ingredient": "saffron"
        },
    "21":
    {
        "id": "21",
        "ingredient": "star anise"
    },
    "22":
    {
        "id": "22",
        "ingredient": "turmeric"
    },
    "23":
    {
        "id": "23",
        "ingredient": "tomato"
    },
    "24":
    {
        "id": "24",
        "ingredient": "cucumber"
    },
    "25":
    {
        "id": "25",
        "ingredient": "onion"
    },
    "26":
    {
        "id": "26",
        "ingredient": "carrot"
    },
    "27":
    {
        "id": "27",
        "ingredient": "potato"
    },
    "28":
    {
        "id": "28",
        "ingredient": "purple yum"
    },
    "29":
    {
        "id": "29",
        "ingredient": "ginger"
    },
    "30":
    {
        "id": "30",
        "ingredient": "sunchoke"
    },
    "31": {
        "id": "31",
        "ingredient": "banana"
    },
    "32": {
        "id": "32",
        "ingredient": "pineapple"
    },
    "33": {
        "id": "33",
        "ingredient": "lemon"
    },
    "34": {
        "id": "34",
        "ingredient": "durian"
    },
    "35": {
        "id": "35",
        "ingredient": "pomegranate"
    },
    "36": {
        "id": "36",
        "ingredient": "avocado"
    },
    "37": {
        "id": "37",
        "ingredient": "cantaloupe"
    }
}

const columns = {
    "col-0": {
        "id": 0,
        "title": "Your Pot",
        "ingredientIds": []
    },
    "col-1": {
        "id": 1,
        "title": "Meats",
        "ingredientIds": [1, 2, 3, 4, 5, 6, 7]
    },
    "col-2": {
        "id": 2,
        "title": "Greens",
        "ingredientIds": [8, 9, 10, 11, 12, 13]
    },
    "col-3": {
        "id": 3,
        "title": "Spices",
        "ingredientIds": [14, 15, 16, 17, 18, 19, 20, 21, 22]
    },
    "col-4": {
        "id": 4,
        "title": "Vegetables",
        "ingredientIds": [23, 24, 25, 26, 27, 28, 29, 30]
    },
    "col-5": {
        "id": 5,
        "title": "Fruits",
        "ingredientIds": [31, 32, 33, 34, 35, 36, 37]
    }
}

const columnOrders = ["col-0", "col-1", "col-2", "col-3", "col-4", "col-5"]

export default { columns, columnOrders, ingredients }