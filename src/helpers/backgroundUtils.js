//  Utility function to determine the background class based on the current route and screen width.

const getBackgroundClass = (path, screenWidth) => {

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

 // Get the mappings for the current route or default to an empty object
  const routeMappings = mappings[path] || {};
  let backgroundClass = '';

  if (screenWidth < 768) {
    backgroundClass = routeMappings.mobile || '';
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    backgroundClass = routeMappings.tablet || '';
  } else {
    backgroundClass = routeMappings.desktop || '';
  }

  return backgroundClass;
};

export default getBackgroundClass;
