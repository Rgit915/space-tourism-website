//  Utility function to determine the background class based on the current route and screen width.

const getBackgroundClass = () => {

  // Define mappings of routes to background classes for different screen sizes
   const mappings = {
    '/': {
      mobile: 'bgHomeMobile',
      tablet: 'bgHomeTablet',
      desktop: 'bgHomeDesktop',
    },
    '/destination': {
      mobile: 'bgDestinationMobile',
      tablet: 'bgDestinationTablet',
      desktop: 'bgDestinationDesktop',
    },
    '/crew': {
      mobile: 'bgCrewMobile',
      tablet: 'bgCrewTablet',
      desktop: 'bgCrewDesktop',
    },
    '/technology': {
      mobile: 'bgTechnologyMobile',
      tablet: 'bgTechnologyTablet',
      desktop: 'bgTechnologyDesktop',
    },

  };


};

export default getBackgroundClass;
