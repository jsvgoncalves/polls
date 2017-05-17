# -*- coding: utf-8 -*-
#

"""Eve app settings."""
# MONGO_USERNAME = '<your username>'
# MONGO_PASSWORD = '<your password>'

X_DOMAINS = '*'
MONGO_HOST = 'localhost'
MONGO_PORT = 27017
MONGO_DBNAME = 'polls'


schema = {
    'initiated': {
        'type': 'timestamp',
    },
    'title': {
        'type': 'string',
    },
    'description': {
        'type': 'string',
    },
    'initiator': {
        'type': 'dict',
        'schema': {
            'name': {'type': 'string'},
            'email': {'type': 'string'},
            'notify': {'type': 'boolean'}
        },
    },
}

polls = {
    # by default the standard item entry point is defined as
    # '/poll/<ObjectId>'. We leave it untouched, and we also enable an
    # additional read-only entry point. This way consumers can also perform
    # GET requests at '/poll/<lastname>'.
    # 'additional_lookup': {
    #     'url': 'regex("[\w]+")',
    #     'field': 'lastname'
    # },

    # We choose to override global cache-control directives for this resource.
    'cache_control': 'max-age=10,must-revalidate',
    'cache_expires': 10,
    'allow_unknown': True,
    'schema': schema
}
# Disable $regex blacklist
MONGO_QUERY_BLACKLIST = []
DOMAIN = {'polls': polls}
