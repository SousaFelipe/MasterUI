import colors from '../../../styles/colors'



const defaultStyle = {
    position:       'fixed',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'stretch',
    width:          260,
    height:         '100vh',
    padding:        16
}



const getNav = (color) => {
    return (style[color] || style['default'])()
}



const style = {
    nav: (color = 'main') => getNav(color),


    'main': () => ({
        ...defaultStyle,
        backgroundColor: colors.main()
    }),

    'default': (color) => ({
        ...defaultStyle,
        backgroundColor: colors.default()
    })
}



export default style
