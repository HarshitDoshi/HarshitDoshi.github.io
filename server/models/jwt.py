from typing import Any, List, Literal, Self, Union
from models import Base
from utilities.primary_keys import create__id
from uuid import UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, ARRAY, Double
from utilities.constants import DEFAULT_JWT_CONFIGURATION
from datetime import datetime, timedelta, timezone
from json import dumps


class JWT(Base):
    # Issuer
    # Subject
    # Audience
    # Issued At
    # Expiration Time
    # Not Before
    # JWT ID

    __tablename__ = "jwt"

    iss: Mapped[str] = mapped_column(String, nullable=False)
    sub: Mapped[str] = mapped_column(String, nullable=False)
    aud: Mapped[List[str]] = mapped_column(ARRAY(item_type=String), nullable=False)
    iat: Mapped[float] = mapped_column(Double, nullable=False)
    exp: Mapped[float] = mapped_column(Double, nullable=False)
    nbf: Mapped[float] = mapped_column(Double, nullable=False)
    jti: Mapped[str] = mapped_column(String, primary_key=True)

    def __init__(
        self,
        jwt_type: Literal["ACCESS", "REFRESH"],
        **kw: Any,
    ):
        issuer: str = DEFAULT_JWT_CONFIGURATION["ISSUER"]
        subject: str = DEFAULT_JWT_CONFIGURATION["SUBJECT"]
        audience: list[str] | str = DEFAULT_JWT_CONFIGURATION["AUDIENCE"]
        lifespan: timedelta = DEFAULT_JWT_CONFIGURATION["LIFESPAN"][f"{jwt_type}_TOKEN"]
        current_time: datetime = datetime.now(
            tz=timezone(timedelta(hours=5, minutes=30))
        )
        current_time_plus_lifespan: datetime = current_time + lifespan
        issued_at: datetime = current_time.timestamp()
        expiration_time: datetime = current_time_plus_lifespan.timestamp()
        not_before: datetime = current_time.timestamp()
        jwt_id: str = create__id()

        self.iss = issuer
        self.sub = subject
        self.aud = audience
        self.iat = issued_at
        self.exp = expiration_time
        self.nbf = not_before
        self.jti = jwt_id
        super().__init__(**kw)

    def as_json(self) -> str:
        jwt_json = dumps(
            {
                "iss": self.iss,
                "sub": self.sub,
                "aud": self.aud,
                "iat": self.iat,
                "exp": self.exp,
                "nbf": self.nbf,
                "jti": self.jti,
            }
        )
        return jwt_json

    def as_dictionary(self) -> dict[str, Union[float, List[str], UUID, str]]:
        jwt_dictionary: dict[str, Union[float, List[str], UUID, str]] = {
            "iss": self.iss,
            "sub": self.sub,
            "aud": self.aud,
            "iat": self.iat,
            "exp": self.exp,
            "nbf": self.nbf,
            "jti": self.jti,
        }
        return jwt_dictionary

    def __repr__(self) -> dict[str, float | List[str] | UUID | str]:
        jwt_dictionary = self.as_dictionary()
        return jwt_dictionary

    def __str__(self) -> str:
        jwt_json = self.as_json()
        return jwt_json
