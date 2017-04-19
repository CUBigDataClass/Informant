from streamparse import Spout
from socketIO_client import SocketIO

class TweetSpout(Spout):
    outputs = ['tweet']

    def initialize(self, stormconf, context):
        socketIO = SocketIO('localhost', 4000)
        socketIO.on('tweet', self.on_tweet)
        socketIO.wait()

    def on_tweet(self,*args):
        tweet = args[0]
        self.emit([tweet])
