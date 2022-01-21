import random

print("Welcome to the number guessing game.")
max_range = int(input("Please choose a max range number.\n"))

number = random.randrange(0,max_range)
attempts = 0


while True:
    user_guess = int(input("Please choose a number between 0 and " + str(max_range) + "\n"))

    if user_guess == number:
        print("Congratulations, you win!")
        print("Number of attempts are:", attempts)
        break

    elif user_guess < number:
        print("Your number is too low.")

    else:
        print("Your number is too high.")

    attempts += 1