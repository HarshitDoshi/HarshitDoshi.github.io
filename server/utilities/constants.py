from datetime import timedelta
from typing import Literal, Union
from http import HTTPStatus


HTTP_RESPONSE_STATUS_CODES: dict[
    Literal[
        "200 OK",
        "202 Created",
        "204 No Content",
        "404 Not Found",
        "500 Internal Server Error",
    ],
    int,
] = {
    "200 OK": HTTPStatus.OK.value,
    "202 Created": HTTPStatus.CREATED.value,
    "204 No Content": HTTPStatus.NO_CONTENT.value,
    "404 Not Found": HTTPStatus.NOT_FOUND.value,
    "500 Internal Server Error": HTTPStatus.INTERNAL_SERVER_ERROR.value,
}

HEADERS = {
    "CONTENT_TYPE_APPLICATION_JSON": {"Content-Type": "application/json"},
}

DEFAULT_JWT_CONFIGURATION: dict[
    str,
    Union[
        str,
        dict[str, str],
        dict[str, timedelta],
        list[str],
    ],
] = {
    "LIST_OF_CLAIMS": [
        "iss",
        "sub",
        "aud",
        "iat",
        "exp",
        "nbf",
        "jti",
    ],
    "ENCODING": "utf-8",
    "HEADER": {"alg": "RS256"},
    "ISSUER": "shunyaek",
    "SUBJECT": "Harshit.Doshi@shunyaek.se",
    "AUDIENCE": ["https://shunyaek.se", "https://authentication.shunyaek.se"],
    "LIFESPAN": {
        "ACCESS_TOKEN": timedelta(
            days=0,
            seconds=0,
            microseconds=0,
            milliseconds=0,
            minutes=15,
            hours=0,
            weeks=0,
        ),
        "REFRESH_TOKEN": timedelta(
            days=0,
            seconds=0,
            microseconds=0,
            milliseconds=0,
            minutes=0,
            hours=3,
            weeks=0,
        ),
    },
}

SECRETS = {
    "PRIVATE_KEY_FILE_PATH": "./keys/private.pem",
    "PUBLIC_KEY_FILE_PATH": "./keys/public.pem",
}

ERROR_MESSAGES = {
    "PRIVATE_KEY": "Invalid private key!",
    "PUBLIC_KEY": "Invalid public key!",
    "JSON_WEB_TOKEN": "Invalid JSON Web Token!",
}
