from itertools import cycle

from streamparse import Spout

class WordSpout(Spout):
    outputs = ['word']

    def initialize(self, stormconf, context):
        self.words = cycle(['Ecstatic','Joyous','Optimistic','Happy','Amused','Good','Indifferent','Awful','Enraged','Furious'])


    def next_tuple(self):
        word = next(self.words)
        self.emit([word])
