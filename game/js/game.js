////////////////////////////////////////////////////////////
// GAME
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */
var resourceTime = 2; //resources update time
var resourceUpdate = 5; //resources total update

var scoreNumber = 100; //score hit per monster

var buildTowerAnyWhere = false; //option to set towers build anywhere
var buildGridAvailableColor = '#00B259'; //grid available color
var buildGridNotAvailableColor = '#D90000'; //grid not available color

var waveStartText = 'WAVE BEGIN!'; //wave start text display
var waveEndText = 'FINAL WAVE!'; //wave final text display

var selectTitleText = 'SELECT LEVEL'; //select level page title
var lifeTextDisplay = 'x [NUMBER]'; //life text display
var waveTextDisplay = 'WAVE : [NUMBER]/[TOTAL]'; //wave text display
var beginLevelTitleText = 'LEVEL [NUMBER]'; //begin title text display
var beginMonsterText = 'Incoming monsters:'; //begin monster text display
var beginTowerText = 'Available towers:'; //begin tower text display

var stageCompleteText = 'LEVEL COMPLETE'; //game complete text display
var stageFailText = 'GAME OVER'; //game over text display

var exitMessage = 'Are you sure\nyou want to quit?'; //go to main page message
var confirmText = 'CONFIRM'; //confirm text display
var cancelText = 'CANCEL'; //cancel text display

var resultCompleteText = 'LEVEL [NUMBER] COMPLETE'; //result complete text display
var resultFailText = 'GAME OVER';  //result fail text display
var resultScoreText = '[NUMBER]PTS';  //result score text display

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareText = 'SHARE YOUR SCORE'; //social share message
var shareTitle = 'Highscore on Monster Rush (Tower Defense) Game at Level[LEVEL] is [SCORE]PTS.';//social share score title
var shareMessage = 'Level[LEVEL] - [SCORE]PTS is mine new highscore on Monster Rush (Tower Defense) Game! Try it now!'; //social share score message

//lifebar list
var lifeBar = {strokeNum:2, strokeColor:'#000', fillColor:'#65c43e', bgColor:'#7c2627', freezeColor:'#43cedb'};

//monsters array list
var monsters_arr = [{
						src:'assets/monster1_Spritesheet4x3.png',
						width:60,
						height:70,
						regX:30,
						regY:56,
						hitOffset:-30,
						life:10,
						resource:0,
						ammo:{},
						bar:{width:30, height:5, offset:-60}
					},
					{
						src:'assets/monster2_Spritesheet4x3.png',
						width:60,
						height:70,
						regX:30,
						regY:56,
						hitOffset:-30,
						resource:5,
						life:15,
						ammo:{src:'assets/item_monsterammo2.png', regX:7, regY:0, speed:4, life:1, time:1, freeze:0, rotate:false, shotOffset:-30, range:200},
						bar:{width:40, height:5, offset:-60}
					},
					{
						src:'assets/monster3_Spritesheet4x3.png',
						width:60,
						height:70,
						regX:30,
						regY:56,
						hitOffset:-30,
						resource:6,
						life:20,
						ammo:{src:'assets/item_monsterammo3.png', regX:7, regY:0, speed:4, life:2, time:1, freeze:0, rotate:false, shotOffset:-30, range:250},
						bar:{width:30, height:5, offset:-60}
					},
					{
						src:'assets/monster4_Spritesheet4x3.png',
						width:60,
						height:70,
						regX:30,
						regY:56,
						hitOffset:-30,
						resource:6,
						life:18,
						ammo:{src:'assets/item_monsterammo4.png', regX:7, regY:0, speed:4, life:3, time:1, freeze:0, rotate:false, shotOffset:-30, range:150},
						bar:{width:30, height:5, offset:-60}
					},
					{
						src:'assets/monster5_Spritesheet4x3.png',
						width:60,
						height:70,
						regX:30,
						regY:56,
						hitOffset:-30,
						resource:6,
						life:25,
						ammo:{src:'assets/item_monsterammo5.png', regX:7, regY:0, speed:4, life:3, time:1, freeze:0, rotate:false, shotOffset:-30, range:200},
						bar:{width:30, height:5, offset:-60}
					}];

//towers array list				
var towers_arr = [{
					name:'base',
					image:{src:'assets/item_tower0.png', regX:32, regY:40},
					icon:{src:'assets/icon_tower0.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{},
					resource:5,
					hitOffset:-30,
					life:0,
					bar:{width:40, height:5, offset:-65}
				},
				{
					name:'axe',
					sound:'assets/sounds/ammo_axe.ogg',
					image:{src:'assets/item_tower2.png', regX:32, regY:39},
					icon:{src:'assets/icon_tower2.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{src:'assets/item_ammo2.png', regX:8, regY:15, speed:5, life:3, time:1, freeze:0, rotate:true, shotOffset:-30, range:150},
					resource:30,
					hitOffset:-30,
					life:90,
					bar:{width:40, height:5, offset:-50}
				},
				{
					name:'arrow',
					sound:'assets/sounds/ammo_arrow.ogg',
					image:{src:'assets/item_tower1.png', regX:32, regY:53},
					icon:{src:'assets/icon_tower1.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{src:'assets/item_ammo1.png', regX:4, regY:0, speed:4.5, life:2, time:1, freeze:0, rotate:false, shotOffset:-30, range:280},
					resource:50,
					hitOffset:-30,
					life:90,
					bar:{width:40, height:5, offset:-65}
				},
				{
					name:'ice',
					sound:'assets/sounds/ammo_ice.ogg',
					image:{src:'assets/item_tower3.png', regX:32, regY:55},
					icon:{src:'assets/icon_tower3.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{src:'assets/item_ammo3.png', regX:4, regY:0, speed:4, life:1, time:1, freeze:3, rotate:false, shotOffset:-30, range:200},
					resource:100,
					hitOffset:-30,
					life:100,
					bar:{width:40, height:5, offset:-65}
				},
				{
					name:'cannon',
					sound:'assets/sounds/ammo_cannon.ogg',
					image:{src:'assets/item_tower4.png', regX:32, regY:54},
					icon:{src:'assets/icon_tower4.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{src:'assets/item_ammo4.png', regX:5, regY:0, speed:4, life:5, time:1.2, freeze:0, rotate:false, shotOffset:-30, range:200},
					resource:130,
					hitOffset:-30,
					life:120,
					bar:{width:40, height:5, offset:-65}
				},
				{
					name:'cannonfire',
					sound:'assets/sounds/ammo_cannon.ogg',
					image:{src:'assets/item_tower5.png', regX:32, regY:61},
					icon:{src:'assets/icon_tower5.png', disable:'assets/icon_tower_disable.png', regX:26, regY:27},
					ammo:{src:'assets/item_ammo5.png', regX:5, regY:0, speed:4, life:8, time:1.2, freeze:0, rotate:false, shotOffset:-30, range:200},
					resource:150,
					hitOffset:-30,
					life:130,
					bar:{width:40, height:5, offset:-65}
				}];
				
/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
var playerData = {score:0, displayScore:0};
var gridData = {x:7, y:25, column:24, row:14, width:55, height:55, array:[1], color:'#000'};
var gameData = {levelNum:0, stageLevelCompleted:0, defaultSpeed:1, menuAngle:60, menuAngleRemove:35, targetTower:null, monsterType:[], wave:[], monster:[], tower:[], monsterCount:0, monsterTotal:0, resource:0, life:0, waveCount:0, waveTotal:0, waveBegin:false, waveEnd:false, freezeDelay:.5, stageComplete:0, paused:true};
var resourceData = {tween:null};
$.editor = {enable:false, pathNum:0, waveNum:0, towerNum:0};
var cookieName = 'MonsterRush2017';

/*!
 * 
 * DATA UPDATE - This is the function that runs to update data
 * 
 */
function retrieveLevelData(){
	var curStage = Cookies.get(cookieName);
	if(curStage != undefined){
		gameData.stageLevelCompleted = Number(curStage);
	}
}

function saveLevelData(){
	if(Number(gameData.levelNum)+1 > gameData.stageLevelCompleted){
		gameData.stageLevelCompleted = Number(gameData.levelNum)+1;
		Cookies.set(cookieName, gameData.stageLevelCompleted);
		selectPage(selectData.page);
	}
}

/*!
 * 
 * BUILD GRID - This is the function that runs to build grid
 * 
 */
function buildGrid(){
	for(var r = 0; r < gridData.row; r++){
		gridData.array[r] = [];
		for(var c = 0; c < gridData.column; c++){
			var curW = gridData.width * 2;
			var curH = gridData.height * 2;
			
			var newShape = new createjs.Shape();
			newShape.graphics.setStrokeStyle(1).beginStroke(gridData.color).drawRect(-(gridData.width/2), -(gridData.height/2), (gridData.width), (gridData.height));
			newShape.x = ((gridData.width) * (c)) + gridData.x;
			newShape.y = ((gridData.height) * (r)) + gridData.y;
			newShape.r = r;
			newShape.c = c;
			newShape.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(-(gridData.width/2), -(gridData.height/2), (gridData.width), (gridData.height)));	
			gridData.array[r][c] = newShape;
			gridContainer.addChild(newShape);
			gridContainer.alpha = 0;
		}	
	}
	
	for(var m = 0; m < monsters_arr.length; m++){
		gameData.monsterType.push(m);
	}
}

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('select');
	});
	
	for(n=0;n<towers_arr.length;n++){
		$.towers['icon'+n].id = n;
		$.towers['icon'+n].cursor = "pointer";
		$.towers['icon'+n].addEventListener("click", function(evt) {
			buildTower(evt.target.id);
		});
	}
	
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('select');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonGoogle.cursor = "pointer";
	buttonGoogle.addEventListener("click", function(evt) {
		share('google');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleGameMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleGameMute(false);
	});
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		if(!$.editor.enable){
			toggleConfirm(true);
		}
	});
	
	itemConfirm.cursor = "pointer";
	itemConfirm.addEventListener("click", function(evt) {
		toggleConfirm(false);
		stopGame(true);
		goPage('main');
	});
	
	itemCancel.cursor = "pointer";
	itemCancel.addEventListener("click", function(evt) {
		toggleConfirm(false);
	});
}

/*!
 * 
 * SELECT LEVEL - This is the function that runs to display select levels
 * 
 */
var selectData = {page:0, total:1, max:21};
function buildSelectLevel(){
	selectData.total = levels_arr.length/selectData.max;
	
	if (String(selectData.total).indexOf('.') > -1){
		selectData.total=Math.floor(selectData.total)+1;
	}
	toggleSelect(false);
	
	buttonArrowL.cursor = "pointer";
	buttonArrowL.addEventListener("mousedown", function(evt) {
		playSound('soundClick');
		toggleSelect(false);
	});
	
	buttonArrowR.cursor = "pointer";
	buttonArrowR.addEventListener("mousedown", function(evt) {
		playSound('soundClick');
		toggleSelect(true);
	});
	
	for(var n=0;n<levels_arr.length;n++){
		$.selectStage['icon_'+n].name = n;
		$.selectStage['icon_'+n].cursor = "pointer";
		$.selectStage['icon_'+n].addEventListener("mousedown", function(evt) {
			if(Number(evt.target.name) <= gameData.stageLevelCompleted){
				playSound('soundClick');
				gameData.levelNum = Number(evt.target.name);
				goPage('game');
			}
		});
	}
}

function toggleSelect(con){
	if(con){
		selectData.page++;
		selectData.page = selectData.page > selectData.total ? selectData.total : selectData.page;
	}else{
		selectData.page--;
		selectData.page = selectData.page < 1 ? 1 : selectData.page;
	}
	selectPage(selectData.page);
}

function selectPage(num){
	selectData.page = num;
	
	var startNum = (selectData.page-1) * selectData.max;
	var endNum = startNum + (selectData.max-1);
	
	for(var n=0;n<levels_arr.length;n++){
		if(n >= startNum && n <= endNum){
			$.selectStage['icon_'+n].visible = true;
			$.selectStage['iconLock_'+n].visible = true;
			$.selectStage['iconText_'+n].visible = true;
			if(n <= gameData.stageLevelCompleted){
				$.selectStage['iconLock_'+n].visible = false;
			}
		}else{
			$.selectStage['iconLock_'+n].visible = false;
			$.selectStage['icon_'+n].visible = false;
			$.selectStage['iconText_'+n].visible = false;	
		}
	}
	
	if(selectData.page == 1){
		buttonArrowL.visible = false;	
	}else{
		buttonArrowL.visible = true;	
	}
	
	if(selectData.page == selectData.total || selectData.total == 1){
		buttonArrowR.visible = false;	
	}else{
		buttonArrowR.visible = true;	
	}
}

/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	selectContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	
	stopSoundLoop('musicMain');
	stopSoundLoop('musicGame');
	
	var targetContainer = null;
	switch(page){
		case 'main':
			targetContainer = mainContainer;
			playSoundLoop('musicMain');
		break;
		
		case 'select':
			targetContainer = selectContainer;
			playSoundLoop('musicMain');
		break;
		
		case 'game':
			targetContainer = gameContainer;
			if(!$.editor.enable){
				playSoundLoop('musicGame');
				startGame();
			}
		break;
		
		case 'result':
			targetContainer = resultContainer;
			playSound('soundNotification');
			playSoundLoop('musicMain');
			
			stopGame(true);
			if(gameData.stageComplete){
				resultTitleTxt.text = resultCompleteText.replace('[NUMBER]', gameData.levelNum+1);
				saveLevelData();
			}else{
				resultTitleTxt.text = resultFailText;	
			}
			TweenMax.to(playerData, 1, {displayScore:playerData.score, overwrite:true, onUpdate:function(){
				resultScoreTxt.text = resultScoreText.replace('[NUMBER]', addCommas(Math.floor(playerData.displayScore)));	
			}});
			
			saveGame(playerData.score, gameData.levelNum);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	
	if(con){
		TweenMax.pauseAll(true, true);
		gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true)
		gameData.paused = false;
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */

function startGame(){
	for(n=0;n<levels_arr.length;n++){
		$.stage[n].visible = false;
	}
	
	$.stage[gameData.levelNum].visible = true;
	stageClearContainer.visible = false;
	
	playerData.score = playerData.displayScore = 0;
	gameData.targetTower = null;
	gameData.monster = [];
	gameData.tower = [];
	gameData.wave = [];
	gameData.monsterCount = 0;
	gameData.monsterTotal = 0;
	gameData.waveCount = 0;
	gameData.waveTotal = 0;
	gameData.waveBegin = gameData.waveEnd = false;
	gameData.speed = 1;
	gameData.stageComplete = false;
	
	gameData.resource = levels_arr[gameData.levelNum].level.resource;
	gameData.life = levels_arr[gameData.levelNum].level.life;
	
	itemLove.alpha = 0;
	
	//begin
	toggleWaveStatus();
	createTower();
	setupBeginOverlay();
	updateGameStatus();
	
	beginOverlayContainer.alpha = 0;
	TweenMax.to(beginOverlayContainer, .5, {alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to(beginOverlayContainer, .5, {delay:2, alpha:0, overwrite:true, onComplete:function(){
			gameData.paused = false;
			startWave();
			loopResource();
		}});
	}});
}

function setupBeginOverlay(){
	beginLevelTxt.text = beginLevelTitleText.replace('[NUMBER]', gameData.levelNum+1);
	
	var enemyType = [];
	var towerType = [];
	
	for(var n=0; n<levels_arr[gameData.levelNum].wave.length;n++){
		if(n < levels_arr[gameData.levelNum].path.length){
			for(var p=0; p<levels_arr[gameData.levelNum].wave[n].length;p++){
				var enemyTypeArray = levels_arr[gameData.levelNum].wave[n][p].list.split(',');
				for(var e=0; e<enemyTypeArray.length;e++){
					enemyType.push(Number(enemyTypeArray[e]));	
				}
			}
		}
	}
	
	enemyType = unique(enemyType);
	enemyType.sort();
	
	towerType = levels_arr[gameData.levelNum].level.tower;
	towerType.sort();
	
	var spaceX = 55;
	var startX = (canvasW/2) - ((spaceX * (enemyType.length-1))/2);
	
	for(var n=0;n<monsters_arr.length;n++){
		$.monsters['begin'+n].visible = false;
		if(enemyType.indexOf(n) != -1){
			$.monsters['begin'+n].visible = true;	
			$.monsters['begin'+n].x = startX;
			startX += spaceX;
		}
	}
	
	var spaceX = 65;
	var startX = (canvasW/2) - ((spaceX * (towerType.length-1))/2);
	for(var n=0;n<towers_arr.length;n++){
		$.towers['begin'+n].visible = false;	
		if(towerType.indexOf(n) != -1){
			$.towers['begin'+n].visible = true;	
			$.towers['begin'+n].x = startX;
			startX += spaceX;
		}
	}
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(con){
	gridContainer.alpha = 0;
	iconMenu.visible = iconMenuClose.visible = false;
		
	toggleTowerRemove();
	toggleTowerMenu();
	gameData.paused = true;
	TweenMax.killAll();
	toggleWaveStatus();
	
	if(itemPreTower != null){
		iconContainer.removeChild(itemPreTower);	
		itemPreTower = null;
	}
	
	if(con){
		objectsContainer.removeAllChildren();
		ammoContainer.removeAllChildren();	
	}
}

/*!
 * 
 * SAVE GAME - This is the function that runs to save game
 * 
 */
function saveGame(score, type){
	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * DISPLAY GAME END - This is the function that runs to display game end
 * 
 */
function displayGameEnd(con){
	stageClearContainer.visible = true;
	stageClearContainer.alpha = 0;
	
	TweenMax.to(stageClearContainer, .3, {alpha:0, overwrite:true, onComplete:function(){
		TweenMax.to(stageClearContainer, .2, {alpha:1, overwrite:true});	
		if(con == 'complete'){
			playSound('soundSuccess');
			stageTitleTxt.text = stageCompleteText;
		}else{
			playSound('soundFail');
			stageTitleTxt.text = stageFailText;
		}
	}});
	
	TweenMax.to(resultContainer, 3, {overwrite:true, onComplete:function(){
		goPage('result');	
	}});	
}

/*!
 * 
 * GAME RESOUCES - This is the function that runs to display game end
 * 
 */
function loopResource(){
	resourceData.tween = TweenMax.to(resourceData, resourceTime, {overwrite:true, onComplete:updateResource});
}

function updateResource(){
	if(!gameData.paused){
		gameData.resource += resourceUpdate;
		loopResource();
	}
}

/*!
 * 
 * START WAVES - This is the function that runs to start waves
 * 
 */
function startWave(){
	for(var n=0; n<levels_arr[gameData.levelNum].wave.length;n++){
		if(n < levels_arr[gameData.levelNum].path.length){
			gameData.waveTotal += levels_arr[gameData.levelNum].wave[n].length;
			gameData.wave.push({delay:0, count:0, list:'', speed:0, tween:'', complete:false});
			looppWave(n, 0);
		}
	}
}

function looppWave(path, delay){
	if(levels_arr[gameData.levelNum].wave[path].length > 0){
		var count = gameData.wave[path].count;
		if(count < levels_arr[gameData.levelNum].wave[path].length){
			gameData.wave[path].speed = levels_arr[gameData.levelNum].wave[path][count].speed;
			gameData.wave[path].delay = levels_arr[gameData.levelNum].wave[path][count].delay;
			gameData.wave[path].list = levels_arr[gameData.levelNum].wave[path][count].list;
			gameData.wave[path].tween = TweenMax.to(gameData.wave[path], 0, {delay:gameData.wave[path].delay+delay, overwrite:true, onComplete:createWave, onCompleteParams:[path]});
		}else{
			gameData.wave[path].complete = true;	
		}
	}
}

function createWave(path){
	gameData.waveCount++;
	var count = gameData.wave[path].count;
	var enemyTypeArray = levels_arr[gameData.levelNum].wave[path][count].list.split(',');
	var spacing = levels_arr[gameData.levelNum].wave[path][count].space;
	gameData.speed = gameData.wave[path].speed;
	gameData.wave[path].count++;
	
	for(var n=0; n<enemyTypeArray.length;n++){
		var pathArray = [];
		for(var p = 0; p < levels_arr[gameData.levelNum].path[path].length; p++){
			var curR = levels_arr[gameData.levelNum].path[path][p].r;
			var curC = levels_arr[gameData.levelNum].path[path][p].c;
			var curGrid = gridData.array[curR][curC];
			pathArray.push({x:curGrid.x, y:curGrid.y});
		}
		
		if(pathArray.length > 0 && enemyTypeArray[n] != '' && gameData.monsterType.indexOf(Number(enemyTypeArray[n])) != -1){
			createMonster(enemyTypeArray[n], path, pathArray, spacing, n);
		}
		
		if(n == enemyTypeArray.length-1){
			looppWave(path, n * (gameData.defaultSpeed * spacing));	
		}
	}
}

function toggleWaveStatus(con, text){
	waveStatusContainer.visible = false
	if(con){
		playSound('soundAlert');
		waveStatusContainer.alpha = 0;
		waveStatusContainer.visible = con;
		waveStatusShadowTxt.text = waveStatusTxt.text = text;
		TweenMax.to(waveStatusContainer, .2, {alpha:1, overwrite:true, onComplete:function(){
			TweenMax.to(waveStatusContainer, .2, {delay:2, alpha:0, overwrite:true, onComplete:toggleWaveStatus});
		}});
	}
}

/*!
 * 
 * CREATE MONSTER - This is the function that runs to create monster
 * 
 */
function createMonster(type, path, pathArray, space, count){
	gameData.monsterTotal++;
	
	var newMonster = $.monsters[type].clone();
	newMonster.active = false;
	newMonster.walk = false;
	newMonster.x = pathArray[0].x;
	newMonster.y = pathArray[0].y;
	newMonster.visible = false;
	newMonster.monsterType = type;
	newMonster.life = monsters_arr[type].life;
	newMonster.resource = monsters_arr[type].resource;
	newMonster.freeze = false;
	
	if(monsters_arr[type].ammo.src != undefined){
		newMonster.ammoReady = true;
		newMonster.tween = null;	
	}
	createLifeBar(newMonster, 'monster');
	
	objectsContainer.addChild(newMonster);
	
	var speedTween = gameData.defaultSpeed * levels_arr[gameData.levelNum].path[path].length;
	var tween = TweenMax.to(newMonster, speedTween, {delay:count * (gameData.defaultSpeed * space), bezier:{type:"thru", values:pathArray, curviness:0, autoRotate:false}, ease:Linear.easeNone, repeat:0, overwrite:true, onStart:monsterStartMove, onStartParams:[newMonster], onUpdate:updateMonsterMove, onUpdateParams:[newMonster], onComplete:monsterMoveComplete, onCompleteParams:[newMonster]});
	
	gameData.monster.push({obj:newMonster, tween:tween, ammoTween:null, freeze:null});
}

function updateMonsterMove(monster){
	monster.lifeContainer.x = monster.x;
	monster.lifeContainer.y = monster.y;
}

function monsterStartMove(monster){
	if(!gameData.waveBegin){
		gameData.waveBegin = true;
		toggleWaveStatus(true, waveStartText);
	}else if(!gameData.waveEnd && gameData.waveCount == gameData.waveTotal){
		gameData.waveEnd = true;
		toggleWaveStatus(true, waveEndText);
	}
	
	monster.active = true;
	monster.walk = true;
	monster.visible = true;
	updateWaveSpeed();
}

function monsterMoveComplete(monster){
	removeMonster(monster, false);
	
	gameData.life--;
	animateIconLife();
	if(gameData.life <= 0){
		gameData.life = 0;
		if($.editor.enable){
			stopGame(true);
			toggleGameStatus('Game over:');
		}else{
			stopGame(false);
			displayGameEnd('over');	
		}
	}
}

function animateIconLife(){
	playSound('soundLife');
	
	var tweenSpeed = .05;
	var delaySpeed = .05;
	itemLove.alpha = 0;
	TweenMax.to(itemLove, tweenSpeed, {delay:delaySpeed, alpha:1, overwrite:true, onComplete:function(){
		TweenMax.to(itemLove, tweenSpeed, {delay:delaySpeed, alpha:0, overwrite:true, onComplete:function(){
			TweenMax.to(itemLove, tweenSpeed, {delay:delaySpeed, alpha:1, overwrite:true, onComplete:function(){
				TweenMax.to(itemLove, tweenSpeed, {delay:delaySpeed, alpha:0, overwrite:true, onComplete:function(){
		
				}});
			}});
		}});
	}});	
}

/*!
 * 
 * REMOVE MONSTER - This is the function that runs to remove monster
 * 
 */
function removeMonster(monster, con){
	if(monster.active && monster.walk){
		gameData.monsterCount++;
		TweenMax.killTweensOf(monster);
		
		if(con){
			monster.walk = false;
			objectsContainer.removeChild(monster.lifeContainer);
			monster.gotoAndPlay('dead');
			monster.y -= .5;
			TweenMax.to(monster, .5, {delay:1, alpha:0, overwrite:true, onComplete:function(){
				monster.active = false;
				monster.walk = true;
				objectsContainer.removeChild(monster);
			}});	
		}else{
			monster.active = false;
			monster.walk = true;
			objectsContainer.removeChild(monster, monster.lifeContainer);
		}
	}
	
	var totalComplete = 0;
	for(var n=0; n<gameData.wave.length;n++){
		if(gameData.wave[n].complete){
			totalComplete++;
		}
	}
	
	if(gameData.monsterCount == gameData.monsterTotal && totalComplete == gameData.wave.length && !$.editor.enable){
		gameData.stageComplete = true;
		stopGame(false);
		displayGameEnd('complete');
	}
}

/*!
 * 
 * UPDATED WAVE SPEED - This is the function that runs to update wave speed
 * 
 */
function updateWaveSpeed(){
	resourceData.tween.timeScale(gameData.speed);
	
	for(var n=0; n<gameData.wave.length;n++){
		var curTween = gameData.wave[n].tween;
		if(gameData.wave[n].tween!=''){
			curTween.timeScale(gameData.speed);
		}
	}
	
	for(var n=0; n<gameData.monster.length;n++){
		var curMonster = gameData.monster[n].obj;
		var curTween = gameData.monster[n].tween;
		if(curMonster.freeze){
			curTween.timeScale(gameData.speed - gameData.freezeDelay);
		}else{
			curTween.timeScale(gameData.speed);	
		}
	}
}

/*!
 * 
 * CREATE LIFE BAR - This is the function that runs to create life bar
 * 
 */
function createLifeBar(obj, type){
	var lifeBorder = new createjs.Shape();
	var lifeBg = new createjs.Shape();
	var lifeFill = new createjs.Shape();
	var lifeContainer = new createjs.Container();
	
	obj.lifeBorder = lifeBorder;
	obj.lifeBg = lifeBg;
	obj.lifeFill = lifeFill;
	obj.lifeContainer = lifeContainer;
	
	lifeContainer.addChild(lifeBg, lifeFill, lifeBorder);
	objectsContainer.addChild(lifeContainer);
	
	updateLifeBar(obj, type);
}

function updateLifeBar(obj, type){
	var lifeW, lifeH, lifeFill;
	var thisFillColor = lifeBar.fillColor;
	if(type == 'monster'){
		obj.lifeContainer.regX = (monsters_arr[obj.monsterType].bar.width/2);
		obj.lifeContainer.regY = 0 - monsters_arr[obj.monsterType].bar.offset;
		
		lifeW = monsters_arr[obj.monsterType].bar.width;
		lifeH = monsters_arr[obj.monsterType].bar.height;
		lifeFill = obj.life / monsters_arr[obj.monsterType].life * lifeW;
		
		if(obj.freeze){
			thisFillColor = lifeBar.freezeColor;
		}
	}else{
		obj.lifeContainer.regX = (towers_arr[obj.towerType].bar.width/2);
		obj.lifeContainer.regY = 0 - towers_arr[obj.towerType].bar.offset;
		
		obj.lifeContainer.x = obj.x;
		obj.lifeContainer.y = obj.y;
	
		lifeW = towers_arr[obj.towerType].bar.width;
		lifeH = towers_arr[obj.towerType].bar.height;
		lifeFill = obj.life / towers_arr[obj.towerType].life * lifeW;	
	}
	
	obj.lifeContainer.uncache();
	obj.lifeBorder.graphics.clear();
	obj.lifeBg.graphics.clear();
	obj.lifeFill.graphics.clear();
	obj.lifeBorder.graphics.setStrokeStyle(lifeBar.strokeNum).beginStroke(lifeBar.strokeColor).drawRect(0, 0, lifeW, lifeH);
	obj.lifeBg.graphics.beginFill(lifeBar.bgColor).drawRect(0, 0, lifeW, lifeH);
	obj.lifeFill.graphics.beginFill(thisFillColor).drawRect(0, 0, lifeFill, lifeH);
	obj.lifeContainer.cache(0,0,lifeW, lifeH);	
}

/*!
 * 
 * CREATE TOWER - This is the function that runs to create tower
 * 
 */
function createTower(){
	objectsContainer.removeAllChildren();
	
	if(!buildTowerAnyWhere){
		gameData.tower = [];
		for(var n=0; n<levels_arr[gameData.levelNum].tower.length;n++){
			var curR = levels_arr[gameData.levelNum].tower[n].r;
			var curC = levels_arr[gameData.levelNum].tower[n].c;
			var curGrid = gridData.array[curR][curC];
			
			var newTower = $.towers[0].clone();
			newTower.x = curGrid.x;
			newTower.y = curGrid.y;
			newTower.active = false;
			newTower.towerType = 0;
			newTower.ammoReady = true;
			newTower.towerObj = null;
			newTower.destroy = false;
			newTower.base = true;
			createLifeBar(newTower, 'tower');
			newTower.lifeContainer.visible = false;
			
			gameData.tower.push(newTower);
			setupTowerEvents(newTower, true);
			objectsContainer.addChild(newTower);
		}
		
		iconMenu.visible = iconMenuClose.visible = false;
	}else{
		for(var r = 0; r < gridData.row; r++){
			for(var c = 0; c < gridData.column; c++){
				gridData.array[r][c].graphics.clear();
				gridData.array[r][c].graphics.beginFill(buildGridNotAvailableColor).drawRect(-(gridData.width/2), -(gridData.height/2), (gridData.width), (gridData.height));
				var curGrid = gridData.array[r][c];
				gridData.array[r][c].available = false;
				
				curGrid.addEventListener("mouseover", function(evt) {
					itemPreTower.x = evt.target.x;
					itemPreTower.y = evt.target.y;
					itemPreTower.alpha = .5;
					
					if(evt.target.available){
						itemPreTower.alpha = 1;	
					}
				});
				
				curGrid.addEventListener("click", function(evt) {
					if(evt.target.available){
						var exist = false;
						for(var n=0; n<gameData.tower.length;n++){
							var curTower = gameData.tower[n];
							if(curTower.x == evt.target.x && curTower.y == evt.target.y){
								exist = true;
								n = gameData.tower.length;
							}
						}
						
						if(!exist){
							buildTowerMenu(evt.target);
						}
					}
				});
			}	
		}
		
		for(var n=0; n<levels_arr[gameData.levelNum].tower.length;n++){
			var curR = levels_arr[gameData.levelNum].tower[n].r;
			var curC = levels_arr[gameData.levelNum].tower[n].c;
			gridData.array[curR][curC].available = true;
			gridData.array[curR][curC].graphics.clear();
			gridData.array[curR][curC].graphics.beginFill(buildGridAvailableColor).drawRect(-(gridData.width/2), -(gridData.height/2), (gridData.width), (gridData.height));
		}
		gridContainer.alpha = 0;
		toggleTowerMenuAll(false, true);
		
		iconMenu.visible = iconMenuClose.visible = true;	
		
		iconMenu.cursor = "pointer";
		iconMenu.addEventListener("click", function(evt) {
			if(!gameData.paused){
				toggleTowerMenuAll(true, false);
			}
		});
		
		iconMenuClose.cursor = "pointer";
		iconMenuClose.addEventListener("click", function(evt) {
			toggleTowerMenuAll(false, true);
		});
	}
}

function setupTowerEvents(tower, con){
	tower.cursor = "pointer";
	if(con){
		tower.addEventListener("click", function(evt) {
			if(!gameData.paused){
				playSound('soundMenu');
				toggleTowerRemove();
				toggleTowerMenu(evt.target, evt.target.x, evt.target.y);
			}
		});
	}else{
		tower.addEventListener("click", function(evt) {
			if(!gameData.paused){
				if(buildTowerAnyWhere && gridContainer.alpha > 0){
					return
				}
				playSound('soundMenu');
				toggleTowerMenu();
				toggleTowerRemove(evt.target.towerObj, evt.target.x, evt.target.y);
			}
		});	
	}
}

/*!
 * 
 * BUILD TOWER - This is the function that runs to build tower
 * 
 */
function buildTower(type){
	if(buildTowerAnyWhere){
		if(type == 0){
			TweenMax.killTweensOf(gameData.targetTower);
			gameData.targetTower.ammoReady = true;
			
			//remove
			playSound('soundDestroy');
			gameData.targetTower.towerObj.destroy = true;
			gameData.targetTower.destroy = true;
			objectsContainer.removeChild(gameData.targetTower.lifeContainer, gameData.targetTower.towerObj, gameData.targetTower);
			
			toggleTowerRemove();
		}else{
			gridContainer.alpha = .3;
			toggleTowerMenuAll(false, false);
			
			itemPreTower = $.towers[type].clone();
			itemPreTower.towerType = type;
			itemPreTower.visible = true;
			
			iconContainer.addChild(itemPreTower);
		}
	}else{
		if(gameData.resource <  $.towers['icon'+type].resource){
			return;
		}else{
			gameData.resource -= $.towers['icon'+type].resource;
		}
		
		gameData.targetTower.towerType = type;
		gameData.targetTower.active	= false;
			
		if(type == 0){
			TweenMax.killTweensOf(gameData.targetTower);
			gameData.targetTower.ammoReady = true;
			
			//remove
			playSound('soundDestroy');
			gameData.targetTower.towerObj.destroy = true;
			objectsContainer.removeChild(gameData.targetTower.towerObj);
			gameData.targetTower.towerObj = null;
			gameData.targetTower.visible = true;
			gameData.targetTower.lifeContainer.visible = false;
			
			toggleTowerRemove();
		}else{
			//build
			playSound('soundBuild');
			var newTower = $.towers[type].clone();
			newTower.x = gameData.targetTower.x;
			newTower.y = gameData.targetTower.y;
			newTower.destroy = false;
			newTower.base = false;
			newTower.towerObj = gameData.targetTower;
			gameData.targetTower.towerObj = newTower;
			gameData.targetTower.life = $.towers['icon'+type].life;
			gameData.targetTower.visible = false;
			gameData.targetTower.lifeContainer.visible = true;
			
			gameData.tower.push(newTower);
			setupTowerEvents(newTower, false);
			objectsContainer.addChild(newTower);
			updateLifeBar(gameData.targetTower, 'tower');
			toggleTowerMenu();
		}
	}
}

function buildTowerMenu(curGrid){
	if(gameData.resource <  $.towers['icon'+itemPreTower.towerType].resource){
		return;
	}else{
		gameData.resource -= $.towers['icon'+itemPreTower.towerType].resource;
	}
	
	//base
	var newBase = $.towers[0].clone();
	newBase.x = curGrid.x;
	newBase.y = curGrid.y;
	newBase.active = false;
	newBase.towerType = 0;
	newBase.ammoReady = true;
	newBase.towerObj = null;
	newBase.destroy = false;
	newBase.base = true;
	createLifeBar(newBase, 'tower');
	
	gameData.tower.push(newBase);
	setupTowerEvents(newBase, true);
	objectsContainer.addChild(newBase);
	
	gameData.targetTower = newBase;
	gameData.targetTower.towerType = itemPreTower.towerType;
	gameData.targetTower.active	= false;
	
	//tower
	playSound('soundBuild');
	var newTower = $.towers[itemPreTower.towerType].clone();
	newTower.x = curGrid.x;
	newTower.y = curGrid.y;
	newTower.destroy = false;
	newTower.base = false;
	newTower.towerObj = gameData.targetTower;
	gameData.targetTower.towerObj = newTower;
	gameData.targetTower.life = $.towers['icon'+itemPreTower.towerType].life;
	gameData.targetTower.visible = false;
	gameData.targetTower.lifeContainer.visible = true;
	
	gameData.tower.push(newTower);
	setupTowerEvents(newTower, false);
	objectsContainer.addChild(newTower);
	updateLifeBar(gameData.targetTower, 'tower');
	
	iconContainer.removeChild(itemPreTower);
	gridContainer.alpha = 0;
	toggleTowerMenuAll(false, true);
}

/*!
 * 
 * DESTROY TOWER - This is the function that runs to destroy tower
 * 
 */
function destroyTower(tower){
	TweenMax.killTweensOf(tower);
	tower.ammoReady = true;
	tower.active = false;
	
	//remove
	tower.towerObj.destroy = true;
	objectsContainer.removeChild(tower.towerObj);
	tower.towerObj = null;
	tower.visible = true;
	tower.towerType = 0;
	tower.lifeContainer.visible = false;
	
	if(buildTowerAnyWhere){
		tower.destroy = true;
		objectsContainer.removeChild(tower.lifeContainer, tower);		
	}
	
	toggleTowerRemove();	
}

/*!
 * 
 * TOGGLE TOWER MENU - This is the function that runs to toggle tower menu
 * 
 */
function toggleTowerMenu(obj, x,y){
	var menuCon = false;
	if(obj != null){
		if(obj.towerType != 0){
			return;	
		}
		
		gameData.targetTower = obj;
		for(var n=0; n<gameData.tower.length;n++){
			var curTower = gameData.tower[n];
			if(curTower == obj){
				if(curTower.active){
					curTower.active = false;
				}else{
					curTower.active	= true;
					menuCon = true;
				}
			}else{
				curTower.active = false;	
			}
		}
	}
	
	var segmentNum = 360/(towers_arr.length-1);
	itemMenuBg.visible = false;
	if(menuCon){
		itemMenuBg.visible = true;
		itemMenuBg.x = x;
		itemMenuBg.y = y;
	}
	
	var towerCountNum = 1;
	for(var n=1;n<towers_arr.length;n++){
		$.towers['icon'+n].visible = false;
		$.towers['iconDisable'+n].visible = false;
		
		if(menuCon && levels_arr[gameData.levelNum].level.tower.indexOf(n) != -1){
			getAnglePosition($.towers['icon'+n], x, y, gameData.menuAngle, segmentNum * (towerCountNum-1));
			getAnglePosition($.towers['iconDisable'+n], x, y, gameData.menuAngle, segmentNum * (towerCountNum-1));
			towerCountNum++;
			$.towers['icon'+n].visible = true;
		}
	}
	
	checkTowerResource();
}

function toggleTowerRemove(obj, x,y){
	var menuCon = false;
	if(obj != null){		
		gameData.targetTower = obj;
		for(var n=0; n<gameData.tower.length;n++){
			var curTower = gameData.tower[n];
			if(curTower == obj){
				if(curTower.active){
					curTower.active = false;
				}else{
					curTower.active	= true;
					menuCon = true;
				}
			}else{
				curTower.active = false;	
			}
		}
	}
	
	var segmentNum = 360/(1);
	itemMenuBgSmall.visible = false;
	if(menuCon){
		itemMenuBgSmall.visible = true;
		itemMenuBgSmall.x = x;
		itemMenuBgSmall.y = y;
	}
	for(var n=0;n<1;n++){
		$.towers['icon'+n].visible = false;
		$.towers['iconDisable'+n].visible = false;
		
		if(menuCon){
			getAnglePosition($.towers['icon'+n], x, y, gameData.menuAngleRemove, segmentNum * (n-1));
			getAnglePosition($.towers['iconDisable'+n], x, y, gameData.menuAngleRemove, segmentNum * (n-1));
			$.towers['icon'+n].visible = true;	
		}
	}	
	checkTowerResource();
}

function toggleTowerMenuAll(con, menu){
	iconMenu.visible = menu;
	
	var towerCountNum = 1;
	var startX = iconMenu.x - 70;
	for(var n=1;n<towers_arr.length;n++){
		$.towers['icon'+n].visible = false;
		$.towers['iconDisable'+n].visible = false;
		
		if(con && levels_arr[gameData.levelNum].level.tower.indexOf(n) != -1){
			$.towers['icon'+n].x = $.towers['iconDisable'+n].x = startX;
			$.towers['icon'+n].y = $.towers['iconDisable'+n].y = iconMenu.y;
			startX -= 55;
			
			towerCountNum++;
			$.towers['icon'+n].visible = true;
		}
	}
	
	checkTowerResource();	
}

/*!
 * 
 * LOOP UPDATE GAME - This is the function that runs to update game loop
 * 
 */
function updateGame(){
	removeObjects();
	loopObjectsAmmo();
	checkTowerResource();
	updateGameStatus();
	
	objectsContainer.sortChildren(sortFunction);
}

/*!
 * 
 * REMOVE OBJECTS - This is the function that runs to remove unused objects
 * 
 */
function removeObjects(){
	for(var n=0; n<gameData.monster.length;n++){
		var curMonster = gameData.monster[n].obj;
		if(!curMonster.active && curMonster.walk){
			gameData.monster.splice(n,1);
			n = gameData.monster.length;
		}
	}
	
	for(var n=0; n<gameData.tower.length;n++){
		var curTower = gameData.tower[n];
		if(curTower.destroy){
			gameData.tower.splice(n,1);
			n = gameData.tower.length;
		}
	}
}

/*!
 * 
 * CHECK TOWER RESOURCE - This is the function that runs to check tower resource
 * 
 */
function checkTowerResource(){
	for(var n=0;n<towers_arr.length;n++){
		if($.towers['icon'+n].visible){
			if(gameData.resource >=  $.towers['icon'+n].resource){
				$.towers['iconDisable'+n].visible = false;
			}else{
				$.towers['iconDisable'+n].visible = true;	
			}
		}
	}	
}

/*!
 * 
 * LOOP OBJECTS AMMO - This is the function that runs to loop monsters and towers ammo
 * 
 */
function loopObjectsAmmo(){
	//towers
	for(var t=0; t<gameData.tower.length;t++){
		var curTower = gameData.tower[t];
		var progress_arr = [];
		if(curTower.towerType != 0 && curTower.ammoReady){
			for(var n=0; n<gameData.monster.length;n++){
				var curMonster = gameData.monster[n].obj;
				var distance = getDistance(curTower, curMonster);
				if(distance <= towers_arr[curTower.towerType].ammo.range && curTower.ammoReady && curMonster.active && curMonster.walk){
					var tweenProgress = gameData.monster[n].tween.progress();
					progress_arr.push({progress:tweenProgress, monster:curMonster, num:n});
				}
			}
			
			if(progress_arr.length > 0){
				sortOnObject(progress_arr, 'progress', true);
				curTower.ammoReady = false;
				createTowerAmmo(curTower, progress_arr[0].monster, progress_arr[0].num);
				TweenMax.to(curTower, towers_arr[curTower.towerType].ammo.time, {overwrite:true, onComplete:towerAmmoReset, onCompleteParams:[curTower]});	
			}
		}
	}
	
	//monsters
	for(var n=0; n<gameData.monster.length;n++){
		var curMonster = gameData.monster[n].obj;
		var distance_arr = [];
		if(curMonster.active && curMonster.walk && curMonster.ammoReady){
			for(var t=0; t<gameData.tower.length;t++){
				var curTower = gameData.tower[t];
				var distance = getDistance(curMonster, curTower);
				if(distance <= monsters_arr[curMonster.monsterType].ammo.range && curMonster.ammoReady && curTower.base && !curTower.visible){
					distance_arr.push({tower:curTower, distance:distance, num:t});
				}
			}
			
			if(distance_arr.length > 0){
				sortOnObject(distance_arr, 'distance', false);
				curMonster.ammoReady = false;
				createMonsterAmmo(curMonster, distance_arr[0].tower, distance_arr[0].num);
				TweenMax.to(gameData.monster[n], monsters_arr[curMonster.monsterType].ammo.time, {overwrite:true, onComplete:monsterAmmoReset, onCompleteParams:[curMonster]});
			}
		}
	}
}

/*!
 * 
 * CREATE MONSTER AMMO - This is the function that runs to create monster ammo
 * 
 */
function createMonsterAmmo(monster, tower, towerNum){
	var newAmmo = $.monsters['ammo'+monster.monsterType].clone();
	newAmmo.x = monster.x;
	newAmmo.y = monster.y + monsters_arr[monster.monsterType].ammo.shotOffset;
	newAmmo.life = monsters_arr[monster.monsterType].ammo.life;
	ammoContainer.addChild(newAmmo);
	
	var distance = getDistance(monster, tower);
	var duration = Math.abs((distance) / (monsters_arr[monster.monsterType].ammo.speed * 100));
	var rotateNum = 0;
	if(monsters_arr[monster.monsterType].ammo.rotate){
		rotateNum = 360;
	}else{
		rotateNum = getDirection(newAmmo, tower);
		newAmmo.rotation = rotateNum;
	}
	
	TweenMax.to(newAmmo, duration, {x:tower.x, y:tower.y + towers_arr[tower.towerType].hitOffset, rotation:rotateNum, overwrite:true, ease:Linear.easeNone, onComplete:monsterAmmoComplete, onCompleteParams:[newAmmo, tower, towerNum]});
}

function monsterAmmoComplete(ammo, tower, towerNum){
	if(tower != null && !tower.visible){
		var randomNum = Math.floor(Math.random()*3)+1;
		playSound('soundHit'+randomNum);
		
		tower.life -= ammo.life;
		if(tower.life <= 0){
			playSound('soundDestroy');
			destroyTower(tower);	
		}
		updateLifeBar(tower, 'tower');
	}
	ammoContainer.removeChild(ammo);	
}

function monsterAmmoReset(monster){
	monster.ammoReady = true;	
}

/*!
 * 
 * FREEZE MONSTER - This is the function that runs to freeze monster
 * 
 */
function freezeMonster(num, delay){
	try {
		gameData.monster[num].tween.timeScale(gameData.speed - gameData.freezeDelay);
		gameData.monster[num].freeze = TweenMax.to(gameData.monster[num], 0, {delay:delay, overwrite:true, onComplete:freezeMonsterMoveComplete, onCompleteParams:[num]});
	} catch(err) {
		
	}
}

function freezeMonsterMoveComplete(num){
	try {
		gameData.monster[num].obj.freeze = false;
		gameData.monster[num].tween.timeScale(gameData.speed);
		updateLifeBar(gameData.monster[num].obj, 'monster');	
	} catch(err) {
		
	}
}

/*!
 * 
 * CREATE TOWER AMMO - This is the function that runs to create tower ammo
 * 
 */
function createTowerAmmo(tower, monster, monsterNum){
	playSound('soundTowerAmmo'+tower.towerType);
	
	var newAmmo = $.towers['ammo'+tower.towerType].clone();
	newAmmo.x = tower.x;
	newAmmo.y = tower.y + towers_arr[tower.towerType].ammo.shotOffset;
	newAmmo.life = towers_arr[tower.towerType].ammo.life;
	newAmmo.freeze = 0;
	if(towers_arr[tower.towerType].ammo.freeze > 0){
		newAmmo.freeze = towers_arr[tower.towerType].ammo.freeze;
	}
	ammoContainer.addChild(newAmmo);
	
	var distance = getDistance(tower, monster);
	var duration = Math.abs((distance) / (towers_arr[tower.towerType].ammo.speed * 100));
	var rotateNum = 0;
	if(towers_arr[tower.towerType].ammo.rotate){
		rotateNum = 360;
	}else{
		rotateNum = getDirection(newAmmo, monster);
		newAmmo.rotation = rotateNum;
	}
	TweenMax.to(newAmmo, duration, {x:monster.x, y:monster.y + monsters_arr[monster.monsterType].hitOffset, rotation:rotateNum, overwrite:true, ease:Linear.easeNone, onComplete:towerAmmoComplete, onCompleteParams:[newAmmo, monster, monsterNum]});
}

function towerAmmoComplete(ammo, monster, monsterNum){
	if(monster != null && monster.active && monster.walk){
		var randomNum = Math.floor(Math.random()*3)+1;
		playSound('soundHit'+randomNum);
			
		monster.life -= ammo.life;
		if(monster.life <= 0){
			var randomNum = Math.floor(Math.random()*4)+1;
			playSound('soundDead'+randomNum);
	
			gameData.resource += monster.resource;
			increaseScore(monsterNum);
			removeMonster(monster, true);	
		}else{
			if(ammo.freeze > 0 && monster!= null){
				monster.freeze = true;
				freezeMonster(monsterNum, ammo.freeze);	
			}
		}
		updateLifeBar(monster, 'monster');
	}
	ammoContainer.removeChild(ammo);	
}

function towerAmmoReset(tower){
	tower.ammoReady = true;	
}

/*!
 * 
 * INCREASE SCORE - This is the function that runs to increase score
 * 
 */
function increaseScore(monsterNum){
	try {
		var tweenProgress = gameData.monster[monsterNum].tween.progress();
		tweenProgress = 1 - tweenProgress;
		playerData.score += Math.floor(tweenProgress * scoreNumber);
	} catch(err) {
		
	}
}

function updateGameStatus(){
	lifeTxt.text = lifeTextDisplay.replace('[NUMBER]', gameData.life);
	resourceTxt.text = gameData.resource;
	
	var finalWaveTextDisplay = waveTextDisplay.replace('[NUMBER]', gameData.waveCount);
	finalWaveTextDisplay = finalWaveTextDisplay.replace('[TOTAL]', gameData.waveTotal);
	waveTxt.text = finalWaveTextDisplay;
}

/*!
 * 
 * MISC - This is the function that runs tfor misc function
 * 
 */
function getAnglePosition(obj, x1, y1, radius, angle){
    obj.x = x1 + radius * Math.cos(angle * Math.PI/180)
    obj.y = y1 + radius * Math.sin(angle * Math.PI/180)
}

function getDirection(obj, monster) {
    var radiance = 180/Math.PI;
    var walkdirection = -(Math.atan2(monster.x-obj.x, monster.y-obj.y))*radiance;
    return walkdirection+180;
}

var sortFunction = function(obj1, obj2, options) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
  
}