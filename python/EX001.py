def sayHi(): 
    name = input("Your name:")
    if(name != ''):
        print(f'Hello {name}!')
        return
    print("Give a name!")

sayHi()
