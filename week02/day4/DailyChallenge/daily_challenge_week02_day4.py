message = "a2w.e9r)s_df"
for index, char in enumerate(message):
    if not char.isalpha():
        message = message.replace(char, " ")

message = message.replace("  ", " ")
print(message)