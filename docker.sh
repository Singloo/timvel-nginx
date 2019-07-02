docker run -d \
  --name timvel-nginx \
  -p 80:80 \
  -p 443:443 \
  --net="host" \
  --env-file /apps/env.list \
  -v /apps/timvel-nginx/:/etc/nginx/:ro \
  --restart always \
  nginx