#!/usr/bin/env python

#Source: https://github.com/gnip/support/blob/master/Search%20API/Python/GetRequest.py
#We can build this to do specifically what we want

import urllib2
import base64
import json
import xml
import sys

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

        company = raw_input("Enter a company to get data about: ")

        url = '' #Gnip url
        UN = '' #Username
        PWD = '' #Password
        query = 'Facebook&maxResults=50' #Change Query Here, you can also add filters 
        #For more filtering options: http://support.gnip.com/apis/search_full_archive_api/rules.html#Operators

        queryString = url + '?query=' + query

        base64string = base64.encodestring('%s:%s' % (UN, PWD)).replace('\n', '')

        req = RequestWithMethod(queryString, 'GET')
        req.add_header("Authorization", "Basic %s" % base64string)

        try:
                response = urllib2.urlopen(req)
                the_page = response.read()
                print the_page
        except urllib2.HTTPError as e:
                print e.read()

