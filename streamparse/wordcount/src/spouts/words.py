from itertools import cycle
from streamparse import Spout
from socketIO_client import SocketIO, BaseNamespace

class WordSpout(Spout):
    outputs = ['word']

    def initialize(self, stormconf, context):
        socketIO = SocketIO('localhost', 4000)
        socketIO.on('tweet', self.on_tweet)
        socketIO.wait()

    def on_tweet(self,*args):
        tweet = args[0].encode('utf-8')
        self.emit([tweet])
