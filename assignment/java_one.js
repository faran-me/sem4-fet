<!DOCTYPE html>
<html>
<head>
    <title>Khalifa Mohammed Faran</title>
    <style>
        body {
            text-align: center;
            color: #ffffff;
            background: linear-gradient(to right, #1e8f3c, #3cb371);
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        h1 {
            font-size: 40px;
            margin-bottom: 20px;
            color: #ffeb3b;
            text-shadow: 2px 2px 5px black;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
            max-width: 700px;
            margin: 15px auto;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 15px;
            border-radius: 10px;
        }
        a {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            text-decoration: none;
            color: white;
            background-color: #007BFF;
            border-radius: 5px;
            transition: 0.3s;
        }

        a:hover {
            background-color: #0056b3;
        }
    </style>

    <script>
        function showUserInfo() {
            let name = prompt("Enter your name:");
           
            if (name !== null && name !== "") {
                alert("Hello " + name + "!");
                document.getElementById("demo").innerHTML =
                    "Hello " + name + "! Current date and time is: " + new Date();
            } else {
                alert("You did not enter a name.");
            }
        }
    </script>
</head>

<body>

    <h1>My Details</h1>

    <p>
        Hello! My name is Natien Sharma. I am learning HTML and creating my first simple webpage.
        This is a small paragraph about me. I am a motivated and curious individual who enjoys
        learning new things and improving my skills every day. I have a strong interest in
        technology and creativity, and I like exploring different ideas to grow both personally
        and professionally. I believe in hard work, consistency, and always staying positive
        while facing challenges.
    </p>

    <button type="button" onclick="showUserInfo()">
        Click me
    </button>

    <p id="demo"></p>

    <p>
        <a href="../assignment/one.html">Return to without css</a>
    </p>
   
    <p>
        <a href="../assignment/one _css.html">Return to with css</a>
    </p>


    <p>
        <a href="../assignment/home.html">Return to home page</a>
    </p>

</body>
</html>
