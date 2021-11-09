import colors from '../../../styles/colors'
import dimensions from '../../../styles/dimensions'



const defaultStyle = {
    fontFamily:     'Rubik, sans-serif',
    textDecoration: 'none'
}



const getLink = function (color, size, hovered) {
    const link = (style[color] || style['default'])(hovered)

    return {
        ...dimensions.text[size],
        ...link
    }
}



const style = {
    link: (color = 'primary', size = 'md', hovered = false) => getLink(color, size, hovered),


    'primary': () => ({
        ...defaultStyle,
        color: colors.text.primary()
    }),

    'secondary': () => ({
        ...defaultStyle,
        color: colors.text.secondary()
    }),

    'muted': () => ({
        ...defaultStyle,
        color: colors.text.muted()
    }),

    'brand': (hovered) => ({
        ...defaultStyle,
        color: colors.primary(hovered)
    }),

    'success': (hovered) => ({
        ...defaultStyle,
        color: colors.success(hovered)
    }),

    'info': (hovered) => ({
        ...defaultStyle,
        color: colors.info(hovered)
    }),

    'warning': (hovered) => ({
        ...defaultStyle,
        color: colors.warning(hovered)
    }),

    'danger': (hovered) => ({
        ...defaultStyle,
        color: colors.danger(hovered)
    })
}



export default style
