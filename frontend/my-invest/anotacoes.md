# Coisas sobre o Vue
O : que é adicionando antes de uma propriedade como em: 
```html
    <input type="text" :name="name" value="">
```
Tem como função vincular um atributo html ao valor de uma prop, isso permite que
que o componente pai que usar esse componente passe uma propriedade, como por 
exemplo:
```html
<InputField :name="myFieldName" />
```