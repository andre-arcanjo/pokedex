import BgLight from '../../public/light-mode.jpg'
import BgDark from '../../public/dark-mode.webp'

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            background: BgLight,
            backgroundColor: 'bg-neutral-700',
            textColor: 'text-black',
        },
    },
    dark: {
        name: 'dark',
        layout: {
            background: BgDark,
            backgroundColor: 'bg-gray-700',
            textColor: 'text-white',
        },
    }
}