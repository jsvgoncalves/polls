# -*- coding: utf-8 -*-
#

"""Test Doodle Pro Eve app configurations and routes."""
from flask import url_for


def test_routes(client):
    """Test the available routes and their accessible methods."""
    assert client.get(
        url_for('polls|resource')).status_code == 200
    assert client.post(
        url_for('polls|resource')).status_code == 405
