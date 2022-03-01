def runTiming():
    num_runs = 0
    total_time = 0
    
    while True:
        try:
            number = float(input('Enter 10km run time: '))
        except ValueError as e:
            print("That is not a valid number.")
            break
        num_runs += 1
        total_time += number
    total_average = total_time / num_runs
    print(f"Total number of runs was {num_runs} and average running time is {total_average}.")

runTiming()