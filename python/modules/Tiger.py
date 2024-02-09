from Animals import Animals

class Tiger(Animals):
    def __init__(self,color,weight,height,sex,age):
        super().__init__(color,weight,height,age,sex)
    
    def Attack(self):
        print("Attack!")
    
    def Run(self):
        print("Run!")

