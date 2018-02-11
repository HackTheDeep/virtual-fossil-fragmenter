import numpy as np

from scipy import ndimage
from scipy import misc

basedir = '/home/luis_ibanez/src/HackTheDeep/challenges/Virtual_Fossil_Fragmenter/'
outputdir = '/home/luis_ibanez/public_html/hack_the_deep/'

mollusks = ndimage.imread(fname=basedir+'mollusk-100iso-01.jpg')

shell1 = np.copy(mollusks[280:840,480:960])
misc.imsave(name=outputdir + 'shell1.jpg', arr=shell1)
