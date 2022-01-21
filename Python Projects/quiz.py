print("Welcome to my quiz!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    print("Please type either yes or no.")

print("\nOkay, let's play. ")
score = 0

#Questions.....
answer = input("What does CPU stand for? ")

if answer.lower() == "central processing unit":
    print("\nCorrect!")
    score += 1
else:
    print("\nIncorrect...")


answer = input("What is the capital of California? ")

if answer.lower() == "sacramento":
    print("\nCorrect!")
    score += 1
else:
    print("\nIncorrect...")


answer = input("Who was the Warden of the North in Season 1 of Game of Thrones? ")

if answer.lower() == "eddard stark":
    print("\nCorrect!")
    score += 1
else:
    print("\nIncorrect...")



answer = input("What color is the sky? ")

if answer.lower() == "blue":
    print("\nCorrect!")
    score += 1
else:
    print("\nIncorrect...")

answer = input("How answers have you gotten right? ")

if int(answer) == score:
    print("\nCorrect!")
    score += 1
else:
    print("\nIncorrect...")

print("You got " + str(score) + " out of 5 right!")