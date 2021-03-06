# OJT D2 01

### Git Flow

```bash
- Release branch: master
- Develop branch: develop
- Feature/task branch: feature(or task)/[feature/task name]

+ Begin task
    git checkout develop
    git pull
    git checkout -b [branch name]
    
+ Push to repo
    git add .
    git commit -m [message]
    git push origin [branch name]
    
+ Merge commit before create pull request
    git rebase -i HEAD~[number of commits]
    fix commit 
    git push origin

+ Rebase code
    git checkout develop
    git pull
    git checkout [branch name]
    git rebase develop
    fix conflicts
        git add .
        git rebase --continue
        If done => next
        Else => repeat

    git push -f origin [branch name]

Create pull request to develop branch
```

## Dependencies
 * PHP 7.3.x
 * Laravel Framework 7.x
 * mysql 5.7.x
 * Docker 18.09.x
 * docker-compose v3

## Setup with Docker
### Install Docker


### Prepare Environment
```bash
### install Docker on your PC
docker-compose build
docker-compose up -d
docker-compose exec web composer install
cp .env.example .env
docker-compose exec web php artisan key:generate
docker-compose exec web php artisan config:clear
```

### Build Vue.js
```bash
npm install
sudo npm install --save-dev  --unsafe-perm node-sass
npm run dev
```

### Create Database and Insert Data
```
Host: 127.0.0.1:1112
Username: root
Password: root

$ mysql -u root -h 127.0.0.1 -P 1112
```

#### Apply migration
```
(SQL)Drop Database ojt_d2_01;
(SQL)Create Database ojt_d2_01;
docker-compose exec web php artisan migrate;
docker-compose exec web php artisan db:seed;
```

### Private Key for CloudFront

## URL
```
WebServer: http://localhost:1111

Database: localhost:1112
```
