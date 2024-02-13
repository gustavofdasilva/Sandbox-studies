import subprocess
subprocess.run(["python"], input="""
for i in range(1,3):
    print(f'Hello World! {i}')               

""",capture_output=False, encoding='UTF-8')

