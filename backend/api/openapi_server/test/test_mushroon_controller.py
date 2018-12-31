# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from openapi_server.models.mushroom import Mushroom  # noqa: E501
from openapi_server.models.unexpected_error import UnexpectedError  # noqa: E501
from openapi_server.test import BaseTestCase


class TestMushroonController(BaseTestCase):
    """MushroonController integration test stubs"""

    def test_get_history(self):
        """Test case for get_history

        Lists all previous predictions of mushrooms
        """
        query_string = [('last', 56)]
        response = self.client.open(
            '/v1/mushrooms',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_predict(self):
        """Test case for predict

        Get a new mushroom prediction
        """
        response = self.client.open(
            '/v1/mushrooms',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
