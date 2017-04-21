import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to the port
server_address = ('localhost', 5000)
sock.bind(server_address)

# Listen for incoming connections
sock.listen(0)

while True:
    # Wait for a connection
    connection, client_address = sock.accept()

    try:
        # Receive the data in small chunks and retransmit it
        while True:
            data = connection.recv(1024)
            if data:
                print data

    finally:
        connection.close()
