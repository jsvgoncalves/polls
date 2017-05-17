# -*- coding: utf-8 -*-
#

"""Eve app for polls API."""

from eve import Eve


def create_eve_app(cfg_file='app.cfg'):
    """Creates the eve app and inits the db
    :returns: eve application object"""
    # Init eve app and load configs
    app = Eve(__name__)
    return app
