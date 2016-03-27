## Объекты. Функция конструктор

### Geometric shapes

Создайте функцию getGeometricObject(), которая будет возвращать объект с заданными параметрами и методом getSquare(). Функция должна принимать параметр opts - объект, содержащий разные свойства для разных типов объекта (примеры содержимого смотреть ниже).


```javascript
function getGeometricObject(opts) {
}
```

##### Поддерживаемые типы:

###### Квадрат
```javascript
opts = {
  type: 'square',
  a: 10
}
```

###### Прямоугольник
```javascript
opts = {
  type: 'reactangle',
  a: 10,
  b: 20
}
```

###### Треугольник
```javascript
opts = {
  type: 'triangle',
  a: 10,
  b: 20,
  c: 25
}
```
Примечание: полагаем что всегда передаются правильные длины сторон треугольника, т.е. a + b > c

Пример:
```javascript
opts = { type: 'sometype', a: 10, b: 11, c: 12, d: 15 };
a = getGeometricObject(opts);
> Object {type: "sometype", a: 10, b: 11, c: 12, d: 15}
a.getSquare()
> 10
```

### Animals

Создайте функцию конструктор Animal(). Функция должна принимать два параметра name и type. У создаваемого объекта должно быть свойства stepCount(начальное значение 0), name и type.
Добавьте в свойство конструктора prototype несколько методов:

1) makeNoise(), который в зависимости от типа животного будет возвращать звук
2) walk(count), который будет принимать количество шагов и обновлять счетчик пройденных шагов(stepCount) у животного


```javascript
function Animal(name, type) {
}
```

##### Поддерживаемые животные:

###### Cat
```javascript
new Animal('Voldemort', 'cat')
```

###### Dog
```javascript
new Animal('Nevil', 'dog')
```

###### Rat
```javascript
new Animal('Scabbers', 'rat')
```


###### Noises
```javascript
{
  cat: 'meow',
  dog: 'woof',
  rat: 'squeak'
}
```

Пример:
```javascript
tom = new Animal('Voldemort', 'cat')
console.log(tom.makeNoise())
> 'meow'
tom.walk(10)
console.log(tom.stepCount)
> 11
tom.walk(253)
console.log(tom.stepCount)
> 264
console.log(tom.name)
> 'Voldemort'
console.log(tom.type)
> 'cat'
```
