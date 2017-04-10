from itertools import cycle

from streamparse import Spout

import tweepy
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
from tweepy import Stream

# enter the corresponding information from your Twitter application:
# keep the quotes, replace this with your consumer key
CONSUMER_KEY = 'GfMtCUKhLwaz340D2OoVPKBKE'
# keep the quotes, replace this with your consumer secret key
CONSUMER_SECRET = 'zuTtVGTkzmQlYXnHa0Cn9Mg3pW4tDGh2s5cvqMVxVRFB9CArdF'
# keep the quotes, replace this with your access token
ACCESS_KEY = '838120217368756228-gumly1EgzoYD25cwNY4Bx5lEjTA8mdJ'
# keep the quotes, replace this with your access token secret
ACCESS_SECRET = 'WRF3D3QsjiOjRS1rTO8Skm2WSyusrxgZl0XEUJ4XP1edb'
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
# api = tweepy.API(auth)
#
# for status in tweepy.Cursor(api.home_timeline).items(10):
#     # Process a single status
#     print(status.text)


class MyListener(StreamListener):

    def on_data(self, data):
	self.data = data
        return True

    def on_error(self, status):
        print(status)
        return True

class WordSpout(Spout):
    outputs = ['word']

    def initialize(self, stormconf, context):
        self.words = cycle(['dog', 'cat', 'zebra', 'elephant'])


    def next_tuple(self):
        word = next(self.words)
        self.emit([word])
