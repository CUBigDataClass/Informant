import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# Bind the socket to the port
server_address = ('localhost', 6150)
sock.bind(server_address)

while True:

    try:
        # Receive the data in small chunks and retransmit it
        while True:
            data = sock.recv(1024)
            if data:
                print data

    finally:
        sock.close()
