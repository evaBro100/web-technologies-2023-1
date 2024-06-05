<?php
require_once 'functions.php';

log_request();

$images = get_images_from_directory('images');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Галерея</title>
</head>
<body>
    <h1>Фото</h1>
    <div class="gallery">
        <?php foreach ($images as $image): ?>
            <a href="<?= $image['path']; ?>" target="_blank">
                <img src="<?= $image['thumbnail']; ?>" width="150" alt="">
            </a>
        <?php endforeach; ?>
    </div>
    <h2>Загрузить новое изображение</h2>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/*">
        <button type="submit">Загрузить</button>
    </form>
</body>
</html>
