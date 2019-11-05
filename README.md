# arrow-app-front

Небольшой пример наипростейшего приложения на React + Redux. Бэкенд можно взять здесь:
[https://github.com/nelsonstepnog/arrow-app.git]()

Чтобы запустить фронтовое приложение выполните в терминале в корне проекта следующие команды:

### `$ sudo npm i`
### `$ sudo npm run build`
### `$ sudo npm run start`

Веб-сервис будет доступен по адресу:
[http://localhost:3000](http://localhost:3000)


Проверка запросами JS в консоли devTools, данные летят в АПИ и сохраняются в БД:
-----------------------------------------------------------------------
1.) Создать одного пользователя:

fetch('/users', 
  { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'name': '1 user create', 'age': '21', 'country': 'USA' })
  }
).then(result => result.json().then(console.log))

-----------------------------------------------------------------------
2.) Получить пользователя:

fetch('/users/1').then(response => response.json().then(console.log))

-----------------------------------------------------------------------
3.) Обновить одного пользователя:

fetch('/users/1', 
  { 
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ 'name': '1 user update', 'age': '16', 'country': 'KAZ' })
  }
).then(result => result.json().then(console.log));

-----------------------------------------------------------------------
4.) Удалить одного пользователя:

fetch('/users/1', { method: 'DELETE' }).then(result => console.log(result))

-----------------------------------------------------------------------