import pandas as pd

with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/randomData2.csv') as file:
    csv_file = pd.read_csv(file)
    for row in csv_file:
        print(row)