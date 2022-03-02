MENU = {'salmon sashimi': 10.99, 'gyoza': 5.99, 'bento box': 17.99, 'tempura': 6.99}

def restaurant():
    running_total = 0
    
    while True:
        user_choice = input("What would you like to order?").strip()
        
        if not user_choice:
            print(f'Your total is {running_total}')
            break
        
        if user_choice.lower() in MENU:
            price =  MENU.get(user_choice.lower())
            running_total += price
            print(f'{user_choice} costs {MENU.get(user_choice)}, total is {running_total} ')
        else:
            print(f"{user_choice} is out of stock.")
            
            
restaurant()