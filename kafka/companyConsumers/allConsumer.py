#!/usr/bin/env python

from kafka import KafkaConsumer
import socket
import sys

consumer = KafkaConsumer('gnipReader')

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Connect the socket to the port where the server is listening
server_address = ('localhost', 7050)

if __name__ == "__main__":
	i = 0
	for msg in consumer:
		i += 1
		message = str(msg[6]).encode('utf-8')
		print message
		sock.sendto(message, server_address)
