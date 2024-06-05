<?php
require_once 'functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $upload_dir = 'images/';
        $thumb_dir = 'thumbnails/';
        $allowed_types = ['image/jpeg', 'image/png', 'image/gif'];
        $max_size = 2 * 1024 * 1024; 

        $file = $_FILES['image'];
        $file_type = mime_content_type($file['tmp_name']);
        $file_size = $file['size'];
        $file_name = basename($file['name']);
        $target_file = $upload_dir . $file_name;
        $target_thumb = $thumb_dir . $file_name;

        if (in_array($file_type, $allowed_types) && $file_size <= $max_size) {
            if (move_uploaded_file($file['tmp_name'], $target_file)) {
                create_thumbnail($target_file, $target_thumb, 150);
                header('Location: index.php');
                exit;
            } else {
                echo "Ошибка при загрузке файла.";
            }
        } else {
            echo "Неверный формат файла.";
        }
    } else {
        echo "Ошибка загрузки.";
    }
}

function create_thumbnail($src, $dest, $width) {
    $source_image = null;
    $type = mime_content_type($src);

    switch ($type) {
        case 'image/jpeg':
            $source_image = imagecreatefromjpeg($src);
            break;
        case 'image/png':
            $source_image = imagecreatefrompng($src);
            break;
        case 'image/gif':
            $source_image = imagecreatefromgif($src);
            break;
    }

    if ($source_image) {
        $orig_width = imagesx($source_image);
        $orig_height = imagesy($source_image);
        $height = (int)($orig_height * $width / $orig_width);

        $thumb_image = imagecreatetruecolor($width, $height);
        imagecopyresampled($thumb_image, $source_image, 0, 0, 0, 0, $width, $height, $orig_width, $orig_height);

        switch ($type) {
            case 'image/jpeg':
                imagejpeg($thumb_image, $dest);
                break;
            case 'image/png':
                imagepng($thumb_image, $dest);
                break;
            case 'image/gif':
                imagegif($thumb_image, $dest);
                break;
        }

        imagedestroy($source_image);
        imagedestroy($thumb_image);
    }
}
?>
