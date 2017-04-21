from socketIO_client import SocketIO
import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect the socket to the port where the server is listening
server_address = ('localhost', 5000)
sock.connect(server_address)


# Client handler
def on_tweet(*args):

    if args[0] is not None:
        message = str(args[0].encode('utf-8'))

        try:
            # Send data
            sock.sendall(message)
        except:
            pass


# Client setup
socketIOclient = SocketIO('localhost', 4000)
print "Setting up client"
socketIOclient.on('tweet', on_tweet)
socketIOclient.wait()

sock.close()
