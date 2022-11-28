FROM nginx:alpine
 
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 8081
