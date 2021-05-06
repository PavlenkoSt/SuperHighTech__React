class Header {
    items = [
        { link: '/new-products', name: 'Новинки' },
        { link: '/super-price', name: 'Суперцена' },
        { link: '/apple', name: 'Apple' },
        { link: '/samsung', name: 'Samsung' },
        { link: '/xiaomy', name: 'Xiaomy' },
        { link: '/huawei', name: 'Huawei' },
        { link: '/zte', name: 'ZTE' },
        { link: '/realmy', name: 'Realmy' },
    ]
    get allLinks(){
        return this.items.map(item => item.link)
    }
}


export default new Header()