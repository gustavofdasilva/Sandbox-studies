class Vehicle:
    speed = 0
    color = ""
    model = ""
    def __init__(self,speed=0,color="",model=""):
            self.speed = speed
            self.model = model
            self.color = color
    def increase_speed(self, value):
        self.speed = self.speed+value
    def stop(self):
        self.speed = 0     
class Car(Vehicle):
    trunk_open = False
    def __init__(self,trunk_open=False):
        self.trunk_open = trunk_open
        super().__init__()
    def open_trunk(self):
        self.trunk_open = True
    def close_trunk(self):
        self.trunk_open = False
class Motorcycle(Vehicle):
    center_stand_out = False
    def __init__(self, center_stand_out = False):
        self.center_stand_out = center_stand_out
        super().__init__()     
car1 = Car()

print(f"""
INFO:
    model: {car1.model}
    color: {car1.color}
    speed: {car1.speed}
""")