#!/usr/bin/env python

from kafka import KafkaConsumer
import socket
import sys

consumer = KafkaConsumer('tweetReader')

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Connect the socket to the port where the server is listening
server_address = ('localhost', 7000)


if __name__ == "__main__":
        i = 0
	print "Starting Consumer"
        for msg in consumer:
                print msg[6]
                message = str(msg[6]).encode('utf-8')
                sock.sendto(message, server_address)
