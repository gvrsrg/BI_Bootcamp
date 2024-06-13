data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

def ask_question(q_n_a):
    user_answer = input(q_n_a["question"])
    return(user_answer == q_n_a["answer"], user_answer)

def stat_info(correct, incorrect):
    print(f"You answered {correct+incorrect} questions, {correct} correct and {incorrect} incorrect")

def wrong_info(answers):

    for item in answers:
        print(f"For question '{item['question']}' you answered '{item['user_answers']}'. Correct answer: '{item['right_answer']}'.")


correct_answers = 0
incorrect_answers = 0


while (correct_answers + incorrect_answers == 0) or (incorrect_answers >3):
    wrong_answers = []
    correct_answers = 0
    incorrect_answers = 0
    
    for item in data:
        is_correct, user_answer = ask_question(item)
        
        if is_correct:
            correct_answers += 1
        else:
            incorrect_answers +=1
            wrong_answers.append({"question": item["question"],
                                  "user_answers": user_answer,
                                  "right_answer": item["answer"]
            })
        
    stat_info(correct_answers, incorrect_answers)

    wrong_info(wrong_answers)
    if incorrect_answers > 3:
        print("Let's play again!")
