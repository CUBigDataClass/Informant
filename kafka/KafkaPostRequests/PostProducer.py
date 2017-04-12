#!/usr/bin/env python

import urllib2
import base64
import json
import xml
import sys

from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:9092',value_serializer=lambda v: json.dumps(v).encode('utf-8'))

def post():

        url = ''
        UN = ''
        PWD = ''

        rule = 'Apple -fruit lang:en' #Write JSON rules here

        query = '{"query":"' + rule + '","fromDate":"201703250000","maxResults":"100"}'


        base64string = base64.encodestring('%s:%s' % (UN, PWD)).replace('\n', '')
        req = urllib2.Request(url=url, data=query)
        req.add_header('Content-type', 'application/json')
        req.add_header("Authorization", "Basic %s" % base64string)

        try:
                for i in range(0,10):
                        response = urllib2.urlopen(req)
                        the_page = response.read()
                        producer.send('gnipReader',the_page)
                        print the_page
                        print "Sent post request to kafka queue"

        except urllib2.HTTPError as e:
                print e.read()

if __name__ == "__main__":
        post()

