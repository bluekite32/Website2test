<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dancing Guy</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f8ff;
        }

        .dancer {
            font-size: 5rem;
            animation: dance 0.5s infinite alternate;
        }

        @keyframes dance {
            0% { transform: rotate(0deg) translateY(0); }
            100% { transform: rotate(20deg) translateY(-10px); }
        }
    </style>
</head>
<body>
    <div class="dancer" onclick="alert('Keep dancing! 🎉')">💃</div>
</body>
</html>
