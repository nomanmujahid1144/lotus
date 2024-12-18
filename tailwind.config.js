/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      },
      fontSize: {
        '24': '1.1rem',
        '1.2': '1.2rem',
        '1.5xl': '1.3rem',
        '26': '1.625rem',
        '28': '1.75rem',
        '30': '1.875rem',
        '32': '2rem',
        '2.3': '2.3rem',
        '2.5': '2.5rem',
        '2.61': '2.61rem',
        '2.68r': '2.6875rem',
        '325': '3.25rem',
        '3.5r': '3.5rem',
        '80': '4rem',
        '90': '5rem',
        '6': '.6rem',
        '100': '6.25rem',
        '108': '6.43rem',
        '118': '7.375rem',
        '123': '7.6875rem',
        '8': '.8rem',
        '142': '8.875rem',
        '144': '9rem',
        // For New Home Page
        '4.4' : '4.1rem'
      },
      fontWeight: {
        'light': '200',
        '300': '300'
      },
      boxShadow: {
        'outer': '6px 6px 0px #00000041',
        'card-outer': '12px 12px 0px #00000040',
        'card-outer-green': '12px 12px 0px #03FF00',
        'button': '6px 6px 0px #00000040',
        'button-green': '6px 6px 0px #03FF00',
        'white': '2px 2px 0px #fff',
        'black': '2px 2px 0px #000',
        'green': '2px 2px 0px #00FF03',
        'wrapper-button-green': '7px 7px 0px #03FF00',
        'button-green-hover': '4px 4px 0px #03ff00;',
        'inner': 'inset 4px 4px 0px #00000040',

        // New Home page
        'outer-new-home': '3px 3px 0px #00000041',

        // Investor Page Desktop Shadow
        'inner-light': 'inset 0 0 10px rgba(255, 255, 255, 0.23)',
        'outer-light': '0px -9px 18px #00FF002E',
        // Investor Page Mobile Navbar Shadow
        'mobile' : '0px 5px 10px #00000033',

      },
      borderColor: {
        'black': '#000000',
        'dark-gray': '#0D0D0D',
        'light-gray': '#00000040',
        'light': '#ffffff40',
        'hr': '#BFBFBF'
      },
      colors: {
        'white': '#FFFFFF',
        'yellowLight': '#FFFCEB',
        'yellowDark': '#F7EDB8',
        'purple': '#D869F3',
        'black': '#000000',
        'gray': '#252525',
        'gray-circle': '#404240',
        'green': '#00FF00',
        'gray-border' : '#E6E6E6', /* For Gray Border */
        // For New Home Page
        'gray-light': '#F5F5F5',
        'light-green': '#03FF00',

        // For blur-background
        'gray-blur': '#5e5e5e5e',

        // Investor page cards background color
        'gray-investor': '#1D1D1D',
        'gray-dark-investor': '#181818',
      },
      height: {
        'inherit': 'inherit',
        '121': '121px',
        '23.125r': '23.125rem',
        '18': '4.5rem',
        '19': '19rem',
        '21': '21rem',
        '23': '23rem',
        '25': '25rem',
        '26': '26rem',
        '27': '27rem',
        '28r': '28rem',
        '29r': '29rem',
        '35': '35rem',
        '31': '31rem',
        '39': '39rem',
        '43': '43rem',
        '40': '40rem',
        '66.7p': '67.7%',
        '40p': '40%',
        '50p': '50%',
        '54p': '54%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '95p': '95%',
        '105ch': '105ch',
        '110ch': '110ch',
        '120ch': '120ch',
      },
      width: {
        '121': '121px',
        '21r': '21rem',
        '23.125r': '23.125rem',
        '160': '16rem',
        '26': '26rem',
        '28r': '28rem',
        '28.5p': '28.5%',
        '35.75p': '35.75%',
        '40p': '40%',
        '45.7p': '45.7%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '95p': '95%',
        '31': '31rem',
        '32r': '32rem',
        '35': '35rem',
        '39': '39rem',
        '43': '43rem',
        '50': '50rem'
      },
      letterSpacing: {
        'space60': '0.6px',
        'space80': '0.8px',
        'space00': '0px',
        'space90': '0.9px',
        'space12': '1.2px',
        'space18': '1.8px',
        'space-25': '-25px',
        'space-346': '3.46px'
      },
      lineHeight: {
        '14': '0.875rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '26': '1.625rem',
        '30': '1.875rem',
        '32': '2rem',
        '34': '2.125rem',
        '40': '2.5rem',
        '42': '2.625rem',
        '43': '2.6875rem',
        '46': '2.875rem',
        '48': '3rem',
        '50': '3.125rem',
        '52': '3.25rem',
        '54': '3.375rem',
        '56': '3.5rem',
        '60': '3.75rem',
        '62': '3.875rem',
        '64': '4rem',
        '66': '4.125rem',
        '74': '4.625rem',
        '78': '4.875rem',
        '80': '5rem',
        '84': '5.25rem',
        '88': '5.5rem',
        '90': '5.625rem',
        '96': '6rem',
        '100': '6.25rem',
        '102': '6.375rem',
        '106': '6.625rem',
        '116': '7.25rem',
        '124': '7.75rem',
        '132': '8.25rem',
        '142': '8.875rem',
        '154': '9.625rem',
        '206': '12.875rem',
        '160': '10rem',
        '174': '10.875',
        '45': '4.5rem',
      },
      padding: {
        '0.2': '0.2rem',
        '0.25': '0.25rem',
        '0.3': '0.3rem',
        '0.5': '0.5rem',
        '1.4': '0.875rem',
        '1': '1rem',
        '1.8': '1.125rem',
        '3.2r': '3.2rem',
        '4.3r': '4.3rem',
        '18': '4.5rem',
        '5.3r': '5.3rem',
        '7.3r': '7.3rem',
        '38': '38px',
        '60': '60px',
        '70': '70px',
        '74': '74px',
        '78': '78px',
        '86': '86px',
        '90': '90px',
        '30': '30rem',
        '100': '100px',
        '105': '105px',
        '125': '125px',
        '138': '138px',
        '186': '186px',
        '186': '186px',
        '45r': '45rem',
        '25r': '25rem',
      },
      margin: {
        '70': '4.375rem',
        '18': '1.125rem',
        '3': '3rem',
      },
      borderWidth: {
        '0.5': '.5px',
        '3': '3px',
        '6': '6px',
        '9': '9px',
        '12': '12px',
      },
      borderRadius: {
        '4': '4px'
      },
      translate: {
        '2px': '2px',
      },
      gap: {
        '0.6r': '0.6rem', // Custom gap size
        '0.8r': '0.8rem', // Custom gap size
        '1.3r': '1.3rem', // Custom gap size
        '1.6r': '1.6rem', // Custom gap size
        '2.5': '2.5rem', // Custom gap size
        '3.3': '3.3rem', // Custom gap size
        '3.4': '3.4rem', // Custom gap size
        '4': '1rem', // Custom gap size
        '4.5': '4.5rem',
        '10':'10rem'
      },
      backdropBlur: {
        '1': '1px',
        '7': '7px',
        '10': '10px',
        '30': '30px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 0.8s step-end infinite',
      },
      blur:{
        '2p': '2px'
      }
    }
  },
  plugins: [],
};
