FILE = 'test.txt'

def passwd_to_dict(filename):
    users = {}
    with open(filename, 'r') as myFile:
        for line in myFile:
            if not line.startswith(('\n', '#')):
                user_info = line.split(':')
                users[user_info[0]] = int(user_info[2])
        return users
            
print(passwd_to_dict(FILE))