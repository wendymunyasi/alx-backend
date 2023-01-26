#!/usr/bin/env python3
"""Module for task 1.
"""
from collections import OrderedDict

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """A caching system that inherits from BaseCaching and uses a FIFO
    algorithm to discard items.

    Args:
        BaseCaching (_type_): _description_
    """
    def __init__(self):
        """Initializes the cache and calls the parent class's init method.
        """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """Assigns the item value to the key in the dictionary self.cache_data.
        If key or item is None, this method should not do anything.
        If the number of items in self.cache_data is higher than
        BaseCaching.MAX_ITEMS, the oldest item is discarded using a FIFO
        algorithm and a message is printed.

        Args:
            key (any): param1.
            item (any): param2.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first_key, _ = self.cache_data.popitem(False)
            print("DISCARD:", first_key)

    def get(self, key):
        """Retrieves an item by key.
        """
        return self.cache_data.get(key, None)
