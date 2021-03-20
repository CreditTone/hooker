'''
Created on 2020年6月6日

@author: stephen
'''
def withColor(string, fg, bg=49):
    print("\33[0m\33[%d;%dm%s\33[0m" % (fg, bg, string))
#front color
Red = 1
Green = 2
Yellow = 3
Blue = 4
Magenta = 5
Cyan = 6
White = 7
 
def red(string):
    return withColor(string, Red+30) # Red
def green(string):
    return withColor(string, Green+30) # Green
def yellow(string):
    return withColor(string, Yellow+30) # Yellow
def blue(string):
    return withColor(string, Blue+30) # Blue
def magenta(string):
    return withColor(string, Magenta+30) # Magenta
def cyan(string):
    return withColor(string, Cyan+30) # Cyan
def white(string):
    return withColor(string, White+30) # White
