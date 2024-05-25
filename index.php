<?php
date_default_timezone_set('Asia/Yekaterinburg');
$pageTitle = "PHP";
$headerTitle = "Текущее время:";

function getCurrentTime() {
    $hours = date("H");
    $minutes = date("i");

    if ($hours == 1 || $hours == 21) {
        $hoursSuffix = "час";
    } elseif (($hours >= 2 && $hours <= 4) || ($hours >= 22 && $hours <= 24)) {
        $hoursSuffix = "часа";
    } else {
        $hoursSuffix = "часов";
    }

    if ($minutes % 10 == 1 && $minutes != 11) {
        $minutesSuffix = "минута";
    } elseif (($minutes % 10 >= 2 && $minutes % 10 <= 4) && ($minutes < 10 || $minutes > 20)) {
        $minutesSuffix = "минуты";
    } else {
        $minutesSuffix = "минут";
    }

    return "$hours $hoursSuffix $minutes $minutesSuffix";
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?></title>
</head>
<body>
	<h1><?php echo $headerTitle ?></h1>
	<h2><?php print_r(getCurrentTime()) ?></h2>
</body>
</html>
