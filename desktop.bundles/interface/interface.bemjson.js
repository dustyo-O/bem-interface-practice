/**
 * Created by dusty on 12.08.16.
 */
({
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
            content: 'header here'
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
})