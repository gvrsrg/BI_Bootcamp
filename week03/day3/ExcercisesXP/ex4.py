# Create a function that displays the current date.
# Hint : Use the datetime module.


from datetime import date

def show_current_date():
    current_date = date.today()
    print(f"It's {current_date.strftime('%A, %d of %B, %Y')}")
    return current_date

def main():
    show_current_date()

if __name__ == "__main__":
    main()
