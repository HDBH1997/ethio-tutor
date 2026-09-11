# 1. Define a function that checks performance
def check_performance(score):
    if score >= 80:
        return "Excellent"
    elif score >= 50:
        return "Satisfactory"
    else:
        return "Needs Improvement"

# 2. Create a list of student marks
student_marks = [45, 88, 72]

# 3. Loop through the list and run the function for each mark
for mark in student_marks:
    status = check_performance(mark)
    print(f"A score of {mark} is evaluated as: {status}")

