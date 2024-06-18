# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

import datetime

def time_to_Jan_1st(current_date):
    jan_1st = datetime.datetime(current_date.year+1, 1, 1)
    time_left = jan_1st - current_date
    ts = time_left.total_seconds()
    hours = int((ts % 86400) // 3600)
    minutes = int((ts % 3600) // 60)
    seconds = int(ts % 60)
    print(f"The 1st of January is in {time_left.days} days and {hours:02} hours {minutes:02} minutes {seconds:02} seconds")
    return time_left


def main():
    curr_date = datetime.datetime.now()
    time_to_Jan_1st(curr_date)
    

if __name__ =="__main__":
    main()
