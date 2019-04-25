
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map1", {
            center: [55.61828278, 37.62281850],
            zoom: 15
			
        }),
		
        myPlacemark = new ymaps.Placemark([55.61828278, 37.62281850], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://www.alexandersamar.com/frontend/AquaStone/images/pin.png',
			
            // Размеры метки.
            iconImageSize: [25, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-12, -35]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark),
	myMap.behaviors.disable('scrollZoom');

    var myMap = new ymaps.Map("map2", {
            center: [55.61828278, 37.62281850],
            zoom: 15

        }),

        myPlacemark = new ymaps.Placemark([55.61828278, 37.62281850], {
            // Свойства.
            hintContent: ''
        }, {
            // Опции.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://www.alexandersamar.com/frontend/AquaStone/images/pin.png',

            // Размеры метки.
            iconImageSize: [25, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-12, -35]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects.add(myPlacemark),
	myMap.behaviors.disable('scrollZoom');
}