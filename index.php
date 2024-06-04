<?php

echo("<h4>1</h4>");
function printOddOrEvenNumbers() {
    $num = 0;
    do {
        if ($num == 0) {
            echo "$num – это ноль<br>";
        } elseif ($num % 2 == 0) {
            echo "$num – чётное<br>";
        } else {
            echo "$num – нечётное<br>";
        }
        $num++;
    } while ($num <= 10);
}
printOddOrEvenNumbers();

echo("<h4>2</h4>");
$regions = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Касимов', 'Скопин', 'Сасово', 'Новомичуринск']
];

foreach ($regions as $region => $cities) {
    echo "$region:\n";
    echo implode(', ', $cities) . ".\n";
}

echo("<h4>3</h4>");
    $letters = array(
            'а' => 'a',
            'б' => 'b',
            'в' => 'v',
            'г' => 'g',
            'д' => 'd',
            'e' => 'e',
            'ж' => 'zh',
            'з' => 'z',
            'и' => 'i',
            'й' => 'j',
            'к' => 'k',
            'л' => 'l',
            'м' => 'm',
            'н' => 'n',
            'о' => 'o',
            'п' => 'p',
            'р' => 'r',
            'с' => 's',
            'т' => 't',
            'у' => 'u',
            'ф' => 'f',
            'х' => 'kh',
            'ц' => 'ts',
            'ч' => 'ch',
            'ш' => 'sh',
            'щ' => 'shch',
            'ы' => 'y',
            'э' => 'e',
            'ю' => 'yu',
            'я' => 'ya'
    );

    function transliterateRusToLat($string, $letters) {
        return strtr($string, $letters);
    }
    
    $inputString = "пример текста для транслитерации";
    $outputString = transliterateRusToLat($inputString, $letters);
    echo $outputString;

echo("<h4>4</h4>");
    $menu =  array(
        array(
            'title' => 'О компании',
            'link' => 'menu1',
            'submenu' => array(
                array(
                    'title' => 'Контакты',
                    'link' => 'sub-menu1',
                    'submenu' => array(
                        array(
                            'title' => 'Наша миссия',
                            'link' => 'sub-menu2',
                    ),
                ),
            ),
        ),
    ),
);

function createMenu($menu) {
    echo '<ul>';
        $count = count($menu);
        for ($i = 0; $i < $count; $i++) {
            $value = $menu[$i];
            echo '<li>';
            echo "<a href='{$value['link']}'> {$value['title']} </a>";
            if (isset($value['submenu'])) {
                createMenu($value['submenu']);
            }
            echo '</li>';
    }
    echo '</ul>';
}
createMenu($menu);

echo("<h4>6</h4>");
$regions = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Касимов', 'Скопин', 'Сасово', 'Новомичуринск']
];

foreach ($regions as $region => $cities) {
    $filteredCities = array_filter($cities, function($city) {
        return mb_substr($city, 0, 1) === 'К';
    });
    
    if (!empty($filteredCities)) {
        echo "$region:\n";
        echo implode(', ', $filteredCities) . ".\n";
    }
}

?>
