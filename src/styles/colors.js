


const colors = {


    'primary':      (light = false) => (light ? '#719DF0' : '#5A8DEE'),
    'secondary':    (light = false) => (light ? '#506B8B' : '#475F7B'),
    'success':      (light = false) => (light ? '#4EDE97' : '#39DA8A'),
    'danger':       (light = false) => (light ? '#FF7575' : '#FF5B5C'),
    'warning':      (light = false) => (light ? '#FDB75A' : '#FDAC41'),
    'info':         (light = false) => (light ? '#00E7E7' : '#00CFDD'),

    'light':        (light = false) => (light ? '#A3AFBD' : '#A3AFBD'),
    'dark':         (light = false) => (light ? '#394C62' : '#394C62'),

    'main':         (light = false) => (light ? '#272E48' : '#1A233A'),
    'default':      (light = false) => (light ? '#464D5C' : '#343B53'),


    muted: {
        'primary':      () => '#364B7A',
        'secondary':    () => '#303D57',
        'success':      () => '#2C625C',
        'danger':       () => '#683B4E',
        'warning':      () => '#675446',
        'info':         () => '#1B5F75',
    },


    text: {
        'primary':      () => '#BDD1F8',
        'secondary':    () => '#8A99B5',
        'muted':        () => '#445B77'
    }

}



export default colors
