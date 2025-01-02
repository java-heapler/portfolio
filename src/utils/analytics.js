import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
};

export const logPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const logEvent = (category, action, label) => {
  console.log('Analytics Event:', { category, action, label });
  ReactGA.event({
    category,
    action,
    label
  });
};

export const logTiming = (category, variable, value, label) => {
  ReactGA.timing({
    category,
    variable,
    value,
    label
  });
};

export const logException = (description, fatal = false) => {
  ReactGA.exception({
    description,
    fatal
  });
}; 