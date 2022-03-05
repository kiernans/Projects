def get_rainfall():
    cities_and_rainfall = {}
    
    while True:
        city = (input('Enter city name: ').strip()).lower()
        if not city:
            break
        try:
            rainfall = int(input('How much rain?').strip())
        except ValueError:
            print("You didn't enter an integer, try again.")
            continue
        
        cities_and_rainfall[city] = cities_and_rainfall.get(city, 0) + rainfall
        
    for city, rain in cities_and_rainfall.items():
        print(f'{city} {rain}')
        
get_rainfall()