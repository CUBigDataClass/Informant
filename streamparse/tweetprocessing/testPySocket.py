from socketIO_client import SocketIO, BaseNamespace

def on_tweet(*args):
    if args[0] is not None:
        print(str(args[0].encode('utf-8')))

socketIO = SocketIO('localhost', 4000)
socketIO.on('tweet', on_tweet)
socketIO.wait()
