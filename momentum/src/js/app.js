import isLogin from './login';
import Clock from './clock';

//clock
Clock(); //init
setInterval(Clock, 1000);

//Login
window.addEventListener('DOMContentLoaded', isLogin);
