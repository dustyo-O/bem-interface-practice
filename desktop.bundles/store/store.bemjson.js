/**
 * Created by dusty on 12.08.16.
 */
({
    block : 'page',
    title : 'store',
    head : [
        { elem : 'css', url : 'store.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'store.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'head',
            content:
            {
                block: 'layout',
                content:
                [
                    {
                        elem: 'left',
                        content: 'left here'
                    },
                    {
                        elem: 'right',
                        content: 'right here'
                    }
                ]
            }
        }

    ]
})