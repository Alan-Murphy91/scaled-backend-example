
## Quick Overview

Start server instances

```sh
node server.js
```

Load balancer

```sh
docker run --name my-nginx -v {path-to-nginx.conf}/nginx.conf:/etc/nginx/nginx.conf:ro -p 80:80 -d nginx
```

(optional) Start artillery for realistic server load
```sh
npx artillery run artillery-config.yml (terminal 1)
npx artillery run artillery-config2.yml (terminal 2)
```


TODO

DB + replicas, message queue