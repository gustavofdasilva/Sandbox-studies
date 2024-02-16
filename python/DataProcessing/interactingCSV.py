import csv

with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/randomData.csv', newline='') as csv_file:
    with open('C:/Gustavo/repos/Sandbox-studies/python/DataProcessing/content/randomData2.csv', 'w',newline='') as output_file:
        file = csv.reader(csv_file, dialect='excel')
        writer = csv.writer(output_file, dialect='excel')
        for row in file:
            try:
                if row[3].lower() != 'pago':
                    writer.writerow(row)
            except ValueError:
                print(row)


            

        


   