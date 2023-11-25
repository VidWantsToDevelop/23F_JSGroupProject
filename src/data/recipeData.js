const ingridients = {
    "1": 
        {
            "id": "1",
            "ingridient": "beef"
        },
    "2":
        {
        "id": "2",
        "ingridient": "chicken"
        },
    "3":
        {
        "id": "3",
        "ingridient": "pork"
        },
    "4":
        {
        "id": "4",
        "ingridient": "fish"
        },
    "5":
        {
            "id": "5",
            "ingridient": "bear meat (0_0)"
        },
    "6":
        {
            "id": "6",
            "ingridient": "venison"
        },
    "7":
        {
            "id": "7",
            "ingridient": "rabbit"
        },
    "8":
        {
            "id": "8",
            "ingridient": "lettuce"
        },
    "9":
        {
            "id": "9",
            "ingridient": "spinach"
        },
    "10":
        {
            "id": "10",
            "ingridient": "kale"
        },
    "11":
        {
            "id": "11",
            "ingridient": "bok choy (Chinese chard)"
        },
    "12":
        {
            "id": "12",
            "ingridient": "cabbage"
        },
    "13":
        {
            "id": "13",
            "ingridient": "mustard greens"
        },
    "14":
        {
            "id": "14",
            "ingridient": "salt"
        },
    "15":
        {
            "id": "15",
            "ingridient": "pepper"
        },
    "16":
        {
            "id": "16",
            "ingridient": "cumin"
        },
    "17":
        {
            "id": "17",
            "ingridient": "paprika"
        },
    "18":
        {
            "id": "18",
            "ingridient": "cinnamon"
        },
    "19":
        {
            "id": "19",
            "ingridient": "chilli powder"
        },
    "20":
        {
            "id": "20",
            "ingridient": "saffron"
        },
    "21":
    {
        "id": "21",
        "ingridient": "star anise"
    },
    "22":
    {
        "id": "22",
        "ingridient": "turmeric"
    },
    "23":
    {
        "id": "23",
        "ingridient": "tomato"
    },
    "24":
    {
        "id": "24",
        "ingridient": "cucumber"
    },
    "25":
    {
        "id": "25",
        "ingridient": "onion"
    },
    "26":
    {
        "id": "26",
        "ingridient": "carrot"
    },
    "27":
    {
        "id": "27",
        "ingridient": "potato"
    },
    "28":
    {
        "id": "28",
        "ingridient": "purple yum"
    },
    "29":
    {
        "id": "29",
        "ingridient": "ginger"
    },
    "30":
    {
        "id": "30",
        "ingridient": "sunchoke"
    },
    "31": {
        "id": "31",
        "ingridient": "banana"
    },
    "32": {
        "id": "32",
        "ingridient": "pineapple"
    },
    "33": {
        "id": "33",
        "ingridient": "lemon"
    },
    "34": {
        "id": "34",
        "ingridient": "durian"
    },
    "35": {
        "id": "35",
        "ingridient": "pomegranate"
    },
    "36": {
        "id": "36",
        "ingridient": "avocado"
    },
    "37": {
        "id": "37",
        "ingridient": "cantaloupe"
    }
}

const columns = {
    "col-0": {
        "id": 0,
        "title": "Pot",
        "ingridientIds": []
    },
    "col-1": {
        "id": 1,
        "title": "meats",
        "ingridientIds": [1, 2, 3, 4, 5, 6, 7]
    },
    "col-2": {
        "id": 2,
        "title": "greens",
        "ingridientIds": [8, 9, 10, 11, 12, 13]
    },
    "col-3": {
        "id": 3,
        "title": "spices",
        "ingridientIds": [14, 15, 16, 17, 18, 19, 20, 21, 22]
    },
    "col-4": {
        "id": 4,
        "title": "vegetables",
        "ingridientIds": [23, 24, 25, 26, 27, 28, 29, 30]
    },
    "col-5": {
        "id": 5,
        "title": "fruits",
        "ingridientIds": [31, 32, 33, 34, 35, 36, 37]
    }
}

const columnOrders = ["col-0", "col-1", "col-2", "col-3", "col-4", "col-5"]

export default { columns, columnOrders, ingridients }