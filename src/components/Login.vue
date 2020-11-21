<template>
    <section class="login-page">
        <section id="login-container">
            <div>
                <h1>Welcome to postIt!</h1>
            </div>
            <div>
                <h4>
                    <a href="#">Create an Account</a>
                </h4>
            </div>
            <div>
                <h4>Or</h4>
            </div>
            <div>
                <h3>Please Log In</h3>
                <form action="index.html" method="post">
                    <div>
                        <input type="text" name="email" placeholder="Email">
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password">
                    </div>
                    <div>
                        <button class="button" type="submit" name="login">Log In</button>
                    </div>
                    <div>
                        <small>
                            <a href="#">Forgot password?</a>
                        </small>
                    </div>
                </form>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    a {
        color: #40c4ff;
    }

    .login-page {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #login-container {
        background-image: url(../assets/logo.png);
        background-size: 20% auto;
        background-repeat: no-repeat;
        background-position: 15px 15px;
        min-width: 25%;
        padding: 45px 45px;
        background-color: #ffffff;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        text-align: center;
    }

    #login-container form div > input {
        padding: 8px 16px;
        margin: 4px 0;
    }

    button {
        padding: 8px 16px;
        margin: 4px 0;
        color: #ffffff;
        background-color: #01579b;
        border: none;
        border-radius: 4px;
    }

    button:hover {
        box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
        cursor: pointer;
    }

    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
    }

    header:hover {
        box-shadow: 0 -20px 30px #4d4d4d;
    }

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    nav div {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
    }

    nav div img {
        height: 100%;
        width: 30px;
        margin-left: 15px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top center;
    }

    nav div.search-container > input {
        box-sizing: border-box;
        height: 30px;
        width: 80%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    nav div.avatar-container {
        margin-right: 15px;
        text-align: right;
    }


    .profile img{
        width: 75px;
        height: 75px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .profile h2{
        font-size: 16px;
    }
</style>