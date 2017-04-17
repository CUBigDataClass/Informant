"""
Word count topology
"""

from streamparse import Grouping, Topology

from bolts.processUber import ProcessUber
from bolts.processMicrosoft import ProcessMicrosoft
from spouts.tweets import TweetSpout


class TweetProcess(Topology):
    tweet_spout = TweetSpout.spec()
    uber_bolt = ProcessUber.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
    microsoft_bolt = ProcessMicrosoft.spec(inputs={tweet_spout: Grouping.fields('tweet')},par=2)
