class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE
    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __repr__(self) -> str:
        return self.__str__()
    
    def __int__(self) -> int:
        return self.amount
    
    def __add__(self, other):
        if isinstance(other, Currency) and other.currency == self.currency:
            return self.amount + other.amount
        if isinstance(other, int) or isinstance(other, float):
            return self.amount + other
        elif isinstance(other, Currency) :
            raise ValueError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            raise TypeError(f"Cannot add between Currency and {type(other)}")
        
    def __iadd__(self, num):
        if isinstance(num, int) or isinstance(num, float):
            self.amount += num
            return self
        elif isinstance(num, Currency) and num.currency == self.currency:
            self.amount += num.amount
            return self
        else:
            raise ValueError(f"Cannot add between Currency and {type(other)}")
    


    
    


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1)
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>
