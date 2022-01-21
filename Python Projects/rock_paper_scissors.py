import random

choices = ["rock", "paper", "scissors"]
wins = 0
attempts = 0


while True:

    #Computer chooses randomly between rock(0), paper(1), scissors(2)
    comp_choice = choices[random.randrange(0,3)]

    user_choice = input("Please type rock, paper or scissors. Please type q to quit\n").lower()

    #Check if user choice is as expected
    if user_choice not in choices:
        continue

    
    if user_choice == "q":
        break

    if user_choice == "rock" and comp_choice == "scissors":
        print("Your choice:", user_choice, "\nComputer choice:", comp_choice)
        print("Congratulations, you won!")
        wins += 1
        

    elif user_choice == "paper" and comp_choice == "rock":
        print("Your choice:", user_choice, "\nComputer choice:", comp_choice)
        print("Congratulations, you won!")
        wins += 1
        

    elif user_choice == "scissors" and comp_choice == "paper":
        print("Your choice:", user_choice, "\nComputer choice:", comp_choice)
        print("Congratulations, you won!")
        wins += 1
        

    elif user_choice == comp_choice:
        print("Your choice:", user_choice, "\nComputer choice:", comp_choice)
        print("You've tied this round.")
        

    else:
        print("Your choice:", user_choice, "\nComputer choice:", comp_choice)
        print("You lose this round.")
        
    
    attempts += 1

print("You've won " + str(wins) + " out of " + str(attempts))
print("Goodbye!")