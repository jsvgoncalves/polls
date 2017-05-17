#!/bin/bash
mkvirtualenv polls
pushd backend
pip install -r requirements.txt
python app.py
popd
