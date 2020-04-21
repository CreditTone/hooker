'''
Created on 2020年4月20日

@author: stephen
'''

import io

def readJs(filename):
    return io.open('./js/' + filename,'r',encoding= 'utf8').read()

base_jscode = readJs("base.js")

rpc_jscode = base_jscode + readJs("rpc.js")

java_net_url_jscode = readJs("java_net_url.js")

okhttp_3_jscode = readJs("okhttp3_request_builder.js")

def init(packageName):
    if packageName == None:
        return

