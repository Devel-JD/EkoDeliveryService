var deliveryCost = require('./ekoDeliveryService');
var availableRoutes = require('./ekoDeliveryService-2');

var fromCity =[],
		toCity = [],
		cost = [];
var fullRoute = process.argv[2];
var eachRoute = fullRoute.split(",");

var graph = {};
eachRoute.forEach(function(route){
	fromCity.push(route.substring(0,1));
	graph[route.substring(0,1)] = [];
	toCity.push(route.substring(1,2));
	cost.push(route.substring(2));
});

for(var i = 0; i < fromCity.length; i++){
	graph[fromCity[i]].push(toCity[i]);
}

if(process.argv[3] == "deliveryCost"){
	var routingCost = deliveryCost.getDeliveryCost(fromCity, toCity, cost, process.argv[4]);
	console.log("The delivery cost for " + process.argv[4] + " is : " + routingCost);
}else if(process.argv[3] == "availableRoutes"){
	var availablePaths = availableRoutes.getAvailableRoutes(graph, process.argv[4], process.argv[5]);
	console.log("The available routes from " + process.argv[4] + " To " + process.argv[5] + " is : " + availablePaths.length);
}else if(process.argv[3] == "cheapestRoutes"){
	var availablePaths = availableRoutes.getAvailableRoutes(graph, process.argv[4], process.argv[5]);
	var cheapestPath = 0;
	
	availablePaths.forEach(function(path){
		var pathInDetail = path[0];
		
		for(var i = 1; i < path.length; i++){
				pathInDetail += "-" + path[i];
		}
		
		var pathCost = deliveryCost.getDeliveryCost(fromCity, toCity, cost, pathInDetail);
		if(pathCost < cheapestPath || cheapestPath == 0){
			cheapestPath = pathCost;
		}
	});
	
	console.log("The cheapest route from " + process.argv[4] + " to " + process.argv[5] + " is : " + cheapestPath);
	
}