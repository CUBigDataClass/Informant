"""
Tweet Sentiment Processing topology
"""

from streamparse import Grouping, Topology

from bolts.processAmazon import ProcessAmazon
from bolts.processApple import ProcessApple
from bolts.processFacebook import ProcessFacebook
from bolts.processGoogle import ProcessGoogle
from bolts.processLyft import ProcessLyft
from bolts.processMicrosoft import ProcessMicrosoft
from bolts.processTwitter import ProcessTwitter
from bolts.processUber import ProcessUber

from spouts.tweets import TweetSpout


class TweetProcess(Topology):
    tweet_spout = TweetSpout.spec()

    amazon_bolt = ProcessAmazon.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    apple_bolt = ProcessApple.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    facebook_bolt = ProcessFacebook.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    google_bolt = ProcessGoogle.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    lyft_bolt = ProcessLyft.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    microsoft_bolt = ProcessMicrosoft.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    twitter_bolt = ProcessTwitter.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
    uber_bolt = ProcessUber.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=1)
