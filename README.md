# EkoDeliveryService

READ ME:

To get the delivery cost: 
	run commnad: node eds.js [fullRoutes] deliveryCost [route]
	Example: node eds.js "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1" deliveryCost "E-A-C-F"

----------

To get the available routes from a City to another City:
	Run command: node eds.js [fullRoutes] availableRoutes [fromCity] [toCity]
	Example: node eds.js "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1" availableRoutes "E" "D"
	
----------

To get the cheapest path from a City to another City:
	Run command: node eds.js [fullRoutes] cheapestRoutes [fromCity] [toCity]
	Example: node eds.js "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1" cheapestRoutes "E" "D"
