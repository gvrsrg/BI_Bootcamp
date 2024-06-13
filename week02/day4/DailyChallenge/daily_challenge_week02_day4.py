message = [
    ["7","i","i"],
    ["T","s","x"],
    ["h","%","?"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
    ]



def transpose_matrix(matrix):
    rows = len(message)
    cols = len(message[0])
    transposed_matrix = [[] for _ in message[0]]
    

    for row in matrix:
        for index, value in enumerate(row):
            transposed_matrix[index].append(value)
    return transposed_matrix


def reduce_matrix(matrix):
    new_matrix = sum(matrix, [])
    # for row in matrix:
    #     line = ''.join(row)
    #     new_matrix.append(line)

    return ''.join(new_matrix)

def decode_message(message):
    for char in  (message):
        if not char.isalpha():
            message = message.replace(char, " ")
    while message.find("  ")>0:
        message = message.replace("  ", " ").strip()

    return message

new_matrix = transpose_matrix(message)
encoded_message = reduce_matrix(new_matrix)
print(encoded_message)

decoded_message = decode_message(encoded_message)

print(decoded_message)