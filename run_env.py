'''
Created on 2020年4月20日

@author: stephen
'''

import io
import os
import __init__

string_hooker_jscode = io.open('./js/string_hooker.js','r',encoding= 'utf8').read()

json_jscode = io.open('./js/json.js','r',encoding= 'utf8').read()

classes_hooker_jscode = __init__.classes_hooker_js

hooking_java_net_url_jscode = __init__.hooking_java_net_url_js

hooking_okhttp_3_jscode = __init__.hooking_okhttp_3_js

print_stacks_jscode = __init__.print_stacks_js

check_radar_dex_jscode = __init__.check_radar_dex_js

def init(packageName):
    if packageName == None:
        return
    if os.path.exists(packageName+"/json.js"):
        json_jscode = io.open(packageName+"/json.js",'r',encoding= 'utf8').read()

