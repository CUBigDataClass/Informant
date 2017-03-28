#!/usr/bin/env python

#Python sandbox script that gets tweets from gnip and runs both Vader and TextBlob analysis on tweets
#For learning purposes
import urllib2
import base64
import json
import xml
import sys

#Imports needed
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob

def post():

        url = ''
        UN = ''
        PWD = ''

        #apple = '(Apple OR iphone OR ipad OR Apple Company OR Apple Mac OR Macbook OR Apple Product OR Apple Computer OR @Apple OR #Apple OR #ios) -fruit -pie -food -tree -advertisement -ad lang:en' #Write JSON rules here
        #apple = 'lang:en Apple OR @Apple -fruit'       

	#Sample Queries for testing purposes listed below
        microsoft = 'Microsoft OR Windows OS OR @Microsoft lang:en -(advertisement OR ad OR Xbox)'

        uber = 'Uber @uber lang:en -(advertisements OR advertisement OR ad)'

        google = 'Google @google lang:en -(advertisements OR advertisement OR ad)'
        
	query = '{"query":"' + microsoft + '","fromDate":"201703220000","maxResults":"15"}'

        base64string = base64.encodestring('%s:%s' % (UN, PWD)).replace('\n', '')
        req = urllib2.Request(url=url, data=query)
        req.add_header('Content-type', 'application/json')
        req.add_header("Authorization", "Basic %s" % base64string)

        try:
                response = urllib2.urlopen(req)
                the_page = response.read()
		#print the_page
                data = json.loads(the_page)
		#print "DATA" , data['results'][0]['extended_entities']
		#print "DATA=======", data['results'][0]['id']
                print "-------------------------------------Text Values below-----------------------------------------------"
                i = 0
                analyzer = SentimentIntensityAnalyzer() #Initialize Vader Analyzer
                for item in data['results']: 
                        sentence = data['results'][i]['text']
                        vaderScore = analyzer.polarity_scores(sentence) #Calculate Vader Score
                        textBlobScore = TextBlob(sentence) 		#Calculate TextBlob Score
                        avgScore = (vaderScore['compound'] + textBlobScore.sentiment.polarity) /2 #Take the average of the two scores
			#Print Analysis from Vader, TextBlob, and their average
                        print "Tweet Data: ", sentence, "\n----------------> Vader Score: ",str(vaderScore) 
                        print "----------------> TextBlob Score: ", str(textBlobScore.sentiment.polarity)
                        print "----------------> Average Score: ", avgScore
                        i += 1
    
        except urllib2.HTTPError as e:
                print e.read()
    
if __name__ == "__main__": 
        post() 

