from uuid import uuid5, uuid4, uuid1, NAMESPACE_DNS


def create__id() -> str:
    user__id = uuid5(
        NAMESPACE_DNS,
        str(str(uuid4()) + str(uuid1()) + ".authentication.shunyaek.se"),
    )
    return str(user__id)
