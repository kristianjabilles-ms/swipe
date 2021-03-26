import firebase from 'firebase/app';
import 'firebase/analytics';

const analytics = firebase.analytics();

export default {
  logEvent: (event, data) => {
    analytics.logEvent(event, data);
  }
}
