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
            block : 'header'
        },
        {
            block : 'feed',
            content: 'feed here'
        },
        {
            block : 'footer'
        }
    ]
};
