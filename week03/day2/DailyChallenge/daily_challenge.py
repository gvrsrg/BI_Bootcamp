from __future__ import annotations

class Pagination():
    def __init__(self, items, page_size):
        self.items = items
        self.__page_size = int(page_size)
        self.__current_page = 1
        self.__total_pages = int(round(len(items)/int(page_size)+0.499,0))

    def page_size(self):
        return self.__page_size
    
    def current_page(self):
        return self.__current_page
    
    def total_pages(self):
        return self.__total_pages
    
    def set_current_page(self, page):
        if self.__current_page < 1:
            self.__current_page = 1
        elif self.__current_page > self.__total_pages:
            self.__current_page = self.__total_pages
        else:
            self.__current_page = page
        return self

    def getVisibleItems(self):
        start = self.__page_size * (self.__current_page - 1)
        end = start + self.__page_size
        return self.items[start:end]
    
    def prevPage(self):
        self.set_current_page(self.__current_page - 1)
        return self
    
    def nextPage(self):
        self.set_current_page(self.__current_page + 1)
        return self
    
    def firstPage(self):
        self.set_current_page(0)

    def lastPage(self):
        self.set_current_page(self.__total_pages)

    def goToPage(self, pageNum):
        self.set_current_page(pageNum)






def main():
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")

    p = Pagination(alphabetList, 5)

    print(p.getVisibleItems())
    # ["a", "b", "c", "d"]

    p.nextPage().nextPage()

    print(p.getVisibleItems())
    # ["e", "f", "g", "h"]

    p.lastPage()

    print(p.getVisibleItems())
    # ["y", "z"]


if __name__ == "__main__":
    main()


