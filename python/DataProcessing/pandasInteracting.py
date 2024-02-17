# import pandas as pd

# data = [
#     ['John','14','Lawyer'],
#     ['Klhoe','24','Medic'],
# ]

# columns_names = ['Name','Age','Occupation']


# writer = pd.ExcelWriter('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/empty_test3.xlsx',engine='xlsxwriter', if_sheet_exists=None, mode='w')

# empty_dataframe = pd.DataFrame(data=data, columns= columns_names)
# empty_dataframe.to_excel(writer, sheet_name='1', index=False, startcol=3)

# writer.close()

import pandas as pd
import json

with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/projectsinfo.json') as file:
    data = json.load(file)
    writer = pd.ExcelWriter('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/toJson.xlsx',engine='xlsxwriter', if_sheet_exists=None, mode='w')
    df = pd.DataFrame(data)
    df.to_excel(writer,sheet_name='toJson',index=False)
    writer.close()
    
    