/*=============================================
     self loading login manager

=============================================*/

window.addEventListener('load', function(){
    (function(){

        var g = {
            onLoginSuccess: function(){
                window.location = '/';
            },
            onRegisterSuccess: function(){
                var username = usernameInput.value;
                var password = passwordInput.value;

                login(username, password);
            },
            onRegisterFail: function(msg){
                alert(msg);
            },
            onLoginFail: function(msg){
                alert(msg);
            }
        }

        //==================
        //  API
        //==================

        window.LoginManager = {
            setLoginSuccess: function(callback){
                g.onLoginSuccess = callback;
            },
            setRegisterSuccess: function(callback){
                g.onRegisterSuccess = callback;
            },
            setRegisterFail: function(callback){
                g.onRegisterFail = callback;
            },
            setLoginFail: function(callback){
                g.onLoginFail = callback;
            }
        }

        //==================
        //  DOM
        //==================

        var loginButton = document.getElementById('loginButton');
        var registerButton = document.getElementById('registerButton');
        var registerPage = document.getElementById('registerPage');

        var usernameInput = document.getElementById('usernameInput');
        var passwordInput = document.getElementById('passwordInput');

        if (loginButton !== null) {
            loginButton.onclick = function(){
                var username = usernameInput.value;
                var password = passwordInput.value;

                login(username, password);
            }
        }

        if (registerButton !== null) {
            registerButton.onclick = function(){
                var username = usernameInput.value;
                var password = passwordInput.value;
                var passwordConfirmation = passwordInputConfirmation.value;

                if (username === "") {
                    alert("Invalid username, must contain at least one character.");
                }

                if (password === passwordConfirmation) {
                    register(username, password);
                } else {
                    alert("Passwords do not match, please try again.");
                }
            } 
        }

        if (registerPage !== null) {
            registerPage.onclick = function(){
                window.location.href='register.html';
            }
        } 

        $("#passwordInput").keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                var username = usernameInput.value;
                var password = passwordInput.value;

                login(username, password);
            }
        });

        //==================
        //  server API
        //==================

        function login(username, password, done){
            post(
                '/login', 
                {   
                    username: username, 
                    password: password 
                }, 
                handleLoginResult
            );
        }

        function register(username, password, done){
            post(
                '/register', 
                {   
                    username: username, 
                    password: password 
                }, 
                handleRegisterResult
            );
        }

        function handleRegisterResult(err, result){
            if (err)
                throw err;
            if (result === 'ok'){
                g.onRegisterSuccess();
            }
            else
                g.onRegisterFail(result);
        }

        function handleLoginResult(err, result){
            if (err)
                throw err;
            if (result === 'ok')
                g.onLoginSuccess();
            else
                g.onLoginFail(result);
        }

        function post(url, data, done){
            var request = new XMLHttpRequest();
            var async = true;
            request.open('post', url, async);
            request.onload = function(){
                if (done !== undefined){
                    var res = request.responseText
                    done(null, res);
                }
            }
            request.onerror = function(err){
                done(err, null);
            }
            if (data !== undefined){
                var body = new FormData();
                for (var key in data){
                    body.append(key, data[key]);
                }
                request.send(body);
            }
            else {
                request.send();
            }
        }
    })();
});