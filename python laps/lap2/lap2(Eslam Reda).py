#1
def sortArray(arr):
    return f"sorted array ASC: {sorted(arr)} and DESC: {sorted(arr,reverse=True)}"


#2
def generateArray(length, start):
    generatedArray = []
    element = start - 1
    for i in range(length):
        element += 1
        generatedArray.append(element)
    return f"generated Array: {generatedArray}"


#3
def calNumbers():
    lst = []
    while True:
        value = input("Enter Number or done: ")
        if value == 'done':
            print(f"total: {sum(lst)} count: {len(lst)} average: {sum(lst)/len(lst)}")
            break
        elif value.isdigit():
            lst.append(float(value))
        else:
            print("please Enter valid number or done")
            continue

##############################calls##########################
print(sortArray([1,5,7,10,9,]))
print(generateArray(3,4))
calNumbers()

#############################Bonus###########################
"""
1- discuss why dictionary key can only be an immutable type(means you can use int, str, or even tuple as a key, but not a set, list, or other dictionary.)?

ans:
dictionary keys must be immutable to ensure that their hash codes do not change over time.This ensures reliable storage, lookup, and equality comparisons within the hash table.
Mutable objects, which can change state, cannot provide the necessary stability for these operations, hence cannot be used as keys in a dictionary.

2-why the set only accepts immutable types?

ans:

Sets only accept immutable types as elements because immutability guarantees that the hash value of an element remains constant throughout its lifetime.
This stability is crucial for the efficiency and correctness of the set, which relies on hash codes for fast lookups, insertions, and deletions. 
If mutable types like lists or dictionaries were allowed, any changes to the element would alter its hash value, leading to inconsistencies and inefficiencies, undermining the purpose of using a set.

3- how the set makes sure it has non-duplicates?
ans:

Sets ensure uniqueness by leveraging hash values to quickly locate elements and prevent duplicates. 
When an element is added to a set, the set computes its hash and checks if an element with the same hash and equality already exists. 
If so, the new element is not added, ensuring that the set contains only distinct elements. This efficient mechanism allows sets to automatically manage uniqueness while maintaining high performance.
"""



