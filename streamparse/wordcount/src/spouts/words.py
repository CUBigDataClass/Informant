from itertools import cycle
from streamparse import Spout

from socketIO_client import SocketIO, BaseNamespace


class Namespace(BaseNamespace):

    def on_connect(self):
        print('[Connected]')

    def on_reconnect(self):
        print('[Reconnected]')

    def on_disconnect(self):
        print('[Disconnected]')


tweet = ""

def on_tweet(self,*args):
    tweet = args


class WordSpout(Spout):
    outputs = ['word']

    def initialize(self, stormconf, context):
        socketIO = SocketIO('localhost', 4000, Namespace)
        socketIO.on('tweet', self.on_tweet)
        socketIO.wait()

    def on_tweet(self,*args):
        tweet = args[0].encode('utf-8')
        self.emit([tweet])

    def next_tuple(self):
        word = tweet

        self.emit([word])
