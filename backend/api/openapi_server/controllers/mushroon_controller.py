import connexion
import six

from openapi_server.models.mushroom import Mushroom  # noqa: E501
from openapi_server.models.unexpected_error import UnexpectedError  # noqa: E501
from openapi_server import util
from  openapi_server.classifier.mushroom_classifier import MushroomClassifier
#from openapi_server import mushroom_classifier

def get_history(last=None):  # noqa: E501
    """Lists all previous predictions of mushrooms

     # noqa: E501

    :param last: Display the last N predictions
    :type last: int

    :rtype: List[Mushroom]
    """


    ## Todo read from Redis
    return 'do some magic!'


def predict(mushroom):  # noqa: E501
    """Get a new mushroom prediction

     # noqa: E501

    :param mushroom: Mushroom descriptive data
    :type mushroom: dict | bytes

    :rtype: Mushroom
    """
    mushroom_classifier = MushroomClassifier("openapi_server/classifier/mushroom.model")
    
    if connexion.request.is_json:
        mushroom = Mushroom.from_dict(connexion.request.get_json())  # noqa: E501
    mrclass = mushroom_classifier.predict(mushroom.toDataString)
    mushroom._class = mrclass[0]
    ##Todo save in redis
    return mushroom
