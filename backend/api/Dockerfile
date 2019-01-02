FROM python:3.6-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk add build-base zlib zlib-dev jpeg jpeg-dev
COPY requirements.txt /usr/src/app/
#RUN pip install numpy
RUN pip3 install --no-cache-dir -r requirements.txt
RUN pip3 install https://github.com/better/alpine-tensorflow/releases/download/alpine3.7-tensorflow1.7.0/tensorflow-1.7.0-cp36-cp36m-linux_x86_64.whl
#RUN pip3 install pymongo
COPY . /usr/src/app

EXPOSE 8080

ENTRYPOINT ["python3"]

CMD ["-m", "openapi_server"]