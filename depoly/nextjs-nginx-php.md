```nginx
server {
	listen 80;
    server_name blog.dragonbook.cn;
	# root /var/www/dragonbook-cn/blog/;
    
    location /server/ {
        root /var/www/dragonbook-cn/blog/;
        index index.html;

        location ~ \.php$ {
		    include snippets/fastcgi-php.conf;
		    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	    }

        location ~* \.(?:manifest|appcache|html?|xml|json|md)$ {
            expires -1;
        }

        location ~* \.(?:css|js)$ {
            try_files $uri =404;
            expires -1;
            access_log off;
            add_header Cache-Control "public";
        }

		try_files /server/index.html $uri $uri/;
	}

    location /cms/ {
        root /var/www/dragonbook-cn/blog/;
        index index.html;
        location ~ \.php$ {
		    include snippets/fastcgi-php.conf;
		    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	    }
        
        location ~* \.(?:manifest|appcache|html?|xml|json|md)$ {
            expires -1;
        }

        location ~* \.(?:css|js)$ {
            try_files $uri =404;
            expires -1;
            access_log off;
            add_header Cache-Control "public";
        }
		try_files /cms/index.html $uri $uri/;
	}

     location / {
         # default port, could be changed if you use next with custom server
         proxy_pass http://localhost:3000;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection 'upgrade';
         proxy_set_header Host $host;
         proxy_cache_bypass $http_upgrade;    
         # if you have try_files like this, remove it from our block
         # otherwise next app will not work properly
         # try_files $uri $uri/ =404;
     }

	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	}
}
```


