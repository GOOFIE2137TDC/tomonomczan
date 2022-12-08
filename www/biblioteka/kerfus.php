<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
<script>
    const main = document.body;
    const bgs = ['https://preview.redd.it/vo5db20islu91.png?auto=webp&s=1b42614ec78b152f9f9770c8c4084bddc95e8963', 'https://poptown.eu/wp-content/uploads/2022/10/FfeVfmpXgAMcXH0.jpg', 'https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/neutral-face_1f610.gif', 'https://pliki.horecatrends.pl/i/01/72/02/017202_r0_940.jpg', 'https://cymbruchownica.azurewebsites.net/wp-content/uploads/2022/10/Fe97-BZXEAQXHMS-1024x1024.png', 'https://i1.jbzd.com.pl/contents/2022/10/social/AvQ15besXhdmrHDI450SSZmKcr0ZbD7s.jpg', 'https://cdn.galleries.smcloud.net/t/galleries/gf-jx62-UFKa-U9Wy_popularny-robot-jest-juz-w-lodzi-wokol-kerfusia-powstal-kult-1920x1080-nocrop.jpg', 'https://hejto-media.s3.eu-central-1.amazonaws.com/uploads/posts/images/500x500/dac4de8de962e0f5608db600a75c333f.jpg', 'https://img.wprost.pl/_thumb/f3/6c/ba20940113a59990e84b83907a12.jpeg', 'https://img.wprost.pl/_thumb/f3/6c/ba20940113a59990e84b83907a12.jpeg'];

    let i = 0;
    main.style.backgroundImage = 'url("' + bgs[bgs.length - 1] + '")';

    setInterval(() => {
        main.style.backgroundImage = 'url("' + bgs[i] + '")';
        i++;
        if (i + 1 > bgs.length) i = 0;
    }, 2000);
</script>

<style>
    body {
        background-repeat: none;
        background-size: cover;
    }
</style>