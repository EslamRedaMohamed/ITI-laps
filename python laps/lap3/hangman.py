words = ['while','const','break','continue','double','boolean','synchronized','finally','protected','interface']
import random
word = words[random.randint(0,9)]

while True:
    playerName = input("Please enter your name to start hangman game programming version: ")
    if playerName.isalpha():
        break
    else:
        print("playerName should be an alpha character")
        
print(f"hi {playerName} you have maximum of 7 guess to complete the word ^_^")

guessLst = ["-" for i in range(len(word))] 
print(f"The word was picked is: {" ".join(guessLst)}")

for i in range(7):
    guess = input("guess any alphabetical letter / or the word: ").lower()
    if not guess.isalpha():
        print("Invalid input! Please guess a letter or word.")
        continue
    
    elif guess == word:
        print(f"Congratulations {playerName}! You guessed the word correctly!")
        break
    
    elif len(guess) == 1:
        if word.count(guess):
            for i in range(len(word)):
                if guess == word[i]:
                    guessLst[i] = guess
                    print(f"nice! that was in the word:{"".join(guessLst)}")
        else:
            print("opps! that was not in the word")
            
            
    elif len(guess) > 1 and len(guess) < len(word):
        if word.count(guess):
            for j in range(len(guess)):
                for i in range(len(word)):
                    if guess[j] == word[i]:
                        guessLst[i] = guess[j]
            print(f"nice! that was in the word:{"".join(guessLst)}")
        else:
            print("opps! that was not in the word")
            
            
            
    if guessLst == list(word):
        print(f"Congratulations {playerName}! You guessed the word correctly!")
        break

if guessLst!= list(word) and word != guess:
    print(f"Sorry {playerName}, you lost the game. The word was {word}")





