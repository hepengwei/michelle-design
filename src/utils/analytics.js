import ReactGA from "react-ga4";

const TRACKING_ID = "G-18CYECQ04J";

function init() {
  ReactGA.initialize(TRACKING_ID);
}

function sendEvent(payload) {
  ReactGA.event(payload);
}

function sendPageview(path) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export default {
  init,
  sendEvent,
  sendPageview,
};
