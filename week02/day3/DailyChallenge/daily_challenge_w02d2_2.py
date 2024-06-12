# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

wallet = "$30" 



price_list = {key: int(value.replace("$","").replace(",","")) for (key, value) in items_purchase.items()}
money_left = int(wallet.replace("$","").replace(",",""))
shopping_list = []

for item, price in price_list.items():
    if price <= money_left:
        shopping_list.append(item)
        money_left -= price
    if money_left == 0:
        break

shopping_list.sort()

print(f"With {wallet} you can buy {'Nothing' if len(shopping_list)==0 else shopping_list}")


