const ingredients = {
    "1": 
        {
            "id": "1",
            "ingredient": "beef",
            "emoji": "🐄"
        },
    "2":
        {
        "id": "2",
        "ingredient": "chicken",
        "emoji": "🐔"
        },
    "3":
        {
        "id": "3",
        "ingredient": "pork",
        "emoji": "🐖",
        },
    "4":
        {
        "id": "4",
        "ingredient": "fish",
        "emoji": "🐟"
        },
    "5":
        {
            "id": "5",
            "ingredient": "bear meat (0_0)",
            "emoji": "🐻"
        },
    "6":
        {
            "id": "6",
            "ingredient": "venison",
            "emoji": "🦌"
        },
    "7":
        {
            "id": "7",
            "ingredient": "rabbit",
            "emoji": "🐇"
        },
    "8":
        {
            "id": "8",
            "ingredient": "lettuce",
            "emoji": "🥬"
        },
    "9":
        {
            "id": "9",
            "ingredient": "spinach",
            "emoji": "🥬"
        },
    "10":
        {
            "id": "10",
            "ingredient": "kale",
            "emoji": "🥬"
        },
    "11":
        {
            "id": "11",
            "ingredient": "bok choy (Chinese chard)",
            "emoji": "🥬"
        },
    "12":
        {
            "id": "12",
            "ingredient": "cabbage",
            "emoji": "🥬"
        },
    "13":
        {
            "id": "13",
            "ingredient": "mustard greens",
            "emoji": "🥬"
        },
    "14":
        {
            "id": "14",
            "ingredient": "salt",
            "emoji": "🧂"
        },
    "15":
        {
            "id": "15",
            "ingredient": "pepper",
            "emoji": "🧂"
        },
    "16":
        {
            "id": "16",
            "ingredient": "cumin",
            "emoji": "🧂"
        },
    "17":
        {
            "id": "17",
            "ingredient": "paprika",
            "emoji": "🧂"
        },
    "18":
        {
            "id": "18",
            "ingredient": "cinnamon",
            "emoji": "🧂"
        },
    "19":
        {
            "id": "19",
            "ingredient": "chilli powder",
            "emoji": "🧂"
        },
    "20":
        {
            "id": "20",
            "ingredient": "saffron",
            "emoji": "🧂"
        },
    "21":
    {
        "id": "21",
        "ingredient": "star anise",
        "emoji": "🧂"
    },
    "22":
    {
        "id": "22",
        "ingredient": "turmeric",
        "emoji": "🧂"
    },
    "23":
    {
        "id": "23",
        "ingredient": "tomato",
        "emoji": "🍅"
    },
    "24":
    {
        "id": "24",
        "ingredient": "cucumber",
        "emoji": "🥒"
    },
    "25":
    {
        "id": "25",
        "ingredient": "onion",
        "emoji": "🧅"
    },
    "26":
    {
        "id": "26",
        "ingredient": "carrot",
        "emoji": "🥕"
    },
    "27":
    {
        "id": "27",
        "ingredient": "potato",
        "emoji": "🥔"
    },
    "28":
    {
        "id": "28",
        "ingredient": "purple yum",
        "emoji": "🥔"
    },
    "29":
    {
        "id": "29",
        "ingredient": "ginger",
        "emoji": "🧅"
    },
    "30":
    {
        "id": "30",
        "ingredient": "sunchoke",
        "emoji": "🥔"
    },
    "31": {
        "id": "31",
        "ingredient": "banana",
        "emoji": "🍌"
    },
    "32": {
        "id": "32",
        "ingredient": "pineapple",
        "emoji": "🍍"
    },
    "33": {
        "id": "33",
        "ingredient": "lemon",
        "emoji": "🍋"
    },
    "34": {
        "id": "34",
        "ingredient": "durian",
        "emoji": "🥭"
    },
    "35": {
        "id": "35",
        "ingredient": "pomegranate",
        "emoji": "🍎"
    },
    "36": {
        "id": "36",
        "ingredient": "avocado",
        "emoji": "🥑"
    },
    "37": {
        "id": "37",
        "ingredient": "cantaloupe",
        "emoji": "🍈"
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