import os
import time
from collections import Counter

from streamparse import Bolt


class WordCountBolt(Bolt):
    outputs = ['word', 'count']

    def initialize(self, conf, ctx):
        self.counter = Counter()
        self.pid = os.getpid()
        self.total = 0

    def _increment(self, word, inc_by):
        self.counter[word] += inc_by
        self.total += inc_by

    def process(self, tup):
        word = tup.values[0]
        self._increment(word, len(word))
        #if self.total % 1000 == 0:
            #self.logger.info("counted [{:,}] words [pid={}]".format(self.total,self.pid))
	self.logger.info("Word counted: %s, Number of letters: %d, Total Count: %d" %(word, len(word), self.total))

        self.emit([word, self.counter[word]])
	time.sleep(1)
