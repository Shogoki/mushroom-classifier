import connexion
import six

from openapi_server.models.mushroom import Mushroom  # noqa: E501
from openapi_server.models.unexpected_error import UnexpectedError  # noqa: E501
from openapi_server import util
from  openapi_server.classifier.mushroom_classifier import MushroomClassifier
#from openapi_server import mushroom_classifier
from pymongo import MongoClient


def connect_db():
    client = MongoClient('mongo',27017)
    db = client.mushroom_prediction

    return db.history

def get_history(last=None):  # noqa: E501
    """Lists all previous predictions of mushrooms

     # noqa: E501

    :param last: Display the last N predictions
    :type last: int

    :rtype: List[Mushroom]
    """
    #reading all previous predictions from database
    db = connect_db()
    history = []
    for prediction in db.find():
        history.append(Mushroom.from_dict(prediction))
    #mushroom_history = list(db.find())
    #print (mushroom_history)
    
    return history


def predict():  # noqa: E501
    """Get a new mushroom prediction

     # noqa: E501

    :param mushroom: Mushroom descriptive data
    :type mushroom: dict | bytes

    :rtype: Mushroom
    """
   #loading mushroom from request    
    if connexion.request.is_json:
        mushroom_dict = connexion.request.get_json()  # noqa: E501
        mushroom = Mushroom.from_dict(mushroom_dict)
    ##Loading classifier
    mushroom_classifier = MushroomClassifier("openapi_server/classifier/mushroom.model")
    #predicting mushroom class
    mrclass = mushroom_classifier.predict(mushroom.to_data_string())
    mushroom._class = mrclass[0]
    #also setting in dict for saving in MongoDB //TODO: make Mushroom class iterable
    mushroom_dict['class'] = mrclass[0]
    #save to mongodb
    db = connect_db()
    db.insert_one(dict(mushroom_dict))
    #returning mushroom object
    return mushroom
