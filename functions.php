<?php

function get_images_from_directory($dir) {
    $images = [];
    $thumb_dir = 'thumbnails';
    if ($handle = opendir($dir)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != ".." && is_file($dir . '/' . $entry)) {
                $images[] = [
                    'path' => $dir . '/' . $entry,
                    'thumbnail' => $thumb_dir . '/' . $entry
                ];
            }
        }
        closedir($handle);
    }
    return $images;
}

function log_request() {
    $logfile = 'log.txt';
    $log_data = date('Y-m-d H:i:s') . " - " . $_SERVER['REMOTE_ADDR'] . "\n";
    file_put_contents($logfile, $log_data, FILE_APPEND);

    $log_lines = file($logfile, FILE_IGNORE_NEW_LINES);
    if (count($log_lines) >= 10) {
        $archive_file = 'logs/log' . time() . '.txt';
        rename($logfile, $archive_file);
        file_put_contents($logfile, '');
    }
}
