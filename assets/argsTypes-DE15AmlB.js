import{w as t,x as o,y as e}from"./index-VLfweUxF.js";const s={orientation:{description:`Расположение сайдбара – <b>${Object.values(t).join(" | ")}</b>.`,table:{defaultValue:{summary:t.vertical},type:{summary:"string"}},options:[t.vertical,t.horizontal],control:{type:"select"}},variant:{description:`Тип сайдбара – <b>${Object.values(o).join(" | ")}</b>.`,table:{defaultValue:{summary:o.default},type:{summary:"string"}},options:[o.default,o.burger],control:{type:"select"}},submenuVersion:{description:`Версия сабменю – <b>${Object.values(e).join(" | ")}</b>.`,table:{defaultValue:{summary:e.version1},type:{summary:"string"}},options:[e.version1,e.version2,e.version3],control:{type:"select"}},allowFavorites:{description:"Условие доступности добавления разделов в избранное",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},systemName:{description:"Название системы, отображаемое вверху слева",control:{type:"text"}},userName:{description:"Имя пользователя",control:{type:"text"}},userSurname:{description:"Фамилия пользователя",control:{type:"text"}},isLoggedIn:{description:"Свойство, указывающее, залогинен ли пользователь",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}};export{s as a};