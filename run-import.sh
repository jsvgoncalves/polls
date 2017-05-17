#!/bin/bash
mongoimport --db polls --collection polls --drop --file docs/polls.json --jsonArray
