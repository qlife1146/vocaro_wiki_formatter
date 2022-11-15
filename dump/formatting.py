file_path = 'kasi.txt'
write_list = []

with open(file_path) as f:
    lines = f.readlines()

lines = [line.rstrip('\n') for line in lines]


for i in range(len(lines)):
    if lines[i] != '':
        write_list.append(lines[i])

with open('kasi.txt', 'w') as f:
    for i in write_list:
        f.write('|| ' + i + ' ||\n')
