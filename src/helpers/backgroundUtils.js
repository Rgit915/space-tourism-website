//  Utility function to determine the background class based on the current route and screen width.

const getBackgroundClass = (path, screenWidth) => {

  // Define mappings of routes to background classes for different screen sizes
   const mappings = {
    '/': {
      mobile: 'bg-home-mobile',
      tablet: 'bg-home-tablet',
      desktop: 'bg-home-desktop',
    },
    '/destination': {
      mobile: 'bg-destination-mobile',
      tablet: 'bg-destination-tablet',
      desktop: 'bg-destination-desktop',
    },
    '/crew': {
      mobile: 'bg-crew-mobile',
      tablet: 'bg-crew-tablet',
      desktop: 'bg-crew-desktop',
    },
    '/technology': {
      mobile: 'bg-technology-mobile',
      tablet: 'bg-technology-tablet',
      desktop: 'bg-technology-desktop',
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
