<!-- // 1 -->

<?php
$a = 5;  
$b = -3; 
echo "<h4>1 задание</h4>";
if ($a >= 0 && $b >= 0) {
    echo "Разность: " . ($a - $b);
} elseif ($a < 0 && $b < 0) {
    echo "Произведение: " . ($a * $b);
} else {
    echo "Сумма: " . ($a + $b) . "<br/>";
}
?>
<!-- // 2 -->

<?php
echo "<h4>2 задание</h4>";
$a = rand(0, 15);  
echo "Начальное значение \$a: $a<br/>";

switch ($a) {
    case 0:
        echo "0, ";
    case 1:
        echo "1, ";
    case 2:
        echo "2, ";
    case 3:
        echo "3, ";
    case 4:
        echo "4, ";
    case 5:
        echo "5, ";
    case 6:
        echo "6, ";
    case 7:
        echo "7, ";
    case 8:
        echo "8, ";
    case 9:
        echo "9, ";
    case 10:
        echo "10, ";
    case 11:
        echo "11, ";
    case 12:
        echo "12, ";
    case 13:
        echo "13, ";
    case 14:
        echo "14, ";
    case 15:
        echo "15";
        break;
    default:
        echo "Значение вне диапазона от 0 до 15<br>";
}
?>
<!-- 3 -->
<?php
echo "<h4>3 задание</h4>";
function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b != 0) {
        return $a / $b;
    } else {
        return "Ошибка: Деление на ноль!";
    }
}

$a = 10;
$b = 5;

echo "Сложение: " . add($a, $b) . "<br>";
echo "Вычитание: " . subtract($a, $b) . "<br>";
echo "Умножение: " . multiply($a, $b) . "<br>";
echo "Деление: " . divide($a, $b) . "<br>";

echo "Деление на ноль: " . divide($a, 0) . "<br>";
?>

<!-- 4 -->
<?php
echo "<h4>4 задание</h4>";

function sum($a, $b) {
    return $a + $b;
}

function subtract1($a, $b) {
    return $a - $b;
}

function multiply1($a, $b) {
    return $a * $b;
}

function divide1($a, $b) {
    if ($b == 0) {
        return "Деление на ноль!";
    }
    return $a / $b;
}

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case "sum":
            return sum($arg1, $arg2);
        case "subtract1":
            return subtract1($arg1, $arg2);
        case "multiply1":
            return multiply1($arg1, $arg2);
        case "divide1":
            return divide1($arg1, $arg2);
        default:
            return "Неизвестная операция";
    }
}


echo mathOperation(10, 5, "sum") . "\n" . "<br/>";       // 15
echo mathOperation(10, 5, "subtract1") . "\n" . "<br/>";  // 5
echo mathOperation(10, 5, "multiply1") . "\n" . "<br/>";  // 50
echo mathOperation(10, 5, "divide1") . "\n" . "<br/>";    // 2
echo mathOperation(10, 0, "divide1") . "\n" . "<br/>";    // Ошибка
echo mathOperation(10, 5, "modulus") . "\n" . "<br/>";   // Ошибка
?>

<!-- 6 -->
<?php
echo "<h4>6 задание</h4>";
function power($val, $pow) {
    if ($pow === 0) {
        return 1;
    }
    elseif ($pow > 0) {
        return $val * power($val, $pow - 1);
    }
	elseif ($pow == 1) {
        return $val;
    }
    else {
        return 1 / power($val, -$pow);
    }
}

echo power(2, 3); 
echo("<br>");
echo power(5, -2);
echo("<br>");
echo power(9, 0);
echo("<br>");
echo power(3, 1); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Текущий год</title>
</head>
<body>
    <p>Текущий год: <?php echo date('Y'); ?></p>
</body>
</html>
