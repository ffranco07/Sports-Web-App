// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.4.22:8083/gtconnect/sports',
  version: '1.0.0',
  footballId: 86,
  basketballId: 87,
  amfootballId: 88,
  baseballId: 90,
  boxingId: 91,
  iceHockeyId: 92,
  pusherKey: '0963a598165ef0fa03a5',
  pusherCluster: 'us3',
  footballChannelName: 'football',
  basketballChannelName: 'basketball',
  amFootballChannelName: 'amfootball',
  baseballChannelName: 'baseball',
  boxingChannelName: 'boxing'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
