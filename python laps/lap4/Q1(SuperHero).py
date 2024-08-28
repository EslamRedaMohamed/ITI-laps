class person:
    def __init__(self ,name ,age):
        self.name = name
        self.age = age
        
    def sayHello(self):
        return f"Hello, my name is {self.name} ^_^"
    
    def sayAge(self):
        return f"I'm {self.age} years old"
    
    
class SuperHero(person):
    def __init__(self ,name , age, secretIdentity, nemesis):
        super().__init__(name, age)
        self.secretIdentity = secretIdentity
        self.nemesis = nemesis
        
    def revealSecretIdentity(self):
        return f"I'm {self.secretIdentity} who are you?"
    
    def sayHello(self):
        return f"Hello, i'm {self.secretIdentity} will fight all evil people"
    
    def oldSayAge(self):
        return super().sayAge()
    
    def sayAge(self):
        return f"old or young, I'll beat {self.nemesis}"
    

print ("-----------person---------------")
person1 = person("Eslam Reda",23)
print(person1.sayHello())
print(person1.sayAge())
print ("-----------SuperHero------------")
superhero1 = SuperHero("Eslam Reda",23,"super man", "Villain")
print(superhero1.revealSecretIdentity())
print(superhero1.sayAge())
print(superhero1.oldSayAge())
print(superhero1.sayHello())

