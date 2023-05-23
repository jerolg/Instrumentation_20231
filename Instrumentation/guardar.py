import requests

url = 'localhost:5000/api/waterq'
objeto =  {"place": "Medellin",
           "station": 1,
            "turbidity": 20,
            "color": [10,20,30],
            "conductivity":45,
            "PH":7,
            "temperature":27}

resp = requests.post(url, json=objeto)
print(resp.text)