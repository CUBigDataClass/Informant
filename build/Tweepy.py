#!/usr/bin/env python
# -*- coding: utf-8 -*-

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
        try:
            with open('python.json', 'w') as f:
                f.write('[' + data + ']')
                return True
        except BaseException as e:
            print('Error on_data: % s'
                  % str(e))
        return True

    def on_error(self, status):
        print(status)
        return True

twitter_stream = Stream(auth, MyListener())
twitter_stream.filter(track=['Google'])
