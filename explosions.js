function ExplosionFactory() {	this.explosions = [];	this.randomExplosion = function() {		return randomPick(this.explosions);	}	this.generateExplosion = function() {		var explosion = newCanvas(EXPLOSION_SIZE, EXPLOSION_SIZE);		explosion_ctx = explosion.getContext("2d");		var DRAW_GROUND = true;		if (DRAW_GROUND) {						var groundColor = function() {				return [181, 109, 16, irand(255)];			}			for (var i=0 ; i<3 ; ++i) {				var ground = newCanvas(EXPLOSION_SIZE, EXPLOSION_SIZE);				perlin_noise(ground, groundColor);				circle_alpha(ground);				var ox = (explosion.width - ground.width)/2;				var oy = (explosion.height - ground.height)/2;				explosion_ctx.drawImage(ground, ox, oy, ground.width, ground.width);			}		}		var black = function() {				return [0,0,0, irand(255)];		};		var scortchMark = newCanvas(EXPLOSION_SIZE, EXPLOSION_SIZE);		perlin_noise(scortchMark, black);		circle_alpha(scortchMark);		var ox = (explosion.width - scortchMark.width)/2;		var oy = (explosion.height - scortchMark.height)/2;		explosion_ctx.drawImage(scortchMark, ox, oy, scortchMark.width, scortchMark.width);		return explosion;	}	for (var i=0 ; i<5 ; ++i) {		this.explosions.push(this.generateExplosion());	}}