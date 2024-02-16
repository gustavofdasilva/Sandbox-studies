import json
import jmespath as jpath

filePath = 'C:/Gustavo/repos/Sandbox-studies/python/workingWJSON/content'

with open(f'{filePath}/projectsinfo.json', 'r') as file:
    data = json.load(file)

additionalData = {
    'name':'Eric',
    'age':38
}

with open(f'{filePath}/projectsinfo2.json', 'w') as file:
    json.dump(additionalData, file, )

with open(f'{filePath}/projectsinfo.json','r') as file: 
    data = json.load(file)
    titles = list(jpath.search("[?status=='completed'].title.ptbr",data))
    titles.sort()
    print(titles)