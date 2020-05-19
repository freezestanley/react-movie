FROM base-registry.zhonganinfo.com/env/node-ngx:11.10.1

ARG DEPLOY_ENV

WORKDIR /root/app

COPY nginx_app.conf /etc/nginx/conf.d/

RUN  rm -rf /root/app/dist/

COPY ./dist /root/app/dist

COPY start.sh /root/app

RUN rm -f /etc/nginx/conf.d/default.conf

RUN  rm -fr node_modules

RUN  chmod 755 /root  -R

EXPOSE 8080

CMD ["sh", "/root/app/start.sh"]