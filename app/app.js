var fido = angular.module('fideligard', ['ui.router']);

fido.config( function( $stateProvider, $urlRouterProvider) {
 /// config here
  $urlRouterProvider.otherwise('/stocks');

  $stateProvider

  .state( 'stocks', {
    url: '/stocks',
    controller: 'StocksCtrl',
    templateUrl: '/app/templates/stocks.html',
  })

 .state('stocks.portfolio', {
    url: '/portfolio',
    controller: 'PortfolioCtrl',
    templateUrl: "/app/templates/portfolio.html",
 })

 .state( 'stocks.trade', {
    url: '/trade',
    controller: 'TradeCtrl',
    template: "<div>Trade</div>",
 })

 .state( 'stocks.transactions', {
    url: '/transactions',
    controller: 'TransactionCtrl',
    template:  "<div>Transaction</div>",
 });
});