m = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
def print_matriz(mat,x1,x2,y1,y2):
    matriz = []
    for i in mat:
        for j in i:
            x = mat.index(i)+1
            y = i.index(j)+1
            if (x >= x1 and x <= x2) and (y >= y1 and y <= y2):
                
                matriz.append(i[y-1])
    return matriz

print(print_matriz(m,1,2,1,3))