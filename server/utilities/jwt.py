from authlib.jose.errors import InvalidClaimError, ExpiredTokenError
from models.jwt import JWT
from utilities.constants import DEFAULT_JWT_CONFIGURATION, ERROR_MESSAGES, SECRETS
from authlib.jose import JsonWebToken, JWTClaims


jwt = JsonWebToken(["RS256"])


def read__private_key() -> str:
    try:
        private_pem_file = open(SECRETS["PRIVATE_KEY_FILE_PATH"])
        private_pem = private_pem_file.read()
        private_pem_file.close()
        assert len(private_pem) > 0, ERROR_MESSAGES["PRIVATE_KEY"]
    except (FileNotFoundError, PermissionError, OSError, AssertionError):
        raise RuntimeError(ERROR_MESSAGES["PRIVATE_KEY"])
    return private_pem


def read__public_key() -> str:
    try:
        public_pem_file = open(SECRETS["PUBLIC_KEY_FILE_PATH"])
        public_pem = public_pem_file.read()
        public_pem_file.close()
        assert len(public_pem) > 0, ERROR_MESSAGES["PUBLIC_KEY"]
    except (FileNotFoundError, PermissionError, OSError, AssertionError):
        raise RuntimeError(ERROR_MESSAGES["PUBLIC_KEY"])
    return public_pem


def encode(decoded_jwt: JWT) -> str:
    try:
        private_key = read__private_key()
        assert len(private_key) > 0, ERROR_MESSAGES["PRIVATE_KEY"]
    except AssertionError:
        raise AssertionError(ERROR_MESSAGES["PRIVATE_KEY"])
    header = DEFAULT_JWT_CONFIGURATION["HEADER"]
    payload = decoded_jwt.as_dictionary()
    try:
        jwt_encoded = jwt.encode(header, payload, private_key, check=True).decode(
            DEFAULT_JWT_CONFIGURATION["ENCODING"]
        )
        assert len(jwt_encoded) > 0, ERROR_MESSAGES["JSON_WEB_TOKEN"]
    except:
        raise AssertionError(ERROR_MESSAGES["JSON_WEB_TOKEN"])
    return jwt_encoded


def decode(encoded_jwt: str) -> JWTClaims:
    try:
        public_key = read__public_key()
        assert len(public_key) > 0, ERROR_MESSAGES["PUBLIC_KEY"]
    except AssertionError:
        raise AssertionError(ERROR_MESSAGES["PUBLIC_KEY"])
    try:
        jwt_decoded = jwt.decode(
            s=encoded_jwt.encode(DEFAULT_JWT_CONFIGURATION["ENCODING"]),
            key=public_key,
            claims_options={
                "iss": {
                    "essential": True,
                    "value": DEFAULT_JWT_CONFIGURATION["ISSUER"],
                },
                "sub": {
                    "essential": True,
                    "value": DEFAULT_JWT_CONFIGURATION["SUBJECT"],
                },
                "aud": {
                    "essential": True,
                    "values": DEFAULT_JWT_CONFIGURATION["AUDIENCE"],
                },
                "iat": {
                    "essential": True,
                    "validate": JWTClaims.validate_iat,
                },
                "exp": {
                    "essential": True,
                    "validate": JWTClaims.validate_exp,
                },
                "nbf": {
                    "essential": True,
                    "validate": JWTClaims.validate_nbf,
                },
                "jti": {
                    "essential": False,
                },
            },
        )
        try:
            jwt_decoded.validate()
        except (InvalidClaimError, ExpiredTokenError, Exception) as e:
            raise AssertionError("Decoded JWT not validated!", e)
        for claim in DEFAULT_JWT_CONFIGURATION["LIST_OF_CLAIMS"]:
            assert claim in jwt_decoded.keys(), ERROR_MESSAGES["JSON_WEB_TOKEN"]
    except Exception as e:
        raise AssertionError(ERROR_MESSAGES["JSON_WEB_TOKEN"])
    return jwt_decoded
