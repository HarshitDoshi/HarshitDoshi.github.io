from typing import Literal
from models import JWT
from utilities.jwt import decode as decode_jwt, encode as encode_jwt


async def read__JWT(encoded_jwt: str):
    decoded_JWT = decode_jwt(encoded_jwt=encoded_jwt)
    return decoded_JWT


async def create__JWT(
    jwt_type: Literal["ACCESS", "REFRESH"],
) -> str:
    jwt_model = JWT(jwt_type=jwt_type)
    JSON_Web_Token = encode_jwt(decoded_jwt=jwt_model)
    return JSON_Web_Token


async def create__JWTs() -> tuple[str, str]:
    access_token = await create__JWT(jwt_type="ACCESS")
    refresh_token = await create__JWT(jwt_type="REFRESH")
    return access_token, refresh_token
