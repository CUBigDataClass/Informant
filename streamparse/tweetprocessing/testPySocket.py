from socketIO_client import SocketIO, BaseNamespace

class Namespace(BaseNamespace):

    def on_connect(self):
        print('[Connected]')

    def on_reconnect(self):
        print('[Reconnected]')

    def on_disconnect(self):
        print('[Disconnected]')

def on_tweet(*args):
    if args[0] is not None:
        print(str(args[0].encode('utf-8')))

socketIO = SocketIO('localhost', 3333, Namespace)
socketIO.on('tweet', on_tweet)
socketIO.wait()
