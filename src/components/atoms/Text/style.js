import colors from '../../../styles/colors'
import dimensions from '../../../styles/dimensions'



const getText = (color, size, hovered) => {
    const text = (style[color] || style['primary'])(hovered)

    return {
        fontFamily: 'Rubik, sans-serif',
        ...dimensions.text[size],
        ...text
    }
}



const style = {
    text: (color = 'primary', size = 'md', hovered = false) => getText(color, size, hovered),


    'primary': () => ({
        color: colors.text.primary()
    }),

    'secondary': () => ({
        color: colors.text.secondary()
    }),

    'muted': () => ({
        color: colors.text.muted()
    }),

    'brand': (hoverd) => ({
        color: colors.primary(hoverd)
    }),

    'success': (hoverd) => ({
        color: colors.success(hoverd)
    }),

    'info': (hoverd) => ({
        color: colors.info(hoverd)
    }),

    'warning': (hoverd) => ({
        color: colors.warning(hoverd)
    }),

    'danger': (hoverd) => ({
        color: colors.danger(hoverd)
    })
}


export default style
