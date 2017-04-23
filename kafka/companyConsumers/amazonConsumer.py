#!/usr/bin/env python

from kafka import KafkaConsumer
consumer = KafkaConsumer('amazonReader')


if __name__ == "__main__":
	i = 0
	for msg in consumer:
		i += 1
		print "On consumer message",i
