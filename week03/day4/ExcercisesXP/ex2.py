import json
import os
from datetime import date

def main():
    sampleJson = """{ 
        "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
    }"""

    my_dict = json.loads(sampleJson)

    salary = my_dict["company"]["employee"]["payable"]["salary"]
    print(f"The salary is {salary}")

    my_dict["company"]["employee"]["birth_date"] = str(date(2000,1,1))

    path = os.path.dirname(os.path.realpath(__file__))
    json_full_name = path+"\\company.json"
    with open(json_full_name,"w") as file:
        json.dump(my_dict, file)

    



if __name__ == "__main__":
    main()