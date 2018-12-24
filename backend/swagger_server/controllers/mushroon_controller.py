import connexion
import six

from swagger_server.models.mushroom import Mushroom  # noqa: E501
from swagger_server.models.mushrooms import Mushrooms  # noqa: E501
from swagger_server.models.unexpected_error import UnexpectedError  # noqa: E501
from swagger_server import util


def get_history(last=None):  # noqa: E501
    """Lists all previous predictions of mushrooms

     # noqa: E501

    :param last: Display the last N predictions
    :type last: int

    :rtype: Mushrooms
    """
    return 'do some magic!'


def predict():  # noqa: E501
    """Get a new mushroom prediction

     # noqa: E501


    :rtype: Mushroom
    """
    return 'do some magic!'
