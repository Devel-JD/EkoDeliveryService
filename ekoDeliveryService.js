module.exports = {
	getDeliveryCost : (fromCity, toCity, cost, theRoute) => {

		var splitTheRoute = theRoute.split("-");
		var deliveryCost = 0;
		var routeFound = true;

		for(var routingCity = 0; routingCity < splitTheRoute.length - 1; routingCity++){
			var currentNode = splitTheRoute[routingCity];
			routeFound = false;
	
			if(splitTheRoute[routingCity + 1] == null) routeFound = true;
			for(var i = 0; i < fromCity.length; i++){
				if(splitTheRoute[routingCity + 1] && fromCity[i] == currentNode && toCity[i] == splitTheRoute[routingCity + 1]){
					deliveryCost += cost[i] * 1;
					routeFound = true;
				}
			}
			if(!routeFound) break;
		}

		if(routeFound)
			return deliveryCost;
		else
			return "No Such Route";
	}

};