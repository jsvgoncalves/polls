# -*- coding: utf-8 -*-
#

"""Pytest configuration."""

import pytest

from api import create_eve_app


@pytest.yield_fixture(scope='function')
def app(request):
    """Create the Eve app."""
    app = create_eve_app()
    app.config['TESTING'] = True
    yield app
