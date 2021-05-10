import hdMultimediaPleerAppleTv4k32gbBlack from '../assets/Apple/hd-multimedia-pleer-apple-tv-4k-32gb-black.jpg'
import mobilnyjTelefonAppleIphoneXr128gbBlack from '../assets/Apple/mobilnyj-telefon-apple-iphone-xr-128gb-black.jpg'
import bluetoothGarnituraAppleAirpods2WhiteMv7n2 from '../assets/Apple/bluetooth-garnitura-apple-airpods-2-white-mv7n2.jpg'
import mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Red from '../assets/Samsung/mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-red.jpg'
import mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Blue from '../assets/Samsung/mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-blue.jpg'
import mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Black from '../assets/Samsung/mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-black.jpg'
import fitnesTrekerXiaomiMiSmartBand5Black from '../assets/Xiaomi/fitnes-treker-xiaomi-mi-smart-band-5-black.jpg'
import mobilnyjTelefonHuaweiY6p64gbBlack from '../assets/Huawei/mobilnyj-telefon-huawei-y6p-64gb-black.jpg'
import mobilnyjTelefonZteBladeL816gbBlue from '../assets/ZTE/mobilnyj-telefon-zte-blade-l8-16gb-blue.jpg'
import mobilnyjTelefonXiaomiRedmiNote9364gbPolarWhite from '../assets/Xiaomi/mobilnyj-telefon-xiaomi-redmi-note-9-364gb-polar-white.jpg'
import mobilnyjTelefonXiaomiRedmiNote94128gbMidnightGrey from '../assets/Xiaomi/mobilnyj-telefon-xiaomi-redmi-note-9-4128gb-midnight-grey.jpg'
import fitnesTrekerXiaomiMiBand3Black from '../assets/Xiaomi/fitnes-treker-xiaomi-mi-band-3-black.jpg'
import fitnesTrekerHuaweiColorBandA2HonorA2Aw61Black from '../assets/Huawei/fitnes-treker-huawei-color-band-a2-honor-a2-aw61-black.jpg'



export type ProductType = {
    id: number
    name: string
    company: string
    price: string
    photo: string 
    date: string
    category: string
    features: {
        short: Array<FeaturesItem>
        full: Array<FeaturesItem> | Array<never>
    }
    description: {
        short: string
        full: Array<FullDescriptionItem>
    },
    inStock: boolean,
    url: string
}

export type FullDescriptionItem = {
    header: string
    photo: string | null
    text: string
}

export type FeaturesItem = {
    name: string
    value: string
}

const products: Array<ProductType> | any = [
    {
        id: 0, 
        name: 'HD Мультимедиа плеер Apple TV 4K 32GB Black', 
        company: 'Apple', 
        price: '5 149,00', 
        photo: hdMultimediaPleerAppleTv4k32gbBlack,
        date: '30.4.2021',
        category: 'Apple TV',
        features: {
            short: [
                { name: 'Встроенная память, ГБ', value: '32' },
                { name: 'Wi-Fi', value: '802.11ac' },
                { name: 'Ethernet', value: '+ (Gigabit Ethernet)' },
                { name: 'HDMI', value: '+ (2.0)' },
                { name: 'Композитный', value: 'нет' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Размеры, мм', value: '35x98x98' }
            ]
        },
        description: {
            short: 'Компания Apple обновила популярный медиаплейер. Apple TV 4K 32Gb (MQD22) построен на новом процессоре A10X Fusion с 64-битной архитектурой, который по результатам тестов на 27% превосходит по скорости быстродействия и обработки данных предыдущие поколения. Стоит отметить обновлённые стандарты передачи данных по беспроводной технологии Bluetooth 5.0.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'hd-multimedia-pleer-apple-tv-4k-32gb-black'
    },
    {
        id: 1, 
        name: 'Мобильный телефон Apple iPhone Xr 128GB Black', 
        company: 'Apple', 
        price: '22 058,00', 
        photo: mobilnyjTelefonAppleIphoneXr128gbBlack,
        date: '30.4.2021',
        category: 'Apple iPhone',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'iOS' },
                { name: 'Оперативная память, ГБ', value: '3' },
                { name: 'Встроенная память, ГБ', value: '128' },
                { name: 'Слот расширения', value: 'нет' },
                { name: 'Тип SIM-карты', value: 'Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '1' },
                { name: 'Процессор', value: 'Apple A12 Bionic' },
                { name: 'Количество ядер', value: '6' },
                { name: 'Аккумуляторная батарея, мАч', value: '2942' },
                { name: 'Диагональ, дюймы', value: '6,1' },
                { name: 'Разрешение', value: '1792x828' },
                { name: 'Основная камера, Мп', value: '12' },
                { name: 'Фронтальная  камера, Мп', value: '7' },
                { name: 'Материал корпуса', value: 'Алюминий/Стекло' },
                { name: 'Размеры, мм', value: '150,9x75,7x8.3' },
            ]
        },
        description: {
            short: 'iPhone XR - представитель новой линейки смартфонов Apple. В версии XR (читается как "десять R") смартфон получил дизайн от стандартной модели iPhone X, но задняя панель выполнена по образу iPhone 8 из стекла. В отличии от X, XR оснащен IPS-матрицей, а не AMOLED, но это по-прежнему качественный экран с расширенной цветовой гаммой, пусть и с относительно невысоким разрешением.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-apple-iphone-xr-128gb-black'
    },
    {
        id: 2, 
        name: 'Bluetooth гарнитура Apple AirPods 2 White MV7N2', 
        company: 'Apple', 
        price: '3 950,00', 
        photo: bluetoothGarnituraAppleAirpods2WhiteMv7n2,
        date: '30.4.2021',
        category: 'Apple AirPods',
        features: {
            short: [
                { name: 'Способ подключения / радиус действия', value: 'беспроводной (Bluetooth)' },
                { name: 'Тип конструкции', value: 'вкладыши' },
                { name: 'Тип акустического оформления', value: 'открытые' },
                { name: 'Тип крепления', value: 'внутриканальное' },
                { name: 'Вес, г', value: 'каждый по 4 г' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: []
        },
        description: {
            short: 'Apple решило пойти нестандартным путем и выпустило две версии обновленных наушников AirPods. Для людей кому не важна беспроводная зарядка, а важен функционал отлично подойдут AirPods with Charging Case (MV7N2).',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'bluetooth-garnitura-apple-airpods-2-white-mv7n2'
    },
    {
        id: 3, 
        name: 'Samsung Galaxy A01 Core 16GB SM-A013 Red', 
        company: 'Samsung', 
        price: '2 395,00', 
        photo: mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Red,
        date: '11.4.2021',
        category: 'Samsung Galaxy A серия',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '1' },
                { name: 'Встроенная память, ГБ', value: '16' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Процессор', value: 'MediaTek' },
                { name: 'Количество ядер', value: '4' },
                { name: 'Аккумуляторная батарея, мАч', value: '3000' },
                { name: 'Диагональ, дюймы', value: '5,3' },
                { name: 'Разрешение', value: '1480x720' },
                { name: 'Основная камера, Мп', value: '8' },
                { name: 'Фронтальная  камера, Мп', value: '5' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Размеры, мм', value: '141x67x8,7' },
            ]
        },
        description: {
            short: 'Samsung Galaxy A01 Core – максимально доступный смартфон в линейке устройств компании. Он ориентирован на использование в базовых задачах, таких как звонки, общение в мессенджерах, чтение и т.д.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-red'
    },
    {
        id: 4, 
        name: 'Фитнес-трекер Xiaomi Mi Smart Band 5 Black', 
        company: 'Xiaomi', 
        price: '999,90', 
        photo: fitnesTrekerXiaomiMiSmartBand5Black,
        date: '13.4.2021',
        category: 'Xiaomi гаджеты',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Аккумуляторная батарея, мАч', value: '125' },
                { name: 'Диагональ, дюймы', value: '1,2' },
                { name: 'Разрешение', value: '126x294' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Пульсометр', value: '+ (оптический)' },
                { name: 'Подсчет шагов', value: 'есть' },
                { name: 'Отслеживание сна', value: 'есть' },
                { name: 'Дисплей, тип', value: 'AMOLED' },
                { name: 'Допустимый обхват запястья', value: '20 мм (ширина ремешка)' },
                { name: 'Размеры, мм', value: '47,2х18,5х12,4' },
            ]
        },
        description: {
            short: 'Фитнес браслет Mi Smart Band 5 добавит в вашу повседневную жизнь больше комфорта и ярких красок. Чтобы подчеркнуть свою индивидуальность, установите на дисплее один из динамических или интерактивно-тематических циферблатов.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'fitnes-treker-xiaomi-mi-smart-band-5-black'
    },
    {
        id: 5, 
        name: 'Huawei Y6P 64GB Black', 
        company: 'Huawei', 
        price: '3 995,00', 
        photo: mobilnyjTelefonHuaweiY6p64gbBlack,
        date: '15.2.2021',
        category: 'Huawei Y серия',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '3' },
                { name: 'Встроенная память, ГБ', value: '64' },
                { name: 'Слот расширения', value: 'до 512' },
                { name: 'Тип SIM-карты', value: 'Nano' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Процессор', value: 'MediaTek MT6762R' },
                { name: 'Количество ядер', value: '8' },
                { name: 'Аккумуляторная батарея, мАч', value: '5000' },
                { name: 'Диагональ, дюймы', value: '6,3' },
                { name: 'Разрешение', value: '1600x720' },
                { name: 'Основная камера, Мп', value: '13 Мп + 5 Мп + 2 Мп' },
                { name: 'Фронтальная  камера, Мп', value: '8' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Размеры, мм', value: '159.1 x 74.1 x 9' },
            ]
        },
        description: {
            short: '6.3-дюймовый HD+ дисплей | 8-ядерный процессор Mediatek + 3 Гб ОЗУ | Тройная камера с разрешением до 13 Мп | Аккумулятор 5000 мАч | Функция обратной зарядки',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-huawei-y6p-64gb-black'
    },
    {
        id: 6, 
        name: 'ZTE Blade L8 16GB Blue', 
        company: 'ZTE', 
        price: '1 545,00', 
        photo: mobilnyjTelefonZteBladeL816gbBlue,
        date: '11.2.2021',
        category: 'ZTE L8 серия',
        features: {
            short: [
                { name: 'Встроенная память, ГБ', value: '16' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'Nano SIM' },
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Процессор', value: 'SC7731E' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество ядер', value: '4' },
                { name: 'Аккумуляторная батарея, мАч', value: '2000' },
                { name: 'Диагональ, дюймы', value: '4.95"' },
                { name: 'Разрешение', value: '1080x540' },
                { name: 'Основная камера, Мп', value: '8' },
                { name: 'Фронтальная  камера, Мп', value: '5' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Размеры, мм', value: '137,3 х 67,5 х 10,5' },
            ]
        },
        description: {
            short: 'ZTE BLADE L8 заключен в стильный эргономичный корпус с изогнутой задней панелью и скругленными углами. Компактные габариты и удобно расположенные элементы управления позволяют с комфортом пользоваться смартфоном даже одной рукой.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-zte-blade-l8-16gb-blue'
    },
    {
        id: 7, 
        name: 'Samsung Galaxy A01 Core 16GB SM-A013 Blue', 
        company: 'Samsung', 
        price: '2 395,00', 
        photo: mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Blue,
        date: '12.4.2021',
        category: 'Samsung Galaxy A серия',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '1' },
                { name: 'Встроенная память, ГБ', value: '16' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Процессор', value: 'MediaTek' },
                { name: 'Количество ядер', value: '4' },
                { name: 'Аккумуляторная батарея, мАч', value: '3000' },
                { name: 'Диагональ, дюймы', value: '5,3' },
                { name: 'Разрешение', value: '1480x720' },
                { name: 'Основная камера, Мп', value: '8' },
                { name: 'Фронтальная  камера, Мп', value: '5' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Размеры, мм', value: '141x67x8,7' },
            ]
        },
        description: {
            short: 'Samsung Galaxy A01 Core – максимально доступный смартфон в линейке устройств компании. Он ориентирован на использование в базовых задачах, таких как звонки, общение в мессенджерах, чтение и т.д.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-blue'
    },
    {
        id: 8, 
        name: 'Samsung Galaxy A01 Core 16GB SM-A013 Black', 
        company: 'Samsung', 
        price: '2 395,00', 
        photo: mobilnyjTelefonSamsungGalaxyA01Core16gbSmA013Black,
        date: '13.4.2021',
        category: 'Samsung Galaxy A серия',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '1' },
                { name: 'Встроенная память, ГБ', value: '16' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Процессор', value: 'MediaTek' },
                { name: 'Количество ядер', value: '4' },
                { name: 'Аккумуляторная батарея, мАч', value: '3000' },
                { name: 'Диагональ, дюймы', value: '5,3' },
                { name: 'Разрешение', value: '1480x720' },
                { name: 'Основная камера, Мп', value: '8' },
                { name: 'Фронтальная  камера, Мп', value: '5' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Размеры, мм', value: '141x67x8,7' },
            ]
        },
        description: {
            short: 'Samsung Galaxy A01 Core – максимально доступный смартфон в линейке устройств компании. Он ориентирован на использование в базовых задачах, таких как звонки, общение в мессенджерах, чтение и т.д.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-samsung-galaxy-a01-core-16gb-sm-a013-black'
    },
    {
        id: 9, 
        name: 'Мобильный телефон Xiaomi Redmi Note 9 3/64GB Polar White', 
        company: 'Xiaomi', 
        price: '5 195,00', 
        photo: mobilnyjTelefonXiaomiRedmiNote9364gbPolarWhite,
        date: '21.3.2021',
        category: 'Redmi',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '3' },
                { name: 'Встроенная память, ГБ', value: '64' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'Nano SIM + Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Количество ядер', value: '6' },
                { name: 'Диагональ, дюймы', value: '6,53' },
                { name: 'Разрешение', value: '2340x1080' },
                { name: 'Основная камера, Мп', value: '48 + 8 + 8' },
                { name: 'Фронтальная  камера, Мп', value: '2' },
                { name: 'Материал корпуса', value: 'Алюминий/Стекло' },
                { name: 'Размеры, мм', value: '150,9x75,7x8.3' },
            ]
        },
        description: {
            short: 'Использование современного процессора MediaTek Helio G85 с частотой до 2.0 ГГц позволило увеличить производительность смартфона, его вычислительную мощность и быстродействие. Redmi Note 9 легко справляется со сложными заданиями, требовательными к ресурсам играми и приложениями, демонстрируя быструю и плавную работу всех программ и систем.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-xiaomi-redmi-note-9-364gb-polar-white'
    },
    {
        id: 10, 
        name: 'Мобильный телефон Xiaomi Redmi Note 9 4/128GB Midnight Grey', 
        company: 'Xiaomi', 
        price: '5 795,00', 
        photo: mobilnyjTelefonXiaomiRedmiNote94128gbMidnightGrey,
        date: '21.5.2021',
        category: 'Redmi',
        features: {
            short: [
                { name: 'Предустановленная ОС', value: 'Android' },
                { name: 'Оперативная память, ГБ', value: '4' },
                { name: 'Встроенная память, ГБ', value: '128' },
                { name: 'Слот расширения', value: 'microSD' },
                { name: 'Тип SIM-карты', value: 'micro SIM + Nano SIM' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Количество SIM-карт', value: '2' },
                { name: 'Количество ядер', value: '6' },
                { name: 'Диагональ, дюймы', value: '6,53' },
                { name: 'Разрешение', value: '2340x1080' },
                { name: 'Основная камера, Мп', value: '48 + 8 + 8' },
                { name: 'Фронтальная  камера, Мп', value: '2' },
                { name: 'Материал корпуса', value: 'Алюминий/Стекло' },
                { name: 'Размеры, мм', value: '150,9x75,7x8.3' },
            ]
        },
        description: {
            short: 'Использование современного процессора MediaTek Helio G85 с частотой до 2.0 ГГц позволило увеличить производительность смартфона, его вычислительную мощность и быстродействие. Redmi Note 9 легко справляется со сложными заданиями, требовательными к ресурсам играми и приложениями, демонстрируя быструю и плавную работу всех программ и систем.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'mobilnyj-telefon-xiaomi-redmi-note-9-4128gb-midnight-grey'
    },
    {
        id: 11, 
        name: 'Фитнес-трекер Xiaomi Mi Band 3 Black', 
        company: 'Xiaomi', 
        price: '499,90', 
        photo: fitnesTrekerXiaomiMiBand3Black,
        date: '17.4.2021',
        category: 'Xiaomi гаджеты',
        features: {
            short: [
                { name: 'Диагональ, дюймы', value: '1,2' },
                { name: 'Разрешение', value: '126x294' },
                { name: 'Уведомления о входящих событиях', value: 'есть' },
                { name: 'Время автономной работы', value: 'до 20 суток' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Дисплей, тип', value: 'OLED' },
                { name: 'Гарантия', value: '12 мес'}
            ],
            full: [
                { name: 'Пульсометр', value: '+ (оптический)' },
                { name: 'Подсчет шагов', value: 'есть' },
                { name: 'Отслеживание сна', value: 'есть' },
                { name: 'Дисплей, тип', value: 'AMOLED' },
                { name: 'Допустимый обхват запястья', value: '20 мм (ширина ремешка)' },
                { name: 'Размеры, мм', value: '47,2х18,5х12,4' },
            ]
        },
        description: {
            short: 'Фитнес браслет Mi Smart Band 5 добавит в вашу повседневную жизнь больше комфорта и ярких красок. Чтобы подчеркнуть свою индивидуальность, установите на дисплее один из динамических или интерактивно-тематических циферблатов.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'fitnes-treker-xiaomi-mi-smart-band-3-black'
    },
    {
        id: 12, 
        name: 'Фитнес-трекер Huawei Color Band A2 HONOR A2 AW61 Black', 
        company: 'Huawei', 
        price: '499,90', 
        photo: fitnesTrekerHuaweiColorBandA2HonorA2Aw61Black,
        date: '11.4.2021',
        category: 'Huawei гаджеты',
        features: {
            short: [
                { name: 'Уведомления о входящих событиях', value: '+ (звонки, сообщения)' },
                { name: 'Время автономной работы', value: 'до 10 суток' },
                { name: 'Материал корпуса', value: 'Пластик' },
                { name: 'Дисплей, тип', value: 'PMOLED' },
                { name: 'Гарантия', value: '14 дней'}
            ],
            full: [
                { name: 'Пульсометр', value: '+ (оптический)' },
                { name: 'Подсчет шагов', value: 'есть' },
                { name: 'Отслеживание сна', value: 'есть' },
                { name: 'Дисплей, тип', value: 'AMOLED' },
                { name: 'Допустимый обхват запястья', value: '20 мм (ширина ремешка)' },
                { name: 'Размеры, мм', value: '47,2х18,5х12,4' },
            ]
        },
        description: {
            short: 'Фитнес браслет Mi Smart Band 5 добавит в вашу повседневную жизнь больше комфорта и ярких красок. Чтобы подчеркнуть свою индивидуальность, установите на дисплее один из динамических или интерактивно-тематических циферблатов.',
            full: [
                {
                    header: '',
                    photo: '',
                    text: ''
                }
            ]
        },
        inStock: true,
        url: 'fitnes-treker-huawei-color-band-a2-honor-a2-aw61-black'
    },
]

export default products