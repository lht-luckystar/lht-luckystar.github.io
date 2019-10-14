////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		resizeGameFunc();
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/button_start.png', id:'buttonStart'},
			
			{src:'assets/icon_menu.png', id:'iconMenu'},
			{src:'assets/icon_menu_close.png', id:'iconMenuClose'},
			{src:'assets/item_select.png', id:'itemSelect'},
			{src:'assets/button_arrow.png', id:'buttonArrow'},
			{src:'assets/item_level.png', id:'itemLevel'},
			{src:'assets/item_level_lock.png', id:'itemLevelLock'},
			
			{src:'assets/grid_path.png', id:'gridPath'},
			{src:'assets/grid_enter.png', id:'gridEnter'},
			{src:'assets/grid_exit.png', id:'gridExit'},
			{src:'assets/grid_tower.png', id:'gridTower'},
			
			{src:'assets/item_love.png', id:'itemLove'},
			{src:'assets/item_stage_overlay.png', id:'itemStageOverlay'},
			{src:'assets/item_status.png', id:'itemStatus'},
			{src:'assets/item_grid.png', id:'itemGrid'},
			{src:'assets/item_menu_bg.png', id:'itemMenuBg'},
			{src:'assets/item_menu_bg_small.png', id:'itemMenuBgSmall'},
			
			{src:'assets/item_overlay_start.png', id:'itemOverlayStart'},
			{src:'assets/item_overlay.png', id:'itemOverlay'},
			{src:'assets/button_blank.png', id:'buttonBlank'},
			
			{src:'assets/item_result.png', id:'itemResult'},
			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_google.png', id:'buttonGoogle'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_exit.png', id:'buttonExit'}];
	
	for(var n=0;n<levels_arr.length;n++){
		manifest.push({src:levels_arr[n].level.src, id:'stage'+n});
	}
	
	for(var n=0;n<monsters_arr.length;n++){
		manifest.push({src:monsters_arr[n].src, id:'monster'+n});
		if(monsters_arr[n].ammo.src != undefined){
			manifest.push({src:monsters_arr[n].ammo.src, id:'monsterAmmo'+n});
		}
	}
	
	for(var n=0;n<towers_arr.length;n++){
		manifest.push({src:towers_arr[n].image.src, id:'tower'+n});
		manifest.push({src:towers_arr[n].icon.src, id:'towerIcon'+n});
		manifest.push({src:towers_arr[n].icon.disable, id:'towerIconDisable'+n});
		
		if(towers_arr[n].ammo.src != undefined){
			manifest.push({src:towers_arr[n].ammo.src, id:'towerAmmo'+n});
		}
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/main_music.ogg', id:'musicMain'});
		manifest.push({src:'assets/sounds/game_music.ogg', id:'musicGame'});
		
		manifest.push({src:'assets/sounds/click.ogg', id:'soundClick'});
		manifest.push({src:'assets/sounds/dead1.ogg', id:'soundDead1'});
		manifest.push({src:'assets/sounds/dead2.ogg', id:'soundDead2'});
		manifest.push({src:'assets/sounds/dead3.ogg', id:'soundDead3'});
		manifest.push({src:'assets/sounds/dead4.ogg', id:'soundDead4'});
		
		manifest.push({src:'assets/sounds/hit1.ogg', id:'soundHit1'});
		manifest.push({src:'assets/sounds/hit2.ogg', id:'soundHit2'});
		manifest.push({src:'assets/sounds/hit3.ogg', id:'soundHit3'});
		
		manifest.push({src:'assets/sounds/alert.ogg', id:'soundAlert'});
		manifest.push({src:'assets/sounds/select.ogg', id:'soundMenu'});
		manifest.push({src:'assets/sounds/build.ogg', id:'soundBuild'});
		manifest.push({src:'assets/sounds/destroy.ogg', id:'soundDestroy'});
		
		manifest.push({src:'assets/sounds/fail.ogg', id:'soundFail'});
		manifest.push({src:'assets/sounds/success.ogg', id:'soundSuccess'});
		manifest.push({src:'assets/sounds/notification.ogg', id:'soundNotification'});
		manifest.push({src:'assets/sounds/life.ogg', id:'soundLife'});
		
		for(var n=0;n<towers_arr.length;n++){
			if(towers_arr[n].sound != undefined){
				manifest.push({src:towers_arr[n].sound, id:'soundTowerAmmo'+n});
			}
		}
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}