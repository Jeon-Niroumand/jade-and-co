FROM nginx:alpine

# Copy website files
COPY . /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf