#!/usr/bin/env python

#Source: https://github.com/gnip/support/blob/master/Search%20API/Python/GetRequest.py

#To run:
#Start a zookeeper server, then start a kafka server
#Create a kafka topic with the name of gnipReader
# URL for commands: https://kafka.apache.org/quickstart

import urllib2
import base64
import json
import xml
import sys

#Simple Kafka Producer and Consumer
from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:9092',value_serializer=lambda v: json.dumps(v).encode('utf-8'))

class RequestWithMethod(urllib2.Request):
    def __init__(self, url, method, headers={}):
        self._method = method
        urllib2.Request.__init__(self, url, headers)

    def get_method(self):
        if self._method:
            return self._method
        else:
            return urllib2.Request.get_method(self)

if __name__ == "__main__":

        url = ''
        UN = ''
        PWD = '' 
        query = 'Apple&maxResults=50&fromDate=201703250000' #Change Query Here, you can also add filters 
        #For more filtering options: http://support.gnip.com/apis/search_full_archive_api/rules.html#Operators
        #Also: http://support.gnip.com/apis/search_full_archive_api/api_reference.html
        queryString = url + '?query=' + query

        base64string = base64.encodestring('%s:%s' % (UN, PWD)).replace('\n', '')

        req = RequestWithMethod(queryString, 'GET')
        req.add_header("Authorization", "Basic %s" % base64string)

        try:
                i = 0
                while True: #Will continue to send messages to the topic till interrupted or terminated
                        i = i + 1
                        response = urllib2.urlopen(req)
                        the_page = response.read()
                        #print the_page
                        producer.send('gnipReader', the_page)
                        print "Message Sucessfully sent"
                        print "Message Number",i
        except urllib2.HTTPError as e:
                print e.read()

