import yaml
import json




with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/config.yaml') as file:
    prime_service = yaml.safe_load_all(file)
    
        

with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/config3.yaml','w') as file:
    yaml.dump('Hello',file)