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



const getItem = function (active, color) {
    const item = (style[color] || style['transparent'])(active)

    return {
        ...globalStyle,
        ...item
    }
}



const style = {
    item: (active = false, color = 'transparent') => getItem(active, color),


    'primary': (active) => ({
        backgroundColor: (active ? colors.muted.primary() : 'transparent !important')
    }),

    'secondary': (active) => ({
        backgroundColor: (active ? colors.muted.secondary() : 'transparent !important')
    }),

    'success': (active) => ({
        backgroundColor: (active ? colors.muted.success() : 'transparent !important')
    }),

    'info': (active) => ({
        backgroundColor: (active ? colors.muted.info() : 'transparent !important')
    }),

    'warning': (active) => ({
        backgroundColor: (active ? colors.muted.warning() : 'transparent !important')
    }),

    'danger': (active) => ({
        backgroundColor: (active ? colors.muted.danger() : 'transparent !important')
    }),

    'transparent': () => ({
        backgroundColor: 'transparent !important'
    })
}



export default style
