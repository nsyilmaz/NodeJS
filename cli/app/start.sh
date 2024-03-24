#!/bin/sh


docker-compose build 
docker-compose up -d

docker ps -a


#
# MAC uzerinde calisitirinca /var/lib/mysql/mysqld.sock dosyasi link olarak problem oluyor.
# Bu durum MAC'e ozel.
#

