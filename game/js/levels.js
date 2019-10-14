////////////////////////////////////////////////////////////
// LEVELS
////////////////////////////////////////////////////////////

var levels_arr = [
					{
						level:{src:'assets/stage1.png', resource:120, life:3, tower:[2]},
						path:[[{r:5, c:0},{r:5, c:1},{r:5, c:2},{r:5, c:3},{r:5, c:4},{r:5, c:5},{r:5, c:6},{r:5, c:7},{r:5, c:8},{r:6, c:8},{r:7, c:8},{r:7, c:9},{r:7, c:10},{r:7, c:11},{r:7, c:12},{r:7, c:13},{r:6, c:13},{r:5, c:13},{r:5, c:14},{r:5, c:15},{r:5, c:16},{r:5, c:17},{r:5, c:18},{r:5, c:19},{r:5, c:20},{r:5, c:21},{r:5, c:22},{r:5, c:23},],],
						wave:[[{delay:2, list:'0,0,0', space:1.2, speed:1},{delay:3, list:'0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0,0,0,0,0', space:1.2, speed:1},],
[{delay:0.5, list:'0,1', space:1.2, speed:1},],
],
						tower:[{r:6, c:6},{r:5, c:11},{r:7, c:15},]
					},

					{
						level:{src:'assets/stage2.png', resource:50, life:3, tower:[1]},
						path:[[{r:7, c:0},{r:7, c:1},{r:7, c:2},{r:7, c:3},{r:7, c:4},{r:7, c:5},{r:7, c:6},{r:7, c:7},{r:6, c:7},{r:5, c:7},{r:4, c:7},{r:3, c:7},{r:3, c:8},{r:3, c:9},{r:3, c:10},{r:3, c:11},{r:4, c:11},{r:5, c:11},{r:6, c:11},{r:7, c:11},{r:8, c:11},{r:9, c:11},{r:10, c:11},{r:10, c:12},{r:10, c:13},{r:10, c:14},{r:10, c:15},{r:10, c:16},{r:10, c:17},{r:10, c:18},{r:9, c:18},{r:8, c:18},{r:7, c:18},{r:7, c:19},{r:7, c:20},{r:7, c:21},{r:7, c:22},{r:7, c:23},],],
						wave:[[{delay:2, list:'0,0,0', space:1.2, speed:1},{delay:3, list:'0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0', space:1.2, speed:1},{delay:4, list:'0,0,0,0', space:1.2, speed:1},{delay:5, list:'0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0,0,0', space:1.2, speed:1.5},],
[{delay:0.5, list:'0,1', space:1.2, speed:1},],
],
						tower:[{r:6, c:6},{r:9, c:12},{r:9, c:17},{r:4, c:9},]
					},

					{
						level:{src:'assets/stage3.png', resource:50, life:3, tower:[1,2]},
						path:[[{r:5, c:0},{r:5, c:1},{r:5, c:2},{r:5, c:3},{r:5, c:4},{r:5, c:5},{r:5, c:6},{r:5, c:7},{r:5, c:8},{r:6, c:8},{r:7, c:8},{r:7, c:9},{r:7, c:10},{r:7, c:11},{r:7, c:12},{r:7, c:13},{r:8, c:13},{r:9, c:13},{r:9, c:14},{r:9, c:15},{r:9, c:16},{r:9, c:17},{r:9, c:18},{r:9, c:19},{r:9, c:20},{r:9, c:21},{r:9, c:22},{r:9, c:23},],],
						wave:[[{delay:3, list:'0,0,0,0,0', space:1.2, speed:1},{delay:3, list:'0,0,0,0,0', space:1.2, speed:1},{delay:5, list:'0,0,0,0,1,1', space:1.2, speed:1.2},{delay:3, list:'0,0,0,0,1,1', space:1.2, speed:1.2},{delay:5, list:'0,0,0,1,1,1,1', space:1.2, speed:1.3},{delay:4, list:'0,0,0,1,1,1,1', space:1.2, speed:1.3},{delay:5, list:'0,0,1,1,1,1,1', space:1.2, speed:1.4},{delay:3, list:'0,0,1,1,1,1,1', space:1.2, speed:1.4},{delay:5, list:'0,0,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},{delay:3, list:'0,1,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},],
[{delay:0.5, list:'0,1', space:1.2, speed:1},],
],
						tower:[{r:6, c:4},{r:6, c:10},{r:8, c:9},{r:8, c:15},{r:10, c:16},{r:4, c:6},]
					},

					{
						level:{src:'assets/stage4.png', resource:300, life:5, tower:[1,2,3]},
						path:[[{r:8, c:23},{r:8, c:22},{r:8, c:21},{r:8, c:20},{r:8, c:19},{r:8, c:18},{r:8, c:17},{r:8, c:16},{r:8, c:15},{r:8, c:14},{r:8, c:13},{r:8, c:12},{r:8, c:11},{r:8, c:10},{r:9, c:10},{r:10, c:10},{r:11, c:10},{r:11, c:9},{r:11, c:8},{r:11, c:7},{r:11, c:6},{r:11, c:5},{r:11, c:4},{r:10, c:4},{r:9, c:4},{r:8, c:4},{r:8, c:3},{r:8, c:2},{r:8, c:1},{r:8, c:0},],[{r:6, c:23},{r:6, c:22},{r:6, c:21},{r:6, c:20},{r:6, c:19},{r:6, c:18},{r:6, c:17},{r:6, c:16},{r:6, c:15},{r:6, c:14},{r:6, c:13},{r:6, c:12},{r:6, c:11},{r:6, c:10},{r:5, c:10},{r:4, c:10},{r:3, c:10},{r:3, c:9},{r:3, c:8},{r:3, c:7},{r:3, c:6},{r:3, c:5},{r:3, c:4},{r:4, c:4},{r:5, c:4},{r:6, c:4},{r:6, c:3},{r:6, c:2},{r:6, c:1},{r:6, c:0},],],
						wave:[[{delay:5, list:'0,0,0,0,0', space:1.2, speed:1},{delay:3, list:'0,0,0,0,0', space:1.2, speed:1},{delay:5, list:'0,0,0,0,1', space:1.2, speed:1.2},{delay:3, list:'0,0,0,0,1,1', space:1.2, speed:1.2},{delay:8, list:'0,0,0,1,1,1', space:1.2, speed:1.3},{delay:3, list:'0,0,0,1,1,1,1', space:1.2, speed:1.3},{delay:8, list:'0,0,1,1,1,1,1', space:1.2, speed:1.4},{delay:3, list:'0,0,1,1,1,1,1,1,1', space:1.2, speed:1.4},{delay:8, list:'0,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},{delay:8, list:'0,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},],
[{delay:5, list:'0,0,0,0,0', space:1.2, speed:1},{delay:3, list:'0,0,0,0,0', space:1.2, speed:1},{delay:5, list:'0,0,0,0,1', space:1.2, speed:1.2},{delay:3, list:'0,0,0,0,1,1', space:1.2, speed:1.2},{delay:8, list:'0,0,0,1,1,1', space:1.2, speed:1.3},{delay:3, list:'0,0,0,1,1,1,1', space:1.2, speed:1.3},{delay:8, list:'0,0,1,1,1,1,1', space:1.2, speed:1.4},{delay:3, list:'0,0,1,1,1,1,1,1,1', space:1.2, speed:1.4},{delay:8, list:'0,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},{delay:8, list:'0,1,1,1,1,1,1,1,1', space:1.2, speed:1.5},],
],
						tower:[{r:5, c:11},{r:9, c:11},{r:7, c:12},{r:7, c:14},{r:7, c:16},{r:7, c:18},{r:7, c:4},{r:5, c:5},{r:9, c:5},{r:9, c:9},{r:5, c:9},{r:10, c:7},{r:4, c:7},{r:7, c:10},]
					},

					{
						level:{src:'assets/stage5.png', resource:600, life:5, tower:[1,2,3,4]},
						path:[[{r:13, c:8},{r:12, c:8},{r:11, c:8},{r:10, c:8},{r:9, c:8},{r:9, c:9},{r:9, c:10},{r:9, c:11},{r:9, c:12},{r:9, c:13},{r:9, c:14},{r:9, c:15},{r:9, c:16},{r:10, c:16},{r:11, c:16},{r:12, c:16},{r:13, c:16},],[{r:0, c:17},{r:1, c:17},{r:2, c:17},{r:3, c:17},{r:4, c:17},{r:5, c:17},{r:6, c:17},{r:6, c:16},{r:6, c:15},{r:6, c:14},{r:6, c:13},{r:6, c:12},{r:6, c:11},{r:6, c:10},{r:6, c:9},{r:6, c:8},{r:6, c:7},{r:6, c:6},{r:6, c:5},{r:5, c:5},{r:4, c:5},{r:3, c:5},{r:2, c:5},{r:1, c:5},{r:0, c:5},],],
						wave:[[{delay:4, list:'0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.4},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.4},{delay:6, list:'1,1,1,1,2,2', space:1.2, speed:1.5},{delay:6, list:'1,1,1,1,2,2', space:1.2, speed:1.5},],
[{delay:4, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},],
],
						tower:[{r:8, c:8},{r:7, c:10},{r:8, c:12},{r:7, c:14},{r:8, c:16},{r:5, c:16},{r:7, c:6},{r:5, c:13},{r:5, c:9},{r:10, c:10},{r:10, c:14},]
					},

					{
						level:{src:'assets/stage6.png', resource:500, life:5, tower:[1,2,3,4]},
						path:[[{r:7, c:23},{r:7, c:22},{r:7, c:21},{r:7, c:20},{r:7, c:19},{r:7, c:18},{r:8, c:18},{r:9, c:18},{r:10, c:18},{r:10, c:17},{r:10, c:16},{r:10, c:15},{r:10, c:14},{r:10, c:13},{r:10, c:12},{r:10, c:11},{r:9, c:11},{r:8, c:11},{r:7, c:11},{r:6, c:11},{r:5, c:11},{r:4, c:11},{r:3, c:11},{r:3, c:10},{r:3, c:9},{r:3, c:8},{r:3, c:7},{r:3, c:6},{r:3, c:5},{r:4, c:5},{r:5, c:5},{r:6, c:5},{r:7, c:5},{r:7, c:4},{r:7, c:3},{r:7, c:2},{r:7, c:1},{r:7, c:0},],],
						wave:[[{delay:5, list:'1,1,1', space:1.2, speed:1},{delay:5, list:'1,1,1,2,2', space:1.2, speed:1.2},{delay:5, list:'2,2,2,2,3', space:1.2, speed:1.2},{delay:5, list:'2,2,2,2,2,2,3', space:1.2, speed:1.4},{delay:5, list:'2,2,2,2,2,2,3', space:1.2, speed:1.4},{delay:5, list:'3,3,3,3,3,3,3,3', space:1.2, speed:1.6},{delay:5, list:'3,3,3,3,3,3,3,3', space:1.2, speed:1.6},{delay:5, list:'3,3,3,3,3,3,3,3', space:1.2, speed:1.6},{delay:5, list:'3,3,3,3,3,3,3,3', space:1.2, speed:1.8},{delay:5, list:'3,3,3,3,3,3,3,3', space:1.2, speed:1.8},],
[{delay:4, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},],
],
						tower:[{r:9, c:12},{r:8, c:19},{r:9, c:17},{r:9, c:10},{r:6, c:4},{r:6, c:19},{r:7, c:15},{r:6, c:8},{r:8, c:4},]
					},

					{
						level:{src:'assets/stage7.png', resource:800, life:8, tower:[1,2,3,4]},
						path:[[{r:7, c:0},{r:7, c:1},{r:7, c:2},{r:7, c:3},{r:7, c:4},{r:7, c:5},{r:7, c:6},{r:7, c:7},{r:7, c:8},{r:7, c:9},{r:7, c:10},{r:7, c:11},{r:7, c:12},{r:7, c:13},{r:7, c:14},{r:7, c:15},{r:7, c:16},{r:7, c:17},{r:7, c:18},{r:7, c:19},{r:7, c:20},{r:7, c:21},{r:7, c:22},{r:7, c:23},],],
						wave:[[{delay:8, list:'0,0,0,0,0,0,0,0,0,0', space:1.2, speed:1},{delay:8, list:'0,0,0,0,0,0,0,0,0,0', space:1.2, speed:1},{delay:8, list:'1,1,1,1,1,1,1,1,1,1,1', space:1.2, speed:1.3},{delay:8, list:'1,1,1,1,1,1,1,1,1,1,1', space:1.2, speed:1.3},{delay:8, list:'2,2,2,2,2,2,2,2,2,2,2', space:1.2, speed:1.6},{delay:8, list:'2,2,2,2,2,2,2,2,2,2,2', space:1.2, speed:1.6},{delay:8, list:'3,3,3,3,3,3,3,3,3,3,3', space:1.2, speed:1.9},{delay:8, list:'3,3,3,3,3,3,3,3,3,3,3', space:1.2, speed:1.9},{delay:8, list:'4,4,4,4,4,4,4,4,4', space:1.2, speed:2.2},{delay:8, list:'4,4,4,4,4,4,4,4,4', space:1.2, speed:2.2},],
[{delay:4, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},],
],
						tower:[{r:6, c:13},{r:6, c:7},{r:6, c:10},{r:6, c:16},{r:8, c:8},{r:8, c:11},{r:8, c:14},{r:3, c:10},{r:3, c:12},{r:3, c:14},{r:8, c:5},]
					},

					{
						level:{src:'assets/stage8.png', resource:850, life:10, tower:[1,2,3,4,5]},
						path:[[{r:7, c:0},{r:7, c:1},{r:7, c:2},{r:7, c:3},{r:7, c:4},{r:7, c:5},{r:7, c:6},{r:7, c:7},{r:7, c:8},{r:7, c:9},{r:7, c:10},{r:7, c:11},{r:7, c:12},{r:7, c:13},{r:7, c:14},{r:7, c:15},{r:7, c:16},{r:7, c:17},{r:7, c:18},{r:7, c:19},{r:7, c:20},{r:7, c:21},{r:7, c:22},{r:7, c:23},],[{r:0, c:9},{r:1, c:9},{r:2, c:9},{r:3, c:9},{r:4, c:9},{r:5, c:9},{r:6, c:9},{r:7, c:9},{r:8, c:9},{r:9, c:9},{r:10, c:9},{r:11, c:9},{r:12, c:9},{r:13, c:9},],[{r:0, c:14},{r:1, c:14},{r:2, c:14},{r:3, c:14},{r:4, c:14},{r:5, c:14},{r:6, c:14},{r:7, c:14},{r:8, c:14},{r:9, c:14},{r:10, c:14},{r:11, c:14},{r:12, c:14},{r:13, c:14},],],
						wave:[[{delay:5, list:'2,2,3,3', space:1.2, speed:1.5},{delay:8, list:'2,2,3,3', space:1.2, speed:1.5},{delay:8, list:'2,2,3,3', space:1.2, speed:1.5},{delay:8, list:'3,3,3,4', space:1.2, speed:1.7},{delay:8, list:'3,3,3,4', space:1.2, speed:1.7},{delay:8, list:'3,3,3,4', space:1.2, speed:1.7},{delay:8, list:'3,3,4,4', space:1.2, speed:1.9},{delay:8, list:'3,3,4,4', space:1.2, speed:1.9},{delay:8, list:'3,4,4,4', space:1.2, speed:1.9},{delay:8, list:'3,4,4,4', space:1.2, speed:1.9},],
[{delay:14, list:'0,0,1,1', space:1.2, speed:1.2},{delay:6, list:'0,0,1,1', space:1.2, speed:1.2},{delay:6, list:'1,1,0,0', space:1.2, speed:1.4},{delay:6, list:'1,1,0,0', space:1.2, speed:1.4},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.8},{delay:6, list:'0,1,0,1', space:1.2, speed:1.8},{delay:6, list:'1,1,1,1', space:1.2, speed:1.8},],
[{delay:14, list:'0,0,1,1', space:1.2, speed:1.2},{delay:6, list:'0,0,1,1', space:1.2, speed:1.2},{delay:6, list:'1,1,0,0', space:1.2, speed:1.4},{delay:6, list:'1,1,0,0', space:1.2, speed:1.4},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.6},{delay:6, list:'0,1,0,1', space:1.2, speed:1.8},{delay:6, list:'0,1,0,1', space:1.2, speed:1.8},{delay:6, list:'1,1,1,1', space:1.2, speed:1.8},],
],
						tower:[{r:6, c:10},{r:8, c:10},{r:8, c:13},{r:6, c:13},{r:8, c:7},{r:6, c:7},{r:8, c:16},{r:6, c:16},{r:10, c:10},{r:10, c:13},{r:4, c:10},{r:4, c:13},]
					},

					{
						level:{src:'assets/stage9.png', resource:1500, life:10, tower:[1,2,3,4,5]},
						path:[[{r:6, c:0},{r:6, c:1},{r:6, c:2},{r:6, c:3},{r:5, c:3},{r:4, c:3},{r:3, c:3},{r:3, c:4},{r:3, c:5},{r:3, c:6},{r:4, c:6},{r:5, c:6},{r:6, c:6},{r:7, c:6},{r:8, c:6},{r:8, c:5},{r:8, c:4},{r:8, c:3},{r:9, c:3},{r:10, c:3},{r:10, c:4},{r:10, c:5},{r:10, c:6},{r:10, c:7},{r:10, c:8},{r:10, c:9},{r:10, c:10},{r:10, c:11},{r:10, c:12},{r:9, c:12},{r:8, c:12},{r:7, c:12},{r:7, c:11},{r:7, c:10},{r:7, c:9},{r:6, c:9},{r:5, c:9},{r:4, c:9},{r:4, c:10},{r:4, c:11},{r:4, c:12},{r:4, c:13},{r:4, c:14},{r:4, c:15},{r:5, c:15},{r:6, c:15},{r:6, c:16},{r:6, c:17},{r:6, c:18},{r:7, c:18},{r:8, c:18},{r:9, c:18},{r:9, c:19},{r:9, c:20},{r:8, c:20},{r:7, c:20},{r:6, c:20},{r:5, c:20},{r:4, c:20},{r:4, c:21},{r:4, c:22},{r:4, c:23},],],
						wave:[[{delay:5, list:'0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0', space:1.2, speed:1.5},{delay:5, list:'0,0,0,0,0,1,1', space:1.2, speed:1.7},{delay:5, list:'0,0,0,0,0,1,1', space:1.2, speed:1.7},{delay:5, list:'1,1,1,1,1,2,2', space:1.2, speed:1.9},{delay:5, list:'1,1,1,1,1,2,2', space:1.2, speed:1.9},{delay:5, list:'2,2,2,2,2,3,3,3', space:1.2, speed:2.1},{delay:5, list:'2,2,2,2,2,3,3,3', space:1.2, speed:2.1},{delay:8, list:'3,3,3,3,3,4,4', space:1.2, speed:2.3},{delay:5, list:'3,3,3,3,3,4,4', space:1.2, speed:2.3},{delay:8, list:'0,0,1,1,1,2,2,3,3,4,4,4', space:1.2, speed:2.3},{delay:5, list:'0,0,1,1,1,2,2,3,3,4,4,4', space:1.2, speed:2.3},{delay:8, list:'4,4,4,4,4,4,4,4', space:1.2, speed:2.3},{delay:5, list:'4,4,4,4,4,4,4,4', space:1.2, speed:2.3},{delay:5, list:'4,4,4,4,4,4,4,4', space:1.2, speed:2.3},],
[{delay:4, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,0,1,2', space:1.2, speed:1},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'0,0,1,1,2', space:1.2, speed:1.2},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2', space:1.2, speed:1.3},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:5, list:'1,1,1,1,2,2', space:1.2, speed:1.4},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},{delay:6, list:'1,1,1,1,2,2,2', space:1.2, speed:1.5},],
],
						tower:[{r:9, c:4},{r:9, c:6},{r:5, c:13},{r:6, c:14},{r:6, c:10},{r:5, c:11},{r:4, c:16},{r:5, c:17},{r:8, c:19},{r:6, c:19},{r:8, c:10},{r:9, c:11},{r:6, c:7},{r:4, c:5},{r:5, c:4},]
					},

					{
						level:{src:'assets/stage10.png', resource:1500, life:12, tower:[1,2,3,4,5]},
						path:[[{r:4, c:0},{r:4, c:1},{r:4, c:2},{r:4, c:3},{r:4, c:4},{r:4, c:5},{r:4, c:6},{r:4, c:7},{r:4, c:8},{r:4, c:9},{r:4, c:10},{r:4, c:11},{r:4, c:12},{r:4, c:13},{r:5, c:13},{r:6, c:13},{r:7, c:13},{r:8, c:13},{r:8, c:12},{r:8, c:11},{r:8, c:10},{r:8, c:9},{r:8, c:8},{r:8, c:7},{r:8, c:6},{r:8, c:5},{r:8, c:4},{r:8, c:3},{r:8, c:2},{r:8, c:1},{r:8, c:0},],[{r:10, c:23},{r:10, c:22},{r:10, c:21},{r:10, c:20},{r:10, c:19},{r:10, c:18},{r:10, c:17},{r:10, c:16},{r:10, c:15},{r:10, c:14},{r:10, c:13},{r:10, c:12},{r:10, c:11},{r:10, c:10},{r:9, c:10},{r:8, c:10},{r:7, c:10},{r:6, c:10},{r:6, c:11},{r:6, c:12},{r:6, c:13},{r:6, c:14},{r:6, c:15},{r:6, c:16},{r:6, c:17},{r:6, c:18},{r:6, c:19},{r:6, c:20},{r:6, c:21},{r:6, c:22},{r:6, c:23},],],
						wave:[[{delay:6, list:'2,2,2,3,3,3,3', space:1.2, speed:1.5},{delay:3, list:'2,2,2,3,3,3,3', space:1.2, speed:1.5},{delay:5, list:'4,4,4,4', space:1.2, speed:1.8},{delay:3, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'2,2,3,3', space:1.2, speed:2.1},{delay:3, list:'2,2,3,3', space:1.2, speed:2.1},{delay:7, list:'2,3,3,4', space:1.2, speed:2.1},{delay:3, list:'2,3,3,4', space:1.2, speed:2.1},{delay:7, list:'4,4,4,4,4', space:1.2, speed:2.1},{delay:4, list:'4,4,4,4,4', space:1.2, speed:2.1},],
[{delay:6, list:'2,2,2,3,3,3,3', space:1.2, speed:1.5},{delay:3, list:'2,2,2,3,3,3,3', space:1.2, speed:1.5},{delay:5, list:'4,4,4,4', space:1.2, speed:1.8},{delay:3, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'2,2,3,3', space:1.2, speed:2.1},{delay:3, list:'2,2,3,3', space:1.2, speed:2.1},{delay:7, list:'2,3,3,4', space:1.2, speed:2.1},{delay:3, list:'2,3,3,4', space:1.2, speed:2.1},{delay:7, list:'4,4,4,4,4', space:1.2, speed:2.1},{delay:4, list:'4,4,4,4,4', space:1.2, speed:2.1},],
],
						tower:[{r:6, c:8},{r:8, c:15},{r:9, c:11},{r:9, c:12},{r:5, c:11},{r:5, c:12},{r:9, c:4},{r:5, c:19},{r:3, c:17},{r:10, c:6},{r:5, c:17},{r:9, c:6},{r:7, c:11},{r:7, c:12},{r:7, c:4},{r:7, c:19},]
					},

					{
						level:{src:'assets/stage11.png', resource:1800, life:12, tower:[2,1,3,4,5]},
						path:[[{r:4, c:0},{r:4, c:1},{r:4, c:2},{r:4, c:3},{r:4, c:4},{r:4, c:5},{r:4, c:6},{r:4, c:7},{r:4, c:8},{r:5, c:8},{r:6, c:8},{r:7, c:8},{r:8, c:8},{r:9, c:8},{r:9, c:7},{r:9, c:6},{r:9, c:5},{r:9, c:4},{r:9, c:3},{r:9, c:2},{r:9, c:1},{r:9, c:0},],[{r:4, c:23},{r:4, c:22},{r:4, c:21},{r:4, c:20},{r:4, c:19},{r:4, c:18},{r:4, c:17},{r:4, c:16},{r:5, c:16},{r:6, c:16},{r:7, c:16},{r:8, c:16},{r:9, c:16},{r:9, c:17},{r:9, c:18},{r:9, c:19},{r:9, c:20},{r:9, c:21},{r:9, c:22},{r:9, c:23},],[{r:0, c:12},{r:1, c:12},{r:2, c:12},{r:3, c:12},{r:4, c:12},{r:5, c:12},{r:6, c:12},{r:7, c:12},{r:8, c:12},{r:9, c:12},{r:10, c:12},{r:11, c:12},{r:12, c:12},{r:13, c:12},],],
						wave:[[{delay:13, list:'1,1,1,1', space:1.2, speed:1.8},{delay:6, list:'2,2,2', space:1.2, speed:1.8},{delay:6, list:'1,1,1,1', space:1.2, speed:1.8},{delay:6, list:'2,2,2', space:1.2, speed:1.8},{delay:6, list:'3,3', space:1.2, speed:1.8},{delay:6, list:'1,1,2,2,3', space:1.2, speed:1.8},{delay:6, list:'1,1,2,2,3', space:1.2, speed:1.8},{delay:6, list:'2,2,2,3,3', space:1.2, speed:1.8},{delay:6, list:'2,2,3', space:1.2, speed:1.8},{delay:6, list:'2,2,3', space:1.2, speed:1.8},],
[{delay:13, list:'1,1,1,1', space:1.2, speed:1.8},{delay:6, list:'2,2,2', space:1.2, speed:1.8},{delay:6, list:'1,1,1,1', space:1.2, speed:1.8},{delay:6, list:'2,2,2', space:1.2, speed:1.8},{delay:6, list:'3,3', space:1.2, speed:1.8},{delay:6, list:'1,1,2,2,3', space:1.2, speed:1.8},{delay:6, list:'1,1,2,2,3', space:1.2, speed:1.8},{delay:6, list:'2,2,2,3,3', space:1.2, speed:1.8},{delay:6, list:'2,2,3', space:1.2, speed:1.8},{delay:6, list:'2,2,3', space:1.2, speed:1.8},],
[{delay:10, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4,4', space:1.2, speed:1.8},{delay:6, list:'4,4,4,4,4', space:1.2, speed:1.8},],
[],
],
						tower:[{r:8, c:10},{r:6, c:10},{r:8, c:14},{r:6, c:14},{r:4, c:10},{r:4, c:14},{r:10, c:10},{r:10, c:14},{r:5, c:11},{r:7, c:11},{r:9, c:11},{r:9, c:13},{r:7, c:13},{r:5, c:13},{r:5, c:6},{r:8, c:6},{r:8, c:18},{r:5, c:18},{r:8, c:4},{r:8, c:20},]
					},

					{
						level:{src:'assets/stage12.png', resource:1500, life:12, tower:[2,1,3,4,5]},
						path:[[{r:7, c:0},{r:7, c:1},{r:7, c:2},{r:7, c:3},{r:7, c:4},{r:7, c:5},{r:6, c:5},{r:5, c:5},{r:4, c:5},{r:3, c:5},{r:3, c:6},{r:3, c:7},{r:4, c:7},{r:5, c:7},{r:6, c:7},{r:7, c:7},{r:8, c:7},{r:9, c:7},{r:10, c:7},{r:10, c:8},{r:10, c:9},{r:9, c:9},{r:8, c:9},{r:7, c:9},{r:6, c:9},{r:5, c:9},{r:4, c:9},{r:3, c:9},{r:3, c:10},{r:3, c:11},{r:4, c:11},{r:5, c:11},{r:6, c:11},{r:7, c:11},{r:8, c:11},{r:9, c:11},{r:9, c:12},{r:9, c:13},{r:8, c:13},{r:7, c:13},{r:6, c:13},{r:5, c:13},{r:4, c:13},{r:4, c:14},{r:4, c:15},{r:5, c:15},{r:6, c:15},{r:7, c:15},{r:8, c:15},{r:8, c:16},{r:8, c:17},{r:7, c:17},{r:6, c:17},{r:5, c:17},{r:5, c:18},{r:5, c:19},{r:6, c:19},{r:7, c:19},{r:7, c:20},{r:7, c:21},{r:7, c:22},{r:7, c:23},],],
						wave:[[{delay:8, list:'0,0,0,0,0,0', space:1.2, speed:2},{delay:5, list:'0,0,0,1,1,1', space:1.2, speed:2},{delay:5, list:'1,1,1,1,1,1', space:1.2, speed:2},{delay:5, list:'1,1,1,1,1,1', space:1.2, speed:2},{delay:5, list:'1,1,1,2,2,2,2', space:1.2, speed:2.5},{delay:5, list:'2,2,2,2,2,2,2', space:1.2, speed:2.5},{delay:5, list:'2,2,2,2,2,2,2', space:1.2, speed:2.5},{delay:5, list:'2,2,2,3,3,3,3,3', space:1.2, speed:2.5},{delay:5, list:'2,2,2,3,3,3,3,3', space:1.2, speed:2.5},{delay:5, list:'3,3,3,3,3,3,3', space:1.2, speed:2.5},{delay:5, list:'3,3,3,3,3,3,3', space:1.2, speed:2.5},{delay:5, list:'4,4,4,4,4,4,4,4', space:1.2, speed:2.5},{delay:5, list:'4,4,4,4,4,4,4,4,4', space:1.2, speed:2.5},{delay:5, list:'4,4,4,4,4,4,4,4,4', space:1.2, speed:2.5},{delay:5, list:'4,4,4,4,4,4,4,4,4,4,4', space:1.2, speed:3},],
],
						tower:[{r:4, c:6},{r:6, c:6},{r:8, c:6},{r:4, c:10},{r:6, c:10},{r:8, c:10},{r:9, c:8},{r:7, c:8},{r:5, c:8},{r:7, c:16},{r:5, c:16},{r:6, c:18},{r:7, c:12},{r:5, c:12},{r:6, c:14},{r:8, c:14},]
					},

					];