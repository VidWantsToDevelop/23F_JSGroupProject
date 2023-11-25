const ingridients = [
    {
        "id": 1,
        "ingridients": [
            {
                "id": "1",
                "ingridient": "beef"
            },
            {
                "id": "2",
                "ingridient": "chicken"
            },
            {
                "id": "3",
                "ingridient": "pork"
            },
            {
                "id": "4",
                "ingridient": "fish"
            },
            {
                "id": "5",
                "ingridient": "bear meat (0_0)"
            },
            {
                "id": "6",
                "ingridient": "venison"
            },
            {
                "id": "7",
                "ingridient": "rabbit"
            }
        ]
    },
    {
        "id": 2,
        "ingridients": [
            {
                "id": "8",
                "ingridient": "lettuce"
            },
            {
                "id": "9",
                "ingridient": "spinach"
            },
            {
                "id": "10",
                "ingridient": "kale"
            },
            {
                "id": "11",
                "ingridient": "bok choy (Chinese chard)"
            },
            {
                "id": "12",
                "ingridient": "cabbage"
            },
            {
                "id": "13",
                "ingridient": "mustard greens"
            }
        ]
    },
    {
        "id": 3,
        "ingridients": [
            {
                "id": "14",
                "ingridient": "salt"
            },
            {
                "id": "15",
                "ingridient": "pepper"
            },
            {
                "id": "16",
                "ingridient": "cumin"
            },
            {
                "id": "17",
                "ingridient": "paprika"
            },
            {
                "id": "18",
                "ingridient": "cinnamon"
            },
            {
                "id": "19",
                "ingridient": "chilli powder"
            },
            {
                "id": "20",
                "ingridient": "saffron"
            },
            {
                "id": "21",
                "ingridient": "star anise"
            },
            {
                "id": "22",
                "ingridient": "turmeric"
            }
        ]
    },
    {
        "id": 4,
        "ingridients": [
            {
                "id": "23",
                "ingridient": "tomato"
            },
            {
                "id": "24",
                "ingridient": "cucumber"
            },
            {
                "id": "25",
                "ingridient": "onion"
            },
            {
                "id": "26",
                "ingridient": "carrot"
            },
            {
                "id": "27",
                "ingridient": "potato"
            },
            {
                "id": "28",
                "ingridient": "purple yum"
            },
            {
                "id": "29",
                "ingridient": "ginger"
            },
            {
                "id": "30",
                "ingridient": "sunchoke"
            }
        ]
    },
    {
        "id": 5,
        "ingridients": [
            {
                "id": "31",
                "ingridient": "banana"
            },
            {
                "id": "32",
                "ingridient": "pineapple"
            },
            {
                "id": "33",
                "ingridient": "lemon"
            },
            {
                "id": "34",
                "ingridient": "durian"
            },
            {
                "id": "35",
                "ingridient": "pomegranate"
            },
            {
                "id": "36",
                "ingridient": "avocado"
            },
            {
                "id": "37",
                "ingridient": "cantaloupe"
            }
        ]
    }
]

const columns = {
    "col-1": {
        "id": 0,
        "title": "Pot",
        "ingridients": {
            "id": 0,
            "ingridients": []
        }
    },
    "col-2": {
        "id": 1,
        "title": "meats",
        "ingridients": ingridients[0]
    },
    "col-3": {
        "id": 2,
        "title": "greens",
        "ingridients": ingridients[1]
    },
    "col-4": {
        "id": 3,
        "title": "spices",
        "ingridients": ingridients[2]
    },
    "col-5": {
        "id": 4,
        "title": "vegetables",
        "ingridients": ingridients[3]
    },
    "col-6": {
        "id": 5,
        "title": "fruits",
        "ingridients": ingridients[4]
    }
}

const columnOrders = ["col-1", "col-2", "col-3", "col-4", "col-5", "col-6"]

export default { columns, columnOrders }