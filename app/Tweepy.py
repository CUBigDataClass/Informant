#!/usr/bin/env python
# -*- coding: utf-8 -*-

import tweepy
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener

# enter the corresponding information from your Twitter application:
# keep the quotes, replace this with your consumer key
CONSUMER_KEY = 'rheLbukdF8KZhPxMkD6KDEmc9 '
# keep the quotes, replace this with your consumer secret key
CONSUMER_SECRET = 'gnoUF5rJbe8Thof8YnpWZegi6mc18NihzsQncCDn5Hx4Fyks5g'
# keep the quotes, replace this with your access token
ACCESS_KEY = '811618807538130946-wrbBCKGUxWQ9HusR8uGfuRwnsZ6r4Vc'
# keep the quotes, replace this with your access token secret
ACCESS_SECRET = 'V3RMvNs1Gh0CqpePqC9EA81qbey2sNhT4j0AFXHZbqIM0'
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
# api = tweepy.API(auth)


class MyListener(StreamListener):

    def on_data(self, data):
        try:
            with open('python.json', 'a') as f:
                f.write(data)
                return True
        except BaseException as e:
            print(& quot
                   Error on_data: % s&quot
                   % str(e))
        return True

    def on_error(self, status):
        print(status)
        return True

twitter_stream = Stream(auth, MyListener())
twitter_stream.filter(track=['#python'])
