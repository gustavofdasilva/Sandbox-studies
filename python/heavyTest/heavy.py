def heavyfunc(num,_id):
    for x in range(1,num):
        for y in range(1, num):
            x**y
    print("Finish calculation: ",_id)

heavyfunc(2000,23)