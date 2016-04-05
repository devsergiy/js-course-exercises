# Module 1 summary

##  var robot;


Напишите классы описывающие битву роботов

```javascript
function Battleground() {
}

function Robot(name) {
}

function Weapon(name) {
}
```

### BattleGround:
На поле могут присутствовать несколько роботов, размер передается в конструктор

Свойства:

- round
- robots

У поля есть методы:

- addRobot() - добавляет робота к битве
- startBattle() - стартует сражение
- size() - возвращает количество добавленных роботов

- Битва заканчивается когда остался только один робот.
- Битва может начаться только когда на поле больше 1 робота
- Битву начинает первый робот появившийся на поле и дальше ходы делаются поочередно
- На каждом шаге в консоль выводятся ходы роботов:
- В конце в консоле должен быть выведен победитель
- Погибших роботов можно перемещать в какой-то внутренний массив

Пример вывода

```
Round 1
Robot1 attack with 10 power area damage
Robot2 receives 10 points damage
Robot3 receives 10 points damage
Robot3 out of game
Round 2
Robot2 attack with 50 power single damage
Robot1 receives 50 points damage
Robot1 out of game
Robot2 wins!!!
```

### Robot

Свойства робота:

- name
- weapon
- alive
- health (20-50)

Методы робота:

- attack - осуществление атаки с помощью оружия
- receiveDamage(points)

Во время атаки другим роботам начисляется урон от оружия в количестве points
Когда здоровье становится 0 - робот погибает и флаг alive выставляется в false
При создании робота, он случайным образом получает количество здоровья от 20 до 50 и одно оружие

### Weapon

Свойства

- type
- power  (5 - 20)
- name

```javascript
function Weapon(type, power) {
}
```

Возможные типы:

- area - урон по области, наносится всем роботам
- single - наносит урон случайно выбранному роботу


## Создать функцию запускающую битву

```javascript
function makeBattle(robotCount) {
}
```

Функция должна создать битву с заданным количеством роботов
и запустить её

