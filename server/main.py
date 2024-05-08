from twisted.web.server import Request
from twisted.web.static import File
from klein import Klein, Response
from utilities.constants import (
    HEADERS,
    HTTP_RESPONSE_STATUS_CODES,
)
from utilities.se import SEBody
from utilities.security import create__JWTs, read__JWT
import json


class AuthenticationBackEnd(object):
    application = Klein()

    @application.route("/static/", branch=True)
    def static(request: Request):
        return File("./static")


    @application.route("/favicon.ico")
    def favicon(request: Request):
        request.setHeader(b"Content-Type", b"image/avif,image/webp,*/*")
        return File("./static/favicon.ico")

    with application.subroute("") as authentication_application:

        @authentication_application.route("/signin/", methods=["POST"])
        async def authentication(request: Request):
            content = None
            try:
                access_token, refresh_token = await create__JWTs()
                request.addCookie(k="ACCESS_TOKEN", v=access_token, httpOnly=True)
                request.addCookie(k="REFRESH_TOKEN", v=refresh_token, httpOnly=True)
                code = HTTP_RESPONSE_STATUS_CODES["204 No Content"]
                content = None
            except Exception as exception:
                code = HTTP_RESPONSE_STATUS_CODES["500 Internal Server Error"]
                content = {
                    "status": False,
                    "error": str(exception),
                }
            return Response(
                code=code,
                headers=HEADERS["CONTENT_TYPE_APPLICATION_JSON"],
                body=SEBody(content).get(),
            )

        @authentication_application.route("/verify/", methods=["POST"])
        async def verification(request: Request):
            request_content = json.loads(request.content.read())
            content = None
            try:
                claims = await read__JWT(request_content["ACCESS_TOKEN"])
                code = HTTP_RESPONSE_STATUS_CODES["200 OK"]
                content = claims
            except Exception as exception:
                code = HTTP_RESPONSE_STATUS_CODES["500 Internal Server Error"]
                content = {
                    "status": False,
                    "error": str(exception),
                }
            return Response(
                code=code,
                headers=HEADERS["CONTENT_TYPE_APPLICATION_JSON"],
                body=SEBody(content).get(),
            )


    resource = application.resource


authentication_backend = AuthenticationBackEnd()
authentication_resource = authentication_backend.resource


if __name__ == "__main__":
    # application.run("localhost", 8080)
    pass
