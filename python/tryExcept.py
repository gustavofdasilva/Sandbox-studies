def divideNumbers():
    number1 = input("Set number one: ")
    number2 = input("Set number two: ")
    if(number1 == ""):
        number1 = 0
    if(number2 == ""):
        number2 = 0
    try:
        print(number1/number2)
    except ZeroDivisionError:
        print("You can't divide these two numbers!")
    finally:
        print("closing...")
    
divideNumbers()

def f(a,b):
    print(a,b)

f(**{"a":1, "b":2})

andone = lambda user: user+2