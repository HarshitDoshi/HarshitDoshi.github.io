```python
@application.route("/")
async def index(request: Request):
    return Response(
        code=HTTP_RESPONSE_STATUS_CODES["200 OK"],
        headers=HEADERS["CONTENT_TYPE_APPLICATION_JSON"],
        body=SEBody({"main": "Hello, world!"}).get(),
    )


@application.route("/static/", branch=True)
def static(request: Request):
    return File("./static")


@application.route("/favicon.ico")
def favicon(request: Request):
    request.setHeader(b"Content-Type", b"image/avif,image/webp,*/*")
    return File("./static/favicon.ico")


@application.route("/health-check/")
def health_check(request: Request):
    return Response(
        code=HTTP_RESPONSE_STATUS_CODES["200 OK"],
        headers=HEADERS["CONTENT_TYPE_APPLICATION_JSON"],
        body=SEBody(
            {
                "main": "All services are up!",
            }
        ).get(),
    )
```

```json
{
    "user1": {
        "first_name": "xyz",
        "last_name": "abc",
        "contact": {
            "phone": "1234567890",
            "e-mail": "something@nothing.com",
        },
        "department": "engineering",
        "role": "senior engineer",
        "location": {
            "building": "C3",
            "floor": 7,
            "desk": "C3-7-121",
        }
    }
    .
    .
    .
}
```