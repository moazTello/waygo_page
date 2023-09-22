FROM nginx:stable-alpine3.17
LABEL maintainer="localhost"

COPY ./default.conf.tpl /default.conf.tpl

COPY ./build  /usr/share/nginx/html

CMD nginx -g 'daemon off;'