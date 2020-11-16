// tailwind.config.js
module.exports = {
    theme: {
      screens: {
        'xs': {'min': '300px', 'max': '640px'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px'},
      },
      theme: {
        colors: {
          org: '#FFA000',
          blu: '#3697F8',
        }
      }
    }
  }
