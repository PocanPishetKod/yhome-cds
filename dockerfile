FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./dist/* ./
WORKDIR /usr/share/nginx/html/src
COPY ./src/* ./
WORKDIR /etc/nginx
COPY ./nginx.conf ./nginx.conf