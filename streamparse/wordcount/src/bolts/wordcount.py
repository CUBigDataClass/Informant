import os
import time
from collections import Counter
from streamparse import Bolt
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob

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

    	analyzer = SentimentIntensityAnalyzer() #Initialize Vader Analyzer
        sentence = word
        vaderScore = analyzer.polarity_scores(sentence) #Calculate Vader Score
        textBlobScore = TextBlob(sentence).sentiment.polarity              #Calculate TextBlob Score
        avgScore = (vaderScore['compound'] + textBlobScore) /2 #Take the average
	

	self.logger.info("Word: %s, Vader Score: %.4f, TextBlob Score: %.4f, Combined Score: %.4f" %(word, vaderScore['compound'], textBlobScore, avgScore))

        self.emit([word, self.counter[word]])
	time.sleep(0.5)
