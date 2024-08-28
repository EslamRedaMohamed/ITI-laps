##############################lap1#######################
#1
print("hallo, worled")

#2
def binaryToDicimal(num):
    return int(num,2)

x = input("Enter binary number you want to convert it to a decimal:")
print(f"the binary number {x} = {binaryToDicimal(x) } in decimal")

#3
def divisibleCheck(num):
    if num % 5 ==0 and num % 3 == 0:
        return "FizzBuzz"
    elif num % 5 == 0:
        return "buzz"
    elif num % 3 == 0:
        return "Fizz"
num = int(input("Enter number to check divisible: "))
print (f"Number: {num} say: {divisibleCheck(num)}")

#4
def circleCal(r):
    return f"circle area: {3.14*r*r} and circle circumference: {2*3.14*r}"

r = float(input("input redies of circle:"))
print(circleCal(r))

#5

def info(name):
    # Strip whitespace from the input and check if it's alphabetic
    if name.strip() and name.isalpha():
        email = input("Please enter your email address:  ")
        print(f"Name: {name}\nEmail: {email}")
    else:
        print("Invalid input! Name is required and should only contain letters.")

name = input("Please enter your Name:  ")
info(name)


#6
def countIti(string):
    return f"iti apeare {string.count('iti')} times in {string}"
string = input("Enter string to count iti on it: ")
print(countIti(string))


