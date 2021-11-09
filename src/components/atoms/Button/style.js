import colors from '../../styles/colors'



const defaultStyle = {
    flex:           1,
    justifyContent: 'center',
    alignItems:     'center',
    border:         'none',
    borderRadius:   4,
    boxShadow:      '1px 1px 3px 0px rgba(0, 0, 0, 0.5)',
    fontFamily:     'Rubik, sans-serif',
    color:          'white',
    fontWeight:     400,
    cursor:         'pointer'
}



const sizes = {
    'sm': {
        height:         30,
        paddingLeft:    8,
        paddingRight:   8,
        fontSize:       11
    },
    'md': {
        height:         38,
        paddingLeft:    16,
        paddingRight:   16,
        fontSize:       14
    },
    'lg': {
        height:         48,
        paddingLeft:    24,
        paddingRight:   24,
        fontSize:       18
    }
}



const getButton = (color, size, hovered) => {
    const button = (style[color] || style['default'])(hovered)

    return {
        ...sizes[size],
        ...button
    }
}



const style = {
    button: (color = 'default', size = 'md', hovered = false) => getButton(color, size, hovered),


    'primary': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.primary(hover)
    }),

    'secondary': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.secondary(hover)
    }),

    'success': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.success(hover)
    }),

    'info': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.info(hover)
    }),

    'warning': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.warning(hover)
    }),

    'danger': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.danger(hover)
    }),

    'default': (hover) => ({
        ...defaultStyle,
        backgroundColor: colors.default(hover)
    })
}


export default style
