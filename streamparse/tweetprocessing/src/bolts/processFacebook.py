import os
from streamparse import Bolt
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob

class ProcessFacebook(Bolt):
    outputs = ['avgScore', 'average']

    def initialize(self, conf, ctx):
        self.total = 0
        self.average = 0


    def _increment(self, sentiment):
        oldSum = self.average * self.total
        self.total += 1
        self.average = (oldSum + sentiment)/self.total

    def process(self, tup):
        tweet = tup.values[0]
        if(tweet is not None):
            if(("facebook" in tweet) or ("Facebook" in tweet)):
                analyzer = SentimentIntensityAnalyzer() #Initialize Vader Analyzer
                vaderScore = analyzer.polarity_scores(tweet) #Calculate Vader Score
                textBlobScore = TextBlob(tweet).sentiment.polarity #Calculate TextBlob Score
                avgScore = (vaderScore['compound'] + textBlobScore) /2 #Take the average

                if avgScore != 0.0:
                    self._increment(avgScore)

                self.logger.info("Tweet Score: %.4f, Cumulative Score: %.4f" %(avgScore, self.average))
                self.emit([avgScore, self.average])
