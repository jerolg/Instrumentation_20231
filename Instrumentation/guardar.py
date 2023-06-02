import requests

url = 'http://localhost:5000/api/waterq'
objeto =  {"place": "Medellin",
           "station": 2,
            "turbidity": 31,
            "color": [11,22,30],
            "conductivity":20,
            "PH":8,
            "temperature":26}

resp = requests.post(url, json=objeto)
print(resp.text)