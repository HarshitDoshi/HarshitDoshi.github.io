from typing import Any
from json import dumps


class SEBody:
    def __init__(
        self,
        body: Any = {},
    ) -> None:
        self.body: str = dumps(body)

    def __str__(self) -> str:
        return self.body

    def __repr__(self) -> str:
        return self.body

    def __len__(self) -> int:
        return len(self.body)

    def get(self) -> str:
        return self.body
