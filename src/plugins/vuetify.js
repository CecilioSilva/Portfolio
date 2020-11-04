import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from '../App.vue'

Vue.use(Vuetify,{
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
});



const vuetify = new Vuetify({
    
    theme: {
        dark: App.darkTheme,
        themes: {
            dark: {
                primary: '#252526',
                secondary: '#282C34',
                accent: '#C678DD',
                error: '#E06C75',
                info: '#61AFEF',
                success: '#95BF78',
                warning: '#56B6C2',
                textColor: '#ABB2BF',
                commentColor: '#5C6370',
                iconColor: '#56B6C2'
            },
            light: {
                primary: '#EAEAEB',
                secondary: '#FAFAFA',
                accent: '#A626A4',
                error: '#E4564A',
                info: '#986801',
                success: '#50A14F',
                warning: '#424242',
                textColor: '#424242',
                commentColor: '#A0A1A7',
                iconColor: '#424242'
            },
        },
    },
})
export default vuetify
