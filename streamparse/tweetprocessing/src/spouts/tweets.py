from streamparse import Spout
import socket
import sys

#from socketIO_client import SocketIO

class TweetSpout(Spout):
    outputs = ['tweet']

    def initialize(self, stormconf, context):
        # socketIO = SocketIO('localhost', 4000)
        # socketIO.on('tweet', self.on_tweet)
        # socketIO.wait()

        # Create a TCP/IP socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # Bind the socket to the port
        server_address = ('localhost', 7000)
        sock.bind(server_address)

        while True:
            data = sock.recv(1024)
            if data:
                self.on_tweet(data)

    def on_tweet(self,*args):
        tweet = args[0]
        self.emit([tweet])
