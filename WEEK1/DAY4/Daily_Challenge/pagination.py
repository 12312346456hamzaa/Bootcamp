import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        """
        Initialise la pagination avec une liste d'éléments et une taille de page.
        """
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        """
        Retourne les éléments visibles sur la page actuelle.
        """
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        """
        Navigue vers une page spécifique (index utilisateur à partir de 1).
        Lève une erreur si le numéro de page est invalide.
        """
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Invalid page number")
        self.current_idx = page_num - 1

    def first_page(self):
        """
        Va à la première page.
        """
        self.current_idx = 0
        return self

    def last_page(self):
        """
        Va à la dernière page.
        """
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        """
        Va à la page suivante si ce n'est pas la dernière.
        """
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """
        Va à la page précédente si ce n'est pas la première.
        """
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        """
        Affiche les éléments visibles sur la page actuelle, un par ligne.
        """
        return '\n'.join(self.get_visible_items())



