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

# import pandas as pd
# import json

# with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/projectsinfo.json') as file:
#     data = json.load(file)
#     writer = pd.ExcelWriter('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/toJson.xlsx',engine='xlsxwriter', if_sheet_exists=None, mode='w')
#     df = pd.DataFrame(data)
#     df.to_excel(writer,sheet_name='toJson',index=False)
#     writer.close()
    
# import pandas as pd
# excel = pd.ExcelFile('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/empty_test3.xlsx')
# df = pd.read_excel(excel)['Name'][1]
# print(df)

import pandas as pd
writer = pd.ExcelWriter('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/empty_test3.xlsx', mode='a', engine='openpyxl', if_sheet_exists='replace')
data=[
    {'Name':'Hugo',"Age":'23'},
    {'Name':'ugo',"Age":'25'},
    {'Name':'go',"Age":'27'}
    ]

df = pd.read_excel('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/empty_test3.xlsx', sheet_name='1')
newRow = {'Name':'go',"Age":'27'}
df['Age']=df['Age']*2

df.to_excel(writer,sheet_name='1',index=False)

writer.close()
