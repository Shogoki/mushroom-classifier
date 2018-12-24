# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Mushroom(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, _class: str=None, cap_shape: str=None, cap_surface: str=None, cap_color: str=None, bruises: str=None, odor: str=None, gill_attachment: str=None, gill_spacing: str=None, gill_size: str=None, gill_color: str=None, stalk_shape: str=None, stalk_root: str=None, stalk_surface_above_ring: str=None, stalk_surface_below_ring: str=None, stalk_color_above_ring: str=None, stalk_color_below_ring: str=None, veil_type: str=None, veil_color: str=None, ring_number: str=None, ring_type: str=None, spore_print_color: str=None, population: str=None, habitat: str=None):  # noqa: E501
        """Mushroom - a model defined in Swagger

        :param _class: The _class of this Mushroom.  # noqa: E501
        :type _class: str
        :param cap_shape: The cap_shape of this Mushroom.  # noqa: E501
        :type cap_shape: str
        :param cap_surface: The cap_surface of this Mushroom.  # noqa: E501
        :type cap_surface: str
        :param cap_color: The cap_color of this Mushroom.  # noqa: E501
        :type cap_color: str
        :param bruises: The bruises of this Mushroom.  # noqa: E501
        :type bruises: str
        :param odor: The odor of this Mushroom.  # noqa: E501
        :type odor: str
        :param gill_attachment: The gill_attachment of this Mushroom.  # noqa: E501
        :type gill_attachment: str
        :param gill_spacing: The gill_spacing of this Mushroom.  # noqa: E501
        :type gill_spacing: str
        :param gill_size: The gill_size of this Mushroom.  # noqa: E501
        :type gill_size: str
        :param gill_color: The gill_color of this Mushroom.  # noqa: E501
        :type gill_color: str
        :param stalk_shape: The stalk_shape of this Mushroom.  # noqa: E501
        :type stalk_shape: str
        :param stalk_root: The stalk_root of this Mushroom.  # noqa: E501
        :type stalk_root: str
        :param stalk_surface_above_ring: The stalk_surface_above_ring of this Mushroom.  # noqa: E501
        :type stalk_surface_above_ring: str
        :param stalk_surface_below_ring: The stalk_surface_below_ring of this Mushroom.  # noqa: E501
        :type stalk_surface_below_ring: str
        :param stalk_color_above_ring: The stalk_color_above_ring of this Mushroom.  # noqa: E501
        :type stalk_color_above_ring: str
        :param stalk_color_below_ring: The stalk_color_below_ring of this Mushroom.  # noqa: E501
        :type stalk_color_below_ring: str
        :param veil_type: The veil_type of this Mushroom.  # noqa: E501
        :type veil_type: str
        :param veil_color: The veil_color of this Mushroom.  # noqa: E501
        :type veil_color: str
        :param ring_number: The ring_number of this Mushroom.  # noqa: E501
        :type ring_number: str
        :param ring_type: The ring_type of this Mushroom.  # noqa: E501
        :type ring_type: str
        :param spore_print_color: The spore_print_color of this Mushroom.  # noqa: E501
        :type spore_print_color: str
        :param population: The population of this Mushroom.  # noqa: E501
        :type population: str
        :param habitat: The habitat of this Mushroom.  # noqa: E501
        :type habitat: str
        """
        self.swagger_types = {
            '_class': str,
            'cap_shape': str,
            'cap_surface': str,
            'cap_color': str,
            'bruises': str,
            'odor': str,
            'gill_attachment': str,
            'gill_spacing': str,
            'gill_size': str,
            'gill_color': str,
            'stalk_shape': str,
            'stalk_root': str,
            'stalk_surface_above_ring': str,
            'stalk_surface_below_ring': str,
            'stalk_color_above_ring': str,
            'stalk_color_below_ring': str,
            'veil_type': str,
            'veil_color': str,
            'ring_number': str,
            'ring_type': str,
            'spore_print_color': str,
            'population': str,
            'habitat': str
        }

        self.attribute_map = {
            '_class': 'class',
            'cap_shape': 'cap-shape',
            'cap_surface': 'cap-surface',
            'cap_color': 'cap-color',
            'bruises': 'bruises',
            'odor': 'odor',
            'gill_attachment': 'gill-attachment',
            'gill_spacing': 'gill-spacing',
            'gill_size': 'gill-size',
            'gill_color': 'gill-color',
            'stalk_shape': 'stalk-shape',
            'stalk_root': 'stalk-root',
            'stalk_surface_above_ring': 'stalk-surface-above-ring',
            'stalk_surface_below_ring': 'stalk-surface-below-ring',
            'stalk_color_above_ring': 'stalk-color-above-ring',
            'stalk_color_below_ring': 'stalk-color-below-ring',
            'veil_type': 'veil-type',
            'veil_color': 'veil-color',
            'ring_number': 'ring-number',
            'ring_type': 'ring-type',
            'spore_print_color': 'spore-print-color',
            'population': 'population',
            'habitat': 'habitat'
        }

        self.__class = _class
        self._cap_shape = cap_shape
        self._cap_surface = cap_surface
        self._cap_color = cap_color
        self._bruises = bruises
        self._odor = odor
        self._gill_attachment = gill_attachment
        self._gill_spacing = gill_spacing
        self._gill_size = gill_size
        self._gill_color = gill_color
        self._stalk_shape = stalk_shape
        self._stalk_root = stalk_root
        self._stalk_surface_above_ring = stalk_surface_above_ring
        self._stalk_surface_below_ring = stalk_surface_below_ring
        self._stalk_color_above_ring = stalk_color_above_ring
        self._stalk_color_below_ring = stalk_color_below_ring
        self._veil_type = veil_type
        self._veil_color = veil_color
        self._ring_number = ring_number
        self._ring_type = ring_type
        self._spore_print_color = spore_print_color
        self._population = population
        self._habitat = habitat

    @classmethod
    def from_dict(cls, dikt) -> 'Mushroom':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Mushroom of this Mushroom.  # noqa: E501
        :rtype: Mushroom
        """
        return util.deserialize_model(dikt, cls)

    @property
    def _class(self) -> str:
        """Gets the _class of this Mushroom.


        :return: The _class of this Mushroom.
        :rtype: str
        """
        return self.__class

    @_class.setter
    def _class(self, _class: str):
        """Sets the _class of this Mushroom.


        :param _class: The _class of this Mushroom.
        :type _class: str
        """

        self.__class = _class

    @property
    def cap_shape(self) -> str:
        """Gets the cap_shape of this Mushroom.


        :return: The cap_shape of this Mushroom.
        :rtype: str
        """
        return self._cap_shape

    @cap_shape.setter
    def cap_shape(self, cap_shape: str):
        """Sets the cap_shape of this Mushroom.


        :param cap_shape: The cap_shape of this Mushroom.
        :type cap_shape: str
        """
        if cap_shape is None:
            raise ValueError("Invalid value for `cap_shape`, must not be `None`")  # noqa: E501

        self._cap_shape = cap_shape

    @property
    def cap_surface(self) -> str:
        """Gets the cap_surface of this Mushroom.


        :return: The cap_surface of this Mushroom.
        :rtype: str
        """
        return self._cap_surface

    @cap_surface.setter
    def cap_surface(self, cap_surface: str):
        """Sets the cap_surface of this Mushroom.


        :param cap_surface: The cap_surface of this Mushroom.
        :type cap_surface: str
        """
        if cap_surface is None:
            raise ValueError("Invalid value for `cap_surface`, must not be `None`")  # noqa: E501

        self._cap_surface = cap_surface

    @property
    def cap_color(self) -> str:
        """Gets the cap_color of this Mushroom.


        :return: The cap_color of this Mushroom.
        :rtype: str
        """
        return self._cap_color

    @cap_color.setter
    def cap_color(self, cap_color: str):
        """Sets the cap_color of this Mushroom.


        :param cap_color: The cap_color of this Mushroom.
        :type cap_color: str
        """
        if cap_color is None:
            raise ValueError("Invalid value for `cap_color`, must not be `None`")  # noqa: E501

        self._cap_color = cap_color

    @property
    def bruises(self) -> str:
        """Gets the bruises of this Mushroom.


        :return: The bruises of this Mushroom.
        :rtype: str
        """
        return self._bruises

    @bruises.setter
    def bruises(self, bruises: str):
        """Sets the bruises of this Mushroom.


        :param bruises: The bruises of this Mushroom.
        :type bruises: str
        """
        if bruises is None:
            raise ValueError("Invalid value for `bruises`, must not be `None`")  # noqa: E501

        self._bruises = bruises

    @property
    def odor(self) -> str:
        """Gets the odor of this Mushroom.


        :return: The odor of this Mushroom.
        :rtype: str
        """
        return self._odor

    @odor.setter
    def odor(self, odor: str):
        """Sets the odor of this Mushroom.


        :param odor: The odor of this Mushroom.
        :type odor: str
        """
        if odor is None:
            raise ValueError("Invalid value for `odor`, must not be `None`")  # noqa: E501

        self._odor = odor

    @property
    def gill_attachment(self) -> str:
        """Gets the gill_attachment of this Mushroom.


        :return: The gill_attachment of this Mushroom.
        :rtype: str
        """
        return self._gill_attachment

    @gill_attachment.setter
    def gill_attachment(self, gill_attachment: str):
        """Sets the gill_attachment of this Mushroom.


        :param gill_attachment: The gill_attachment of this Mushroom.
        :type gill_attachment: str
        """
        if gill_attachment is None:
            raise ValueError("Invalid value for `gill_attachment`, must not be `None`")  # noqa: E501

        self._gill_attachment = gill_attachment

    @property
    def gill_spacing(self) -> str:
        """Gets the gill_spacing of this Mushroom.


        :return: The gill_spacing of this Mushroom.
        :rtype: str
        """
        return self._gill_spacing

    @gill_spacing.setter
    def gill_spacing(self, gill_spacing: str):
        """Sets the gill_spacing of this Mushroom.


        :param gill_spacing: The gill_spacing of this Mushroom.
        :type gill_spacing: str
        """
        if gill_spacing is None:
            raise ValueError("Invalid value for `gill_spacing`, must not be `None`")  # noqa: E501

        self._gill_spacing = gill_spacing

    @property
    def gill_size(self) -> str:
        """Gets the gill_size of this Mushroom.


        :return: The gill_size of this Mushroom.
        :rtype: str
        """
        return self._gill_size

    @gill_size.setter
    def gill_size(self, gill_size: str):
        """Sets the gill_size of this Mushroom.


        :param gill_size: The gill_size of this Mushroom.
        :type gill_size: str
        """
        if gill_size is None:
            raise ValueError("Invalid value for `gill_size`, must not be `None`")  # noqa: E501

        self._gill_size = gill_size

    @property
    def gill_color(self) -> str:
        """Gets the gill_color of this Mushroom.


        :return: The gill_color of this Mushroom.
        :rtype: str
        """
        return self._gill_color

    @gill_color.setter
    def gill_color(self, gill_color: str):
        """Sets the gill_color of this Mushroom.


        :param gill_color: The gill_color of this Mushroom.
        :type gill_color: str
        """
        if gill_color is None:
            raise ValueError("Invalid value for `gill_color`, must not be `None`")  # noqa: E501

        self._gill_color = gill_color

    @property
    def stalk_shape(self) -> str:
        """Gets the stalk_shape of this Mushroom.


        :return: The stalk_shape of this Mushroom.
        :rtype: str
        """
        return self._stalk_shape

    @stalk_shape.setter
    def stalk_shape(self, stalk_shape: str):
        """Sets the stalk_shape of this Mushroom.


        :param stalk_shape: The stalk_shape of this Mushroom.
        :type stalk_shape: str
        """
        if stalk_shape is None:
            raise ValueError("Invalid value for `stalk_shape`, must not be `None`")  # noqa: E501

        self._stalk_shape = stalk_shape

    @property
    def stalk_root(self) -> str:
        """Gets the stalk_root of this Mushroom.


        :return: The stalk_root of this Mushroom.
        :rtype: str
        """
        return self._stalk_root

    @stalk_root.setter
    def stalk_root(self, stalk_root: str):
        """Sets the stalk_root of this Mushroom.


        :param stalk_root: The stalk_root of this Mushroom.
        :type stalk_root: str
        """
        if stalk_root is None:
            raise ValueError("Invalid value for `stalk_root`, must not be `None`")  # noqa: E501

        self._stalk_root = stalk_root

    @property
    def stalk_surface_above_ring(self) -> str:
        """Gets the stalk_surface_above_ring of this Mushroom.


        :return: The stalk_surface_above_ring of this Mushroom.
        :rtype: str
        """
        return self._stalk_surface_above_ring

    @stalk_surface_above_ring.setter
    def stalk_surface_above_ring(self, stalk_surface_above_ring: str):
        """Sets the stalk_surface_above_ring of this Mushroom.


        :param stalk_surface_above_ring: The stalk_surface_above_ring of this Mushroom.
        :type stalk_surface_above_ring: str
        """
        if stalk_surface_above_ring is None:
            raise ValueError("Invalid value for `stalk_surface_above_ring`, must not be `None`")  # noqa: E501

        self._stalk_surface_above_ring = stalk_surface_above_ring

    @property
    def stalk_surface_below_ring(self) -> str:
        """Gets the stalk_surface_below_ring of this Mushroom.


        :return: The stalk_surface_below_ring of this Mushroom.
        :rtype: str
        """
        return self._stalk_surface_below_ring

    @stalk_surface_below_ring.setter
    def stalk_surface_below_ring(self, stalk_surface_below_ring: str):
        """Sets the stalk_surface_below_ring of this Mushroom.


        :param stalk_surface_below_ring: The stalk_surface_below_ring of this Mushroom.
        :type stalk_surface_below_ring: str
        """
        if stalk_surface_below_ring is None:
            raise ValueError("Invalid value for `stalk_surface_below_ring`, must not be `None`")  # noqa: E501

        self._stalk_surface_below_ring = stalk_surface_below_ring

    @property
    def stalk_color_above_ring(self) -> str:
        """Gets the stalk_color_above_ring of this Mushroom.


        :return: The stalk_color_above_ring of this Mushroom.
        :rtype: str
        """
        return self._stalk_color_above_ring

    @stalk_color_above_ring.setter
    def stalk_color_above_ring(self, stalk_color_above_ring: str):
        """Sets the stalk_color_above_ring of this Mushroom.


        :param stalk_color_above_ring: The stalk_color_above_ring of this Mushroom.
        :type stalk_color_above_ring: str
        """
        if stalk_color_above_ring is None:
            raise ValueError("Invalid value for `stalk_color_above_ring`, must not be `None`")  # noqa: E501

        self._stalk_color_above_ring = stalk_color_above_ring

    @property
    def stalk_color_below_ring(self) -> str:
        """Gets the stalk_color_below_ring of this Mushroom.


        :return: The stalk_color_below_ring of this Mushroom.
        :rtype: str
        """
        return self._stalk_color_below_ring

    @stalk_color_below_ring.setter
    def stalk_color_below_ring(self, stalk_color_below_ring: str):
        """Sets the stalk_color_below_ring of this Mushroom.


        :param stalk_color_below_ring: The stalk_color_below_ring of this Mushroom.
        :type stalk_color_below_ring: str
        """
        if stalk_color_below_ring is None:
            raise ValueError("Invalid value for `stalk_color_below_ring`, must not be `None`")  # noqa: E501

        self._stalk_color_below_ring = stalk_color_below_ring

    @property
    def veil_type(self) -> str:
        """Gets the veil_type of this Mushroom.


        :return: The veil_type of this Mushroom.
        :rtype: str
        """
        return self._veil_type

    @veil_type.setter
    def veil_type(self, veil_type: str):
        """Sets the veil_type of this Mushroom.


        :param veil_type: The veil_type of this Mushroom.
        :type veil_type: str
        """
        if veil_type is None:
            raise ValueError("Invalid value for `veil_type`, must not be `None`")  # noqa: E501

        self._veil_type = veil_type

    @property
    def veil_color(self) -> str:
        """Gets the veil_color of this Mushroom.


        :return: The veil_color of this Mushroom.
        :rtype: str
        """
        return self._veil_color

    @veil_color.setter
    def veil_color(self, veil_color: str):
        """Sets the veil_color of this Mushroom.


        :param veil_color: The veil_color of this Mushroom.
        :type veil_color: str
        """
        if veil_color is None:
            raise ValueError("Invalid value for `veil_color`, must not be `None`")  # noqa: E501

        self._veil_color = veil_color

    @property
    def ring_number(self) -> str:
        """Gets the ring_number of this Mushroom.


        :return: The ring_number of this Mushroom.
        :rtype: str
        """
        return self._ring_number

    @ring_number.setter
    def ring_number(self, ring_number: str):
        """Sets the ring_number of this Mushroom.


        :param ring_number: The ring_number of this Mushroom.
        :type ring_number: str
        """
        if ring_number is None:
            raise ValueError("Invalid value for `ring_number`, must not be `None`")  # noqa: E501

        self._ring_number = ring_number

    @property
    def ring_type(self) -> str:
        """Gets the ring_type of this Mushroom.


        :return: The ring_type of this Mushroom.
        :rtype: str
        """
        return self._ring_type

    @ring_type.setter
    def ring_type(self, ring_type: str):
        """Sets the ring_type of this Mushroom.


        :param ring_type: The ring_type of this Mushroom.
        :type ring_type: str
        """
        if ring_type is None:
            raise ValueError("Invalid value for `ring_type`, must not be `None`")  # noqa: E501

        self._ring_type = ring_type

    @property
    def spore_print_color(self) -> str:
        """Gets the spore_print_color of this Mushroom.


        :return: The spore_print_color of this Mushroom.
        :rtype: str
        """
        return self._spore_print_color

    @spore_print_color.setter
    def spore_print_color(self, spore_print_color: str):
        """Sets the spore_print_color of this Mushroom.


        :param spore_print_color: The spore_print_color of this Mushroom.
        :type spore_print_color: str
        """
        if spore_print_color is None:
            raise ValueError("Invalid value for `spore_print_color`, must not be `None`")  # noqa: E501

        self._spore_print_color = spore_print_color

    @property
    def population(self) -> str:
        """Gets the population of this Mushroom.


        :return: The population of this Mushroom.
        :rtype: str
        """
        return self._population

    @population.setter
    def population(self, population: str):
        """Sets the population of this Mushroom.


        :param population: The population of this Mushroom.
        :type population: str
        """
        if population is None:
            raise ValueError("Invalid value for `population`, must not be `None`")  # noqa: E501

        self._population = population

    @property
    def habitat(self) -> str:
        """Gets the habitat of this Mushroom.


        :return: The habitat of this Mushroom.
        :rtype: str
        """
        return self._habitat

    @habitat.setter
    def habitat(self, habitat: str):
        """Sets the habitat of this Mushroom.


        :param habitat: The habitat of this Mushroom.
        :type habitat: str
        """
        if habitat is None:
            raise ValueError("Invalid value for `habitat`, must not be `None`")  # noqa: E501

        self._habitat = habitat
