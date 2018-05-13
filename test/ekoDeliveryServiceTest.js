/// EkoDeliveryServiceTest

var fromCity = ['A', 'A', 'A', 'B', 'C', 'C', 'D', 'E', 'E','F'];
var toCity = ['B', 'C', 'D', 'E', 'D', 'F', 'E', 'B', 'A','D'];
var cost = [1,4,10,3,4,2,1,3,2,1];

var ekoDeliveryService = require('../ekoDeliveryService');
var availableRoutes = require('../ekoDeliveryService-2');
const assert = require('chai').assert;
const eds = require('../eds');

describe('ekoDeliveryService', function(){
	it('A-B-E should return 4', function(){
		assert.equal(ekoDeliveryService.getDeliveryCost(fromCity, toCity, cost, 'A-B-E'), 4);
	});
});