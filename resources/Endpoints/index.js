module.exports = Object.freeze({

  // NEW LOGINS
  CSRF_TOKEN: 'https://www.epicgames.com/id/api/csrf',
  API_LOGIN: 'https://www.epicgames.com/id/api/login',
  API_EXCHANGE_CODE: 'https://www.epicgames.com/id/api/exchange',

  // LOGIN
  OAUTH_TOKEN: 'https://account-public-service-prod03.ol.epicgames.com/account/api/oauth/token',
  OAUTH_EXCHANGE: 'https://account-public-service-prod03.ol.epicgames.com/account/api/oauth/exchange',
  OAUTH_KILL_SESSION: 'https://account-public-service-prod03.ol.epicgames.com/account/api/oauth/sessions/kill',
  EULA: 'https://eulatracking-public-service-prod06.ol.epicgames.com/eulatracking/api/public/agreements',
  ENTITLEMENTS: 'https://entitlement-public-service-prod08.ol.epicgames.com/entitlement/api/account',
  ORDER_PURCHASE: 'https://orderprocessor-public-service-ecomprod01.ol.epicgames.com/orderprocessor/api/shared/accounts',
  CAPTCHA_PURCHASE: 'https://launcher-website-prod07.ol.epicgames.com/purchase',

  // ACCOUNT
  ACCOUNT: 'https://account-public-service-prod03.ol.epicgames.com/account/api/public/account',
  ACCOUNT_BY_NAME: 'https://account-public-service-prod03.ol.epicgames.com/account/api/public/account/displayName',

  // FN ENDPOINTS
  STATS_BR_V1: 'https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/stats/accountId',
  STATS_BR_V2: 'https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/statsv2/account',
  SERVER_STATUS: 'https://lightswitch-public-service-prod06.ol.epicgames.com/lightswitch/api/service/bulk/status?serviceId=Fortnite',
  BR_STORE: 'https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/storefront/v2/catalog',
  BR_NEWS: 'https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game',
  EVENT_FLAGS: 'https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/calendar/v1/timeline',

  // STW
  PVE_INFO: 'https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/game/v2/world/info',

  // COMMUNICATOR
  XMPP_SERVER: 'xmpp-service-prod.ol.epicgames.com',
  EPIC_PROD_ENV: 'prod.ol.epicgames.com',

  // FRIENDS
  FRIENDS: 'https://friends-public-service-prod06.ol.epicgames.com/friends/api/public/friends',
  FRIENDS_BLOCKLIST: 'https://friends-public-service-prod06.ol.epicgames.com/friends/api/public/blocklist',

});
