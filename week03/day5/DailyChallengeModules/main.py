import requests
import time


def get_data(url):
    start_time = time.time()

    response = requests.get(url)
    end_time = time.time()

    #data = response.json()

    loading_duration = end_time - start_time
    return loading_duration



def main():
    urls = [
        "http://api.open-notify.org/iss-now.json",
        "http://api.open-notify.org/astros.json",
        "http://api.open-notify.org/this-api-does-not-exist.json",
        "http://google.com",
        "http://youtube.com"
    ]

    for url in urls:
        loading_duration = get_data(url)
        print(f"loading time of {url} is {loading_duration} seconds")

    

if __name__ =="__main__":
    main()

