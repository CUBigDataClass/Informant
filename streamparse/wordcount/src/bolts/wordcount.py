import os
from streamparse import Bolt
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob

class WordCountBolt(Bolt):
    outputs = ['word', 'avgScore', 'average']

    def initialize(self, conf, ctx):
        self.total = 0
        self.average = 0

    def _increment(self, sentiment):
        oldSum = self.average * self.total
        self.total += 1
        self.average = (oldSum + sentiment)/self.total

    def process(self, tup):
        word = tup.values[0]
        analyzer = SentimentIntensityAnalyzer() #Initialize Vader Analyzer
        vaderScore = analyzer.polarity_scores(word) #Calculate Vader Score
        textBlobScore = TextBlob(word).sentiment.polarity #Calculate TextBlob Score
        avgScore = (vaderScore['compound'] + textBlobScore) /2 #Take the average
        self._increment(avgScore)

        self.logger.info("Tweet: %s, Score: %.4f, Cumulative Score: %.4f" %(word, avgScore, self.average))

        self.emit([word, avgScore, self.average])
