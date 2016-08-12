/**
 * Created by dusty on 12.08.16.
 */
module.exports = {
    block : 'page',
    title : 'interface',
    head : [
        { elem : 'css', url : 'interface.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'interface.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content: [
                {
                    block: 'head-menu',
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
            content: 'footer here'

        }

    ]
};