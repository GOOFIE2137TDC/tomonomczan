<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            height: 650px;
            width: 1000px;
            margin: 0 auto;
            position: relative;
        }
        .top {
            height: 100px;
            width: 100%;
            background-color: green;
            position: absolute;
            top: 0;
        }
        .bottom {
            height: 50px;
            width: 100%;
            background-color: black;

            position: absolute;
            bottom: 0;
        }
        .left {
            height: 500px;
            width: 100px;
            background-color: blue;
            position: absolute;
            left: 0;
            top: 100px;
        }
        .right {
            height: 500px;
            width: 160px;
            background-color: yellow;
            position: absolute;
            right: 100px;
        }
    </style>
</head>
<body>
    <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
    <div class="bottom"></div>
</body>
</html>