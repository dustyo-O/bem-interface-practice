/**
 * Created by dusty on 12.08.16.
 */
module.exports = {
    block : 'page',
    title : 'interface',
    head : [
        { elem : 'css', url : 'interface.min.css' },
        { block: 'font-awesome' }
    ],
    scripts : [{ elem : 'js', url : 'interface.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content: [
                {
                    block: 'header-menu',
                    content: [
                        {
                            block: 'left-part',
                            content: 'left menu'
                        },
                        {
                            block: 'middle-part',
                            content: 'middle icon'
                        },
                        {
                            block: 'right-part',
                            content: 'right menu'
                        }

                    ]
                }
            ]
        },
        {
            block : 'feed',
            content: 'feed here'
        },
        {
            block : 'footer',
            content: [
                {
                    block: 'footer-menu',
                    content: [
                        {
                            block: 'footer-menu-item',
                            content: 'item 1'
                        },
                        {
                            block: 'footer-menu-item',
                            content: 'item 2'
                        },
                        {
                            block: 'footer-menu-item',
                            content: 'item 3'
                        },
                        {
                            block: 'footer-menu-item',
                            mods: { 'fa-icon': 'tachometer' },
                            content: 'item 4'
                        }

                    ]
                }
            ]

        }

    ]
};
