var self = module.exports = {
	
	isNotVisited : (node, path, dst) => {
		if(node == dst) return true;
		for(var i = 0; i < path.length; i++){
			if(node == path[i]) return false;
		}
		return true;
	},
	
	getAvailableRoutes : (graph, src, dst) => {
		var availablePaths = [];
		var path = [src];
		var q = [path];

		while(!q.length < 1){
			path = q.shift();
			var last = path[path.length - 1];

			if(last == dst && path.length > 1) {
				availablePaths.push(path);
				continue;
			}
	
			for(var i = 0; i < graph[last].length; i++){
				if(self.isNotVisited(graph[last][i], path, dst)){
					var newPath = path.slice();
					newPath.push(graph[last][i]);
					q.push(newPath);
				}
			}
		}
		
		return availablePaths;
	}
};









