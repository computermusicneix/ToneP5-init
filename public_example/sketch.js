
let alpha = 0;

let synth = new Tone.Synth().toMaster();

let part = new Tone.Part(function(time, value){
	
	synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
	alpha = value.note;
}, [
	{"time" : 0, "note" : 200, "velocity": 0.9},
	{"time" : "0:2", "note" : 250, "velocity": 0.5},
	{"time" : "0:3:2", "note" : 180, "velocity": 0.5},
	{"time" : "0:4:1:3", "note" : 280, "velocity": 0.5}
]);


function setup(){
	createCanvas(800,600);
	
	part.playbackRate = 2;
	part.humanize = true;
        part.loop = true;                               
	part.start();
	Tone.Transport.start();
}

function draw(){

  	background(0);

	push();

    	stroke(255,255,255,255);
   	noFill();
    	strokeWeight(20);
    	translate(width/2, height/2);
    	rotate(frameCount / 50);
    	scale(map(alpha,0,300,0.0,0.5));
    	polygon(0, 0, windowWidth/2, 6);

    	pop();

}

function mouseClicked(){

  	Tone.start();

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
