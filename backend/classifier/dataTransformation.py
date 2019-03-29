LABEL_VALUES = ['e', 'p']
FEATURE_VALUES = [
        ['b', 'c', 'x', 'f', 'k', 's'],
        ['f', 'g', 'y', 's'],
        ['n', 'b', 'c', 'g', 'r', 'p', 'u', 'e', 'w', 'y'],
        ['t', 'f'],
        ['a', 'l', 'c', 'y', 'f', 'm', 'n', 'p', 's'],
        ['a', 'd', 'f', 'n'],
        ['c', 'w', 'd'],
        ['b', 'n'],
        ['k', 'n', 'b', 'h', 'g', 'r', 'o', 'p', 'u', 'e', 'w', 'y'],
        ['e', 't'],
        ['b', 'c', 'u', 'e', 'z', 'r', '?'],
        ['f', 'y', 'k', 's'],
        ['f', 'y', 'k', 's'],
        ['n', 'b', 'c', 'g', 'o', 'p', 'e', 'w', 'y'],
        ['n', 'b', 'c', 'g', 'o', 'p', 'e', 'w', 'y'],
        ['p', 'u'],
        ['n', 'o', 'w', 'y'],
        ['n', 'o', 't'],
        ['c', 'e', 'f', 'l', 'n', 'p', 's', 'z'],
        ['k', 'n', 'b', 'h', 'r', 'o', 'u', 'w', 'y'],
        ['a', 'c', 'n', 's', 'v', 'y'],
        ['g', 'l', 'm', 'p', 'u', 'w', 'd']
    ]

def get_binary_val(value, possbile_vals):
    return [1 if cval == value else 0 for cval in possbile_vals]

def get_text_val(bin_val, possbile_vals):
    val = ""
    
    for i in range(len(bin_val)):
        if(bin_val[i] == 1):
            val = possbile_vals[i]
            break
    return val 

def parse_line(line, with_label=True):
    data = line.split(',')
    if(with_label):
        lbl = data[0]
        ftrs = data[1:]
    else:
        ftrs = data
        lbl = False
    return  ftrs, lbl

def get_binary_features(features):
    binary_features = []
      #  for i in range(len(features)-1):
    for i in range(22):
        value = str(features[i]).rstrip()
        binary_features = binary_features + get_binary_val(value,FEATURE_VALUES[i])
    return binary_features

def get_binary_label(lbl):
   return get_binary_val(lbl, LABEL_VALUES)

def get_text_label(bin_label):
    return get_text_val(bin_label, LABEL_VALUES)




