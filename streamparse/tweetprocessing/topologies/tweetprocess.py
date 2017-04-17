"""
Word count topology
"""

from streamparse import Grouping, Topology

from bolts.processUber import ProcessUber
from bolts.processGoogle import ProcessGoogle
from bolts.processFacebook import ProcessFacebook
from bolts.processMicrosoft import ProcessMicrosoft
from spouts.tweets import TweetSpout


class TweetProcess(Topology):
    tweet_spout = TweetSpout.spec()
    uber_bolt = ProcessUber.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
    microsoft_bolt = ProcessMicrosoft.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
    google_bolt = ProcessGoogle.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
    facebook_bolt = ProcessFacebook.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
