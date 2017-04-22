#!/usr/bin/env python

from kafka import KafkaConsumer
consumer = KafkaConsumer('tweetReader')


if __name__ == "__main__":
        i = 0
	print "Starting Consumer"
        for msg in consumer:
                print msg
		#i += 1
                #print "On consumer message",i

