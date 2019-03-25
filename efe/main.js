
// Using dataframes
var DataFrame = dfjs.DataFrame;

// Loading experiment design data
DataFrame.fromCSV('http://psicobotica.com/prolexitim/efe/efe-experiment-1.csv').then(loadExperiment);

// Experiment data
var series = []; 
var trials = [];
var image1Files = [];
var image2Files = [];

var bitmaps1 = [];
var bitmaps1Index = 0; 

var bitmaps2 = [];
var bitmaps2Index = 0; 

var curSerie = 0; 
var curTrial = 0;

var email = null;
var codigo = null;
var csv_row = ""; 
var sep = ",";
var tiempo = 0; 


// Finite State Machine definition for EFE Test 
 var machine = new StateMachine({
    init: 'start',
    transitions: [
	  { name: 'experiment_loaded',     from: 'start',  to: 'images' },
      { name: 'images_loaded',     from: 'images',  to: 'welcome' },
      { name: 'got_new_email',   from: 'welcome', to: 'demographics'  },
	  { name: 'got_known_email',   from: 'welcome', to: 'instructions'  },
      { name: 'got_demographics', from: 'demographics', to: 'instructions'    },
      { name: 'acknowledge', from: 'instructions',    to: 'series' },
	  { name: 'init_new_series', from: 'series',    to: 'fixation' },
	  { name: 'fixation_timeout', from: 'fixation',    to: 'efe_challenge' },
	  { name: 'response', from: 'efe_challenge',    to: 'fixation' },
	  { name: 'finish_serie', from: 'efe_challenge',    to: 'series' },
	  { name: 'finish_experiment', from: 'series',    to: 'end' }
    ],
	data: {
		current_iteration: 1,
		current_image: 'none'
	},
    methods: {
	  getCurIter: function() { return this.current_iteration },
	  getCurImg: function() { return thiscurrent_img },
	  onExperimentLoaded:     function() { loadAllImages() },
      onImagesLoaded:     function() { doWelcome()   },
      onGotNewEmail:   function() { console.log('New user, need demographics')     },
	  onGotKnowmEmail:   function() { console.log('Known user, retrieved demographics')     },
      onGotDemographics: function() { console.log('Demographic data recorded') },
      onAcknowledge: function() { console.log('Starting the test') },
	  onFixationTimeout: function() { console.log('End of fixation stimulus') },
	  onResponse: function() { console.log('EFE challenge responded') },
	  onFinish: function() { console.log('All EFE challenges completed') }
    }
  });

function doWelcome()
{
	console.log("Entering welcome...")
	document.getElementById("status_body").innerHTML = 
		"Estado: " + machine.state;
	getEmail();
	document.getElementById("status_body").innerHTML = 
		"Estado: " + machine.state;
}

function getEmail() {
	while (email == null || email == "") {
		email = prompt("Introduce tu dirección de correo electrónico. Este formulario es totalmente anónimo.");
	}
}
  
function loadAllImages(){
  console.log('Experiment loaded'); 
  loadImages(image1Files,image2Files,function(){console.log('All images1 loaded.')},function(){console.log('All images2 loaded.')});
 	
  document.getElementById("status_body").innerHTML = 
		"Estado: " + machine.state;
}


  
 // AVAILABLE TRANSITION FUNCTIONS
 // machine.imgsLoaded() 
 // machine.got_new_email() 
 // machine.got_known_email() 
 // machine.got_demographics()
 // machine.acknowledge()
 // machine.fixation_timeout()
 // machine.response()
 // machine.finish()
 
 // HELPERS
 // machine.is(fixation)
 // machine.can(response)
 // machine.cannot(finish)
 // machine.transitions()
 
 function loadImages(uris1, uris2, allImages1LoadedCallback, allImages2LoadedCallback)
 {
	console.log("Loading images...");
	var loadedCounter1 = 0; 
	var toBeLoadedNumber1 = uris1.length; 

	var loadedCounter2 = 0; 
	var toBeLoadedNumber2 = uris2.length; 

	uris1.forEach(function(uri){
		preloadImage1("stimuli/"+uri, function(){
			loadedCounter1++;
			console.log("Number of loaded images1: " + loadedCounter1);
			if (loadedCounter1 == toBeLoadedNumber1) {
				allImages1LoadedCallback();
			}
		});
	});
	
	uris2.forEach(function(uri){
		preloadImage2("stimuli/"+uri, function(){
			loadedCounter2++;
			console.log("Number of loaded images2: " + loadedCounter2);
			if (loadedCounter2 == toBeLoadedNumber2) {
				allImages2LoadedCallback();
				
				// transition the machine
				machine.imagesLoaded();
			}
		});
	});
	
	function preloadImage1(url, anImage1LoadedCallback){
		console.log("Loading image1: " + url);
		bitmaps1[bitmaps1Index] = new Image();
		bitmaps1[bitmaps1Index].onload = anImage1LoadedCallback;
		bitmaps1[bitmaps1Index].src = url; 
		bitmaps1Index++;
	}
		
	function preloadImage2(url, anImage2LoadedCallback){
		console.log("Loading image2: " + url);
		bitmaps2[bitmaps2Index] = new Image();
		bitmaps2[bitmaps2Index].onload = anImage2LoadedCallback;
		bitmaps2[bitmaps2Index].src = url; 
		bitmaps2Index++;
	}
 }
	

 
 function loadExperiment(df)
 {
	console.log("experiment data is ready."); 
	// console.log(df.show()); 
	series = df.select("series").toArray();
	trials = df.select("trial").toArray();
	image1Files = df.select("image1").toArray();
	image2Files = df.select("image2").toArray();
	
	document.getElementById("status").style.visibility = "visible";
	document.getElementById("status_body").innerHTML = 
		"Estado: " + machine.state + ". Cargado: " + trials.length + " ensayos.";
	console.log(series.toString());
	console.log(trials.toString());
	console.log(image1Files.toString());
	console.log(image2Files.toString());
	
	// transition the machine
	machine.experimentLoaded();
	
 }