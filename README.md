# node-weather

Обучение https://learning.oreilly.com/videos/the-complete-node-js

Подключение heroku

== логин
C:\WORK\node\the-complete-node-js\web-server>heroku login
== добавление ключей
C:\WORK\node\the-complete-node-js\web-server>heroku keys:add
== создание проекта, в ответе получается путь и репозиторий гитовый
C:\WORK\node\the-complete-node-js\web-server>heroku create 
https://apatiy-kirov-node-weather.herokuapp.com/ | https://git.heroku.com/apatiy-kirov-node-weather.git


C:\WORK\node\the-complete-node-js\web-server>


добавив секцию в package.json
  "scripts": {
    "start" : "node src/app.js"
  },
можно запускать приложение так >npm run start




-----------------
C:\WORK\node\the-complete-node-js\web-server>heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/d
Logging in... done

C:\WORK\node\the-complete-node-js\web-server>heroku keys:add
Found an SSH public key at C:\Users\whoy\.ssh\id_rsa.pub
? Would you like to upload it to Heroku? Yes
Uploading C:\Users\whoy\.ssh\id_rsa.pub SSH key... done

C:\WORK\node\the-complete-node-js\web-server>heroku create apatiy-kirov-node-weather
Creating ⬢ apatiy-kirov-node-weather... done
https://apatiy-kirov-node-weather.herokuapp.com/ | https://git.heroku.com/apatiy-kirov-node-weather.git

C:\WORK\node\the-complete-node-js\web-server>

Запуск нодмаан с реагированием на изменение конкретных типов файлов
nodemon src/app.js -e js,hbs,css,html



После добавление строки 
"dev" : "nodemon src/app.js -e js,hbs,cs,html"
в package.json
появилась возможность стартовать приложение так
npm run dev

НО есть проблема, вся эта комарилья работает так как nodemon установлен как глобальный модуль (-g) так что его стоит удалить и установить локально, но только для разработки
npm install nodemon --save-dev
НЕ используется при продуктовой сборке
При этом теряется доступ из командной строки
А скрипты могут использовать команды из локальных зависимостей