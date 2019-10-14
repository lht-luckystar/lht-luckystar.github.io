////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);	
}

var guide = false;
var canvasContainer, mainContainer, selectContainer, gameContainer, levelContainer, gridContainer, editContainer, objectsContainer, ammoContainer, iconContainer, waveStatusContainer, statusContainer, beginOverlayContainer, stageClearContainer, confirmContainer, resultContainer;
var guideline, bg, logo, buttonStart, buttonContinue, buttonFacebook, buttonTwitter, buttonGoogle, buttonFullscreen, buttonSoundOn, buttonSoundOff;
var itemPreTower = null;

$.monsters = {};
$.towers = {};
$.selectStage = {};
$.stage = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	selectContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	levelContainer = new createjs.Container();
	gridContainer = new createjs.Container();
	editContainer = new createjs.Container();
	objectsContainer = new createjs.Container();
	ammoContainer = new createjs.Container();
	iconContainer = new createjs.Container();
	statusContainer = new createjs.Container();
	waveStatusContainer = new createjs.Container();
	beginOverlayContainer = new createjs.Container();
	stageClearContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	buttonStart.x = canvasW/2;
	buttonStart.y = canvasH/100 * 77;
	
	//select
	itemSelect = new createjs.Bitmap(loader.getResult('itemSelect'));
	centerReg(itemSelect);
	itemSelect.x = canvasW/2;
	itemSelect.y = canvasH/2;
	
	buttonArrowL = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonArrowL);
	
	buttonArrowR = new createjs.Bitmap(loader.getResult('buttonArrow'));
	centerReg(buttonArrowR);
	
	buttonArrowL.x = canvasW/100 * 45;
	buttonArrowL.y = canvasH/100 * 76;
	buttonArrowL.scaleX = -1;
	
	buttonArrowR.x = canvasW/100 * 55;
	buttonArrowR.y = canvasH/100 * 76;
	
	selectTitleTxt = new createjs.Text();
	selectTitleTxt.font = "45px planerregular";
	selectTitleTxt.color = "#574836";
	selectTitleTxt.textAlign = "center";
	selectTitleTxt.textBaseline='alphabetic';
	selectTitleTxt.text = selectTitleText;
	
	selectTitleTxt.x = canvasW/2;
	selectTitleTxt.y = canvasH/100 * 31;
	
	selectContainer.addChild(itemSelect, selectTitleTxt, buttonArrowL, buttonArrowR);
	
	var colCount = 1;
	var rowCount = 1;
	var startX = canvasW/100 * 30;
	var startY = canvasH/100 * 42;
	var curX = startX;
	var curY = startY;
	var spaceX = 87;
	var spaceY = 90;
	
	for(var n=0;n<levels_arr.length;n++){
		$.selectStage['icon_'+n] = new createjs.Bitmap(loader.getResult('itemLevel'));
		centerReg($.selectStage['icon_'+n]);
		
		$.selectStage['iconLock_'+n] = new createjs.Bitmap(loader.getResult('itemLevelLock'));
		centerReg($.selectStage['iconLock_'+n]);
		
		$.selectStage['iconText_'+n] = new createjs.Text();
		$.selectStage['iconText_'+n].font = "40px i_shot_the_serifregular";
		$.selectStage['iconText_'+n].color = "#fff";
		$.selectStage['iconText_'+n].textAlign = "center";
		$.selectStage['iconText_'+n].textBaseline='alphabetic';
		$.selectStage['iconText_'+n].text = n+1;
		
		$.selectStage['icon_'+n].x = $.selectStage['iconLock_'+n].x = $.selectStage['iconText_'+n].x = curX;
		$.selectStage['icon_'+n].y = $.selectStage['iconLock_'+n].y = curY;
		$.selectStage['iconText_'+n].y = curY+13;
		
		curX += spaceX;
		colCount++;
		if(colCount>7){
			colCount = 1;
			curX = startX;
			curY += spaceY;
			rowCount++;
		}
		
		if(rowCount > 3){
			rowCount = 1;
			curX = startX;
			curY = startY;
		}
		
		selectContainer.addChild($.selectStage['icon_'+n], $.selectStage['iconText_'+n], $.selectStage['iconLock_'+n]);
	}
	
	//game
	iconMenu = new createjs.Bitmap(loader.getResult('iconMenu'));
	centerReg(iconMenu);
	iconMenuClose = new createjs.Bitmap(loader.getResult('iconMenuClose'));
	centerReg(iconMenuClose);
	iconMenu.visible = iconMenuClose.visible = false;
	
	itemLove = new createjs.Bitmap(loader.getResult('itemLove'));
	centerReg(itemLove);
	
	for(n=0;n<levels_arr.length;n++){
		$.stage[n] = new createjs.Bitmap(loader.getResult('stage'+n));
		levelContainer.addChild($.stage[n]);
	}
	
	itemStatus = new createjs.Bitmap(loader.getResult('itemStatus'));
	
	lifeTxt = new createjs.Text();
	lifeTxt.font = "20px i_shot_the_serifregular";
	lifeTxt.color = "#fff";
	lifeTxt.textAlign = "left";
	lifeTxt.textBaseline='alphabetic';
	lifeTxt.text = 'x 10';
	
	resourceTxt = new createjs.Text();
	resourceTxt.font = "20px i_shot_the_serifregular";
	resourceTxt.color = "#fff";
	resourceTxt.textAlign = "left";
	resourceTxt.textBaseline='alphabetic';
	resourceTxt.text = '100';
	
	waveTxt = new createjs.Text();
	waveTxt.font = "15px planerregular";
	waveTxt.color = "#fff";
	waveTxt.textAlign = "center";
	waveTxt.textBaseline='alphabetic';
	waveTxt.text = 'WAVE : 1/30';
	
	itemGrid = new createjs.Bitmap(loader.getResult('itemGrid'));
	itemMenuBg = new createjs.Bitmap(loader.getResult('itemMenuBg'));
	centerReg(itemMenuBg);
	itemMenuBgSmall = new createjs.Bitmap(loader.getResult('itemMenuBgSmall'));
	centerReg(itemMenuBgSmall);
	itemMenuBg.visible = itemMenuBgSmall.visible = false;
	
	iconContainer.addChild(itemMenuBg, itemMenuBgSmall, iconMenuClose, iconMenu);
	
	itemOverlayStart = new createjs.Bitmap(loader.getResult('itemOverlayStart'));
	
	beginLevelTxt = new createjs.Text();
	beginLevelTxt.font = "45px planerregular";
	beginLevelTxt.color = "#574836";
	beginLevelTxt.textAlign = "center";
	beginLevelTxt.textBaseline='alphabetic';
	beginLevelTxt.text = beginLevelTitleText;
	
	beginMonsterTxt = new createjs.Text();
	beginMonsterTxt.font = "20px i_shot_the_serifregular";
	beginMonsterTxt.color = "#574836";
	beginMonsterTxt.textAlign = "center";
	beginMonsterTxt.textBaseline='alphabetic';
	beginMonsterTxt.text = beginMonsterText;
	
	beginTowerTxt = new createjs.Text();
	beginTowerTxt.font = "20px i_shot_the_serifregular";
	beginTowerTxt.color = "#574836";
	beginTowerTxt.textAlign = "center";
	beginTowerTxt.textBaseline='alphabetic';
	beginTowerTxt.text = beginTowerText;
	
	beginLevelTxt.x = beginMonsterTxt.x = beginTowerTxt.x = canvasW/2;
	beginLevelTxt.y = canvasH/100 * 32;
	beginMonsterTxt.y = canvasH/100 * 40;
	beginTowerTxt.y = canvasH/100 * 55;
	
	beginOverlayContainer.addChild(itemOverlayStart, beginLevelTxt, beginMonsterTxt, beginTowerTxt);
	
	for(n=0;n<monsters_arr.length;n++){
		var _frameW=monsters_arr[n].width;
		var _frameH=monsters_arr[n].height;
		
		var _frame = {"regX": monsters_arr[n].regX, "regY": monsters_arr[n].regY, "height": _frameH, "count": 10, "width": _frameW};
		var _animations = {run:{frames: [0,1,2,3,4,5,6,7,8], speed:1}, dead:{frames: [9], speed:1}};
							
		monsterData = new createjs.SpriteSheet({
			"images": [loader.getResult('monster'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.monsters[n] = new createjs.Sprite(monsterData, "run");
		$.monsters[n].framerate = 20;
		$.monsters[n].x = -100;
		
		if(monsters_arr[n].ammo.src != undefined){
			$.monsters['ammo'+n] = new createjs.Bitmap(loader.getResult('monsterAmmo'+n));
			$.monsters['ammo'+n].regX = monsters_arr[n].ammo.regX;
			$.monsters['ammo'+n].regY = monsters_arr[n].ammo.regY;
			$.monsters['ammo'+n].x = -100;
			gameContainer.addChild($.monsters['ammo'+n]);
		}
		
		gameContainer.addChild($.monsters[n]);
		
		$.monsters['begin'+n] = new createjs.Sprite(monsterData, "run");
		$.monsters['begin'+n].framerate = 20;
		$.monsters['begin'+n].x = canvasW/2;
		$.monsters['begin'+n].y = canvasH/100 * 49;
		$.monsters['begin'+n].gotoAndStop(1);
		beginOverlayContainer.addChild($.monsters['begin'+n]);
	}
	
	for(n=0;n<towers_arr.length;n++){
		$.towers[n] = new createjs.Bitmap(loader.getResult('tower'+n));
		$.towers[n].regX = towers_arr[n].image.regX;
		$.towers[n].regY = towers_arr[n].image.regY;
		$.towers[n].x = -500;
		
		$.towers['icon'+n] = new createjs.Bitmap(loader.getResult('towerIcon'+n));
		$.towers['icon'+n].regX = towers_arr[n].icon.regX;
		$.towers['icon'+n].regY = towers_arr[n].icon.regY;
		$.towers['icon'+n].resource = towers_arr[n].resource;
		$.towers['icon'+n].life = towers_arr[n].life;
		$.towers['icon'+n].x = -500;
		
		$.towers['iconDisable'+n] = new createjs.Bitmap(loader.getResult('towerIconDisable'+n));
		$.towers['iconDisable'+n].regX = towers_arr[n].icon.regX;
		$.towers['iconDisable'+n].regY = towers_arr[n].icon.regY;
		$.towers['iconDisable'+n].x = -500;
		
		$.towers['ammo'+n] = new createjs.Bitmap(loader.getResult('towerAmmo'+n));
		$.towers['ammo'+n].regX = towers_arr[n].ammo.regX;
		$.towers['ammo'+n].regY = towers_arr[n].ammo.regY;
		$.towers['ammo'+n].x = -500;
		
		gameContainer.addChild($.towers[n], $.towers['ammo'+n]);
		iconContainer.addChild($.towers['icon'+n], $.towers['iconDisable'+n]);
		
		$.towers['begin'+n] = $.towers[n].clone();
		$.towers['begin'+n].x = canvasW/2;
		$.towers['begin'+n].y = canvasH/100 * 64;
		beginOverlayContainer.addChild($.towers['begin'+n]);
	}
	
	itemStageOverlay = new createjs.Bitmap(loader.getResult('itemStageOverlay'));
	
	stageTitleTxt = new createjs.Text();
	stageTitleTxt.font = "45px planerregular";
	stageTitleTxt.color = "#652312";
	stageTitleTxt.textAlign = "center";
	stageTitleTxt.textBaseline='alphabetic';
	stageTitleTxt.text = 'STAGE 1 COMPLETE';
	stageTitleTxt.x = canvasW/2;
	stageTitleTxt.y = canvasH/100 * 52;
	
	stageClearContainer.addChild(itemStageOverlay, stageTitleTxt);
	
	itemOverlay = new createjs.Bitmap(loader.getResult('itemOverlay'));
	
	itemConfirm = new createjs.Bitmap(loader.getResult('buttonBlank'));
	centerReg(itemConfirm);
	itemConfirm.x = canvasW/100* 40;
	itemConfirm.y = canvasH/100 * 60;
	
	itemCancel = new createjs.Bitmap(loader.getResult('buttonBlank'));
	centerReg(itemCancel);
	itemCancel.x = canvasW/100 * 60;
	itemCancel.y = canvasH/100 * 60;
	
	confirmTxt = new createjs.Text();
	confirmTxt.font = "45px planerregular";
	confirmTxt.lineHeight = 60;
	confirmTxt.color = "#584937";
	confirmTxt.textAlign = "center";
	confirmTxt.textBaseline='alphabetic';
	confirmTxt.text = confirmText;
	confirmTxt.x = itemConfirm.x;
	confirmTxt.y = itemConfirm.y + 14;
	
	cancelTxt = new createjs.Text();
	cancelTxt.font = "45px planerregular";
	cancelTxt.color = "#584937";
	cancelTxt.textAlign = "center";
	cancelTxt.textBaseline='alphabetic';
	cancelTxt.text = cancelText;
	cancelTxt.x = itemCancel.x;
	cancelTxt.y = itemCancel.y + 14;
	
	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "45px i_shot_the_serifregular";
	confirmMessageTxt.color = "#584937";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = exitMessage;
	confirmMessageTxt.x = canvasW/2;
	confirmMessageTxt.y = canvasH/100 *45;
	
	confirmContainer.addChild(itemOverlay, itemConfirm, itemCancel, confirmMessageTxt, confirmTxt, cancelTxt);
	confirmContainer.visible = false;
	
	waveStatusTxt = new createjs.Text();
	waveStatusTxt.font = "35px planerregular";
	waveStatusTxt.color = "#fff";
	waveStatusTxt.textAlign = "center";
	waveStatusTxt.textBaseline='alphabetic';
	waveStatusTxt.text = '';
	
	waveStatusShadowTxt = new createjs.Text();
	waveStatusShadowTxt.font = "35px planerregular";
	waveStatusShadowTxt.color = "#484c42";
	waveStatusShadowTxt.textAlign = "center";
	waveStatusShadowTxt.textBaseline='alphabetic';
	waveStatusShadowTxt.text = '';
	
	waveStatusTxt.x = canvasW/2;
	waveStatusShadowTxt.x = waveStatusTxt.x;
	
	waveStatusContainer.addChild(waveStatusShadowTxt, waveStatusTxt);
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));
	centerReg(itemResult);
	itemResult.x = canvasW/2;
	itemResult.y = canvasH/2;
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "45px planerregular";
	resultTitleTxt.color = "#652312";
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = 'STAGE 1 COMPLETE';
	resultTitleTxt.x = canvasW/2;
	resultTitleTxt.y = canvasH/100 * 34;
	
	resultScoreTxt = new createjs.Text();
	resultScoreTxt.font = "100px i_shot_the_serifregular";
	resultScoreTxt.color = "#564836";
	resultScoreTxt.textAlign = "center";
	resultScoreTxt.textBaseline='alphabetic';
	resultScoreTxt.text = '1500PTS';
	resultScoreTxt.x = canvasW/2;
	resultScoreTxt.y = canvasH/100 * 50;
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "25px i_shot_the_serifregular";
	resultShareTxt.color = "#fff";
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = shareText;
	resultShareTxt.x = canvasW/2;
	resultShareTxt.y = canvasH/100 * 56;
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonGoogle = new createjs.Bitmap(loader.getResult('buttonGoogle'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonGoogle);
	createHitarea(buttonGoogle);
	buttonFacebook.x = canvasW/100 * 44;
	buttonTwitter.x = canvasW/2;
	buttonGoogle.x = canvasW/100 * 56;
	buttonFacebook.y = buttonTwitter.y = buttonGoogle.y = canvasH/100*62;
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	createHitarea(buttonContinue);
	buttonContinue.x = canvasW/2;
	buttonContinue.y = canvasH/100 * 73;
	
	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(logo, buttonStart);
	gameContainer.addChild(levelContainer, editContainer, gridContainer, itemGrid, objectsContainer, ammoContainer, waveStatusContainer, iconContainer, beginOverlayContainer, stageClearContainer, statusContainer);
	stageClearContainer.visible = false;
	statusContainer.addChild(itemStatus, lifeTxt, resourceTxt, waveTxt, itemLove);
	resultContainer.addChild(itemResult, resultTitleTxt, resultScoreTxt, buttonContinue);
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonGoogle);
	}
	
	canvasContainer.addChild(bg, mainContainer, selectContainer, gameContainer, resultContainer, confirmContainer, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit, guideline);
	stage.addChild(canvasContainer);
	
	resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		itemStatus.x = offset.x + 20;
		itemStatus.y = offset.y + 8;
		
		lifeTxt.x = itemStatus.x + 40;
		lifeTxt.y = itemStatus.y + 25;
		
		resourceTxt.x = itemStatus.x + 120;
		resourceTxt.y = itemStatus.y + 25;
		
		waveTxt.x = itemStatus.x + 88;
		waveTxt.y = itemStatus.y + 53;
		
		itemLove.x = itemStatus.x + 25;
		itemLove.y = itemStatus.y + 19;
		
		waveStatusTxt.y = offset.y + 35;
		waveStatusShadowTxt.y = waveStatusTxt.y+3;
		
		iconMenu.x = canvasW - (offset.x + 50);
		iconMenu.y = canvasH - (offset.y + 50);
		
		iconMenuClose.x = iconMenu.x;
		iconMenuClose.y = iconMenu.y;
		
		if(curPage == 'main'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = canvasW - offset.x;
			buttonSoundOn.y = buttonSoundOff.y = offset.y;
			buttonSoundOn.x = buttonSoundOff.x -= 40;
			buttonSoundOn.y = buttonSoundOff.y += 40;
			
			buttonFullscreen.x = buttonSoundOn.x-55;
			buttonFullscreen.y = buttonSoundOn.y;
		}else{
			buttonExit.visible = true;
			buttonExit.x = (canvasW - offset.x) - 40;
			buttonExit.y = offset.y + 40;
			buttonSoundOn.x = buttonSoundOff.x = buttonExit.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonExit.y;
			buttonSoundOn.x = buttonSoundOff.x = buttonExit.x - 55;
			buttonSoundOn.y = buttonSoundOff.y = buttonExit.y;
			
			buttonFullscreen.x = buttonSoundOn.x - 55;
			buttonFullscreen.y = buttonSoundOn.y;	
		}
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}