import colors from '../../../styles/colors'



const globalStyle = {
    display:        'flex',
    alignItems:     'center',
    height:         44,
    paddingLeft:    12,
    paddingRight:   12,
    borderRadius:   4,
    cursor:         'pointer',
}



const getItem = function (color) {
    const item = (style[color] || style['transparent'])()

    return {
        ...globalStyle,
        ...item
    }
}



const style = {
    item: (color = 'transparent') => getItem(color),


    'primary': () => ({
        backgroundColor: colors.muted.primary(0.5)
    }),

    'secondary': () => ({
        backgroundColor: colors.muted.secondary(0.5)
    }),

    'success': () => ({
        backgroundColor: colors.muted.success(0.5)
    }),

    'info': () => ({
        backgroundColor: colors.muted.info(0.5)
    }),

    'warning': () => ({
        backgroundColor: colors.muted.warning(0.5)
    }),

    'danger': () => ({
        backgroundColor: colors.muted.danger(0.5)
    }),

    'none': () => ({
        backgroundColor: null
    })
}



export default style
