#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

"""Entry point for the whole application."""

from flask import Flask

from api import create_eve_app

if __name__ == '__main__':
    # Build the two apps from factories
    api = create_eve_app()

    # Initialize server
    server = Flask(__name__)
    server.wsgi_app = api
    server.config.from_pyfile('app.cfg')

    server.run(host=server.config['IP'],
               port=server.config['PORT'],
               use_reloader=True)
