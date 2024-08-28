import pickle

class queue:
    def __init__(self):
        self.q = []
    def enqueue(self, value):
        self.q.append(value)
        return f"consumer: {value} on queue now, queue state now {self.q}"
        
    def dequeue(self):
        if self.q:
            return f"consumer: {self.q.pop(0)} served by queue now, queue state now {self.q}"
        else:
            return "no consumer available(queue empty)"
    def isEmpty(self):
        if self.q:
            return "False"
        else:
            return "True"

print ("-----------------------------Q2----------------------")
queue1 = queue()
print(queue1.isEmpty())
print(queue1.enqueue('Eslam'))
print(queue1.enqueue('Reda'))
print(queue1.enqueue('MOhamed'))
print(queue1.dequeue())
print(queue1.enqueue('Abd-Elkader'))
print(queue1.dequeue())
print(queue1.dequeue())
print(queue1.dequeue())
print(queue1.dequeue())
print(queue1.isEmpty())

print("--------------------------Q3---------------------------------")
class QueueOutOfRangeException(Exception):
    def __init__(self, messenge = "Queue size limit exceeded."):
        super().__init__(messenge)


class enhanced_queue(queue):
    queue_instances = {}
    
    def __init__(self, qName, qSize):
        super().__init__()
        self.qName = qName
        self.qSize = qSize
        
        enhanced_queue.queue_instances[qName] = self.q
    
    #override enqueue method to add size exception
    def enqueue(self, value):
        if len(self.q) >= self.qSize:
            raise QueueOutOfRangeException(f"Queue '{self.qName}' size limit exceeded can't add {value} to Queue.")
        else:
            return super().enqueue(value)
    
    
    @classmethod
    def get_queue_by_name(cls, name):
        return cls.queue_instances.get(name)
    
    @classmethod
    def save(cls):
        with open('Queue.dat', 'wb') as file:
            pickle.dump(cls.queue_instances, file)
            
    @classmethod
    def load(cls):
        with open('Queue.dat', 'rb') as file:
            cls.queue_instances = pickle.load(file)
    

queue2 = enhanced_queue("consumer",3)

try:
    
    print(queue2.enqueue('Eslam'))
    print(queue2.enqueue('Reda'))
    print(queue2.enqueue('MOhamed'))
    print(queue2.enqueue('Abd-Elkader'))
except QueueOutOfRangeException as e:
    print(e)
    

queue3 = enhanced_queue("cars",2)

try:
    
    print(queue3.enqueue('BM'))
    print(queue3.enqueue('KIA'))
    print(queue3.enqueue('FIAT'))
except QueueOutOfRangeException as e:
    print(e)

enhanced_queue.save()

# enhanced_queue.load()
# print(enhanced_queue.get_queue_by_name("consumer"))
# print(enhanced_queue.get_queue_by_name("cars"))




