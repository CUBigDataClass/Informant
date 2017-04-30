#!/usr/bin/env python
# -*- coding: utf-8 -*- 

import urllib2
import base64
import json
import xml
import sys

from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:9092',value_serializer=lambda v: json.dumps(v).encode('utf-8'))
class poster(object):
	def __init__(self):
		self.nextToken = ""

	def post(self):

		url = 'https://gnip-api.twitter.com/search/fullarchive/accounts/greg-students/prod.json'
		UN = 'michael.xiao@colorado.edu'
		PWD = 'informant'
		rule = '(@Uber OR @uber) lang:en -ads -advertisement ' #Write JSON rules here
		
		if self.nextToken != "":
			query = '{"query":"' + rule + '","fromDate":"201704150000","maxResults": "50", "next": %s }' %(self.nextToken,) 
		else:
			  query = '{"query":"' + rule + '","fromDate":"201704150000","maxResults": "50"}'

		base64string = base64.encodestring('%s:%s' % (UN, PWD)).replace('\n', '')
		req = urllib2.Request(url=url, data=query)
		req.add_header('Content-type', 'application/json')
		req.add_header("Authorization", "Basic %s" % base64string)
		
		try:
			response = urllib2.urlopen(req)
			the_page = response.read()
			data = json.loads(the_page)
			if self.nextToken == "":
				self.nextToken = "\""+data['next']+"\""
			elif self.nextToken != data['next']:
				self.nextToken = "\""+data['next']+"\""
			
			for i in range(0,500):
				tweet = data['results'][i]['body']
				print tweet
				producer.send('uberReader',tweet)

		except urllib2.HTTPError as e:
			print e.read()
	
	def contPost(self):
		while True:
			self.post()	

if __name__ == "__main__":
	postReq = poster()
	
	postReq.contPost()
