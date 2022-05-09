import isLogin from './login';
import Clock from './clock';
import Quotes from './quotes';
import TodoList from './todoList';
import Weather from './weather';

//clock
Clock(); //init
setInterval(Clock, 1000);

//quotes
Quotes();

//todolist
TodoList();

//weather
Weather();

//Login
window.addEventListener('DOMContentLoaded', isLogin);
