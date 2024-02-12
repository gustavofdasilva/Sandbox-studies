import os
import shutil


mainDir = 'C:/Gustavo/repos/Sandbox-studies/tests/'

shutil.copy(f'{mainDir}/updatedTests/testText3.txt',f'{mainDir}')


    

with open(f'{mainDir}/testText3.txt','r') as file:
    for line in file:
        if "200" not in line:
            print(line)
        else:
            print("200 founded!")
    
 
