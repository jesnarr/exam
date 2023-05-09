Steps to run the application

1. cp .env.example .env
2. create a database named "laravel"
3. npm i
4. composer i
   #migrate tables and insert 10 users
5. php artisan migrate:refresh --seed
6. php artisan key:generate
7. php artisan serve
