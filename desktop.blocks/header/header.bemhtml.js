block('header')(
    js()(true),
    content()(
        {
            block : 'menu',
            mods : { theme : 'islands', size : 'm'},
            content : [
                {
                    block: 'menu-item',
                    mods: { 'fa-icon': 'fa-user-plus' }
                },
                {
                    block: 'menu-item',
                    mods: {'fa-icon': 'twitter'}
                },
                {
                    block: 'menu-item',
                    mods: {'fa-icon': 'search'}
                },
                {
                    block: 'menu-item',
                    mods: {'fa-icon': 'fa-pencil-square-o'}
                }
            ]
        }
    )
);
