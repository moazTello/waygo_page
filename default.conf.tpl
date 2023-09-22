server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }
      location /openion {
        try_files $uri $uri/ /index.html;
    }
    location /openion {
        rewrite ^/openion(.*)$ /index.html last;
    }
}