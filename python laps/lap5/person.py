"""
    class Person:
    Private Attributes:
        __name:
        __brith year:

    methods:
        say_hello: prints name whenever called

    properties:
        name
        age
"""
from datetime import date
class person:
    def __init__(self, name, brithYear):
        self.__name = name
        self.__brithYear = brithYear
        
    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, name):
        self.__name = name
        
    @property
    def age(self):
        return date.today().year - self.__brithYear
    
    @age.setter
    def age(self, brithYear):
        self.__brithYear = brithYear
        
    def say_hello(self):
        return f"Hello, my name is {self.name} i'm  {self.age} years old"
    
    
person1 = person("Eslam", 2000)
print (person1.say_hello())