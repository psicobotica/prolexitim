
// Using dataframes
var DataFrame = dfjs.DataFrame;

// Loading experiment design data
DataFrame.fromCSV('http://psicobotica.com/prolexitim/efe/efe-experiment-1.csv').then(loadExperiment);

// Experiment data
var series = []; 
var trials = [];
var imagefiles = [];

var curSerie = 0; 
var curTrial = 0;
var curImageFile = ""; 


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
	  onExperimentLoaded:     function() { console.log('Experiment loaded')    },
      onImgagesLoaded:     function() { console.log('Images loaded')    },
      onGotNewEmail:   function() { console.log('New user, need demographics')     },
	  onGotKnowmEmail:   function() { console.log('Known user, retrieved demographics')     },
      onGotDemographics: function() { console.log('Demographic data recorded') },
      onAcknowledge: function() { console.log('Starting the test') },
	  onFixationTimeout: function() { console.log('End of fixation stimulus') },
	  onResponse: function() { console.log('EFE challenge responded') },
	  onFinish: function() { console.log('All EFE challenges completed') }
    }
  });
  
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
 
 
 function loadExperiment(df)
 {
	console.log("experiment data is ready."); 
	// console.log(df.show()); 
	series = df.select("series").toArray();
	trials = df.select("trial").toArray();
	imagefiles = df.select("image").toArray();
	
	// transition the machine
	machine.experimentLoaded();
	
	document.getElementById("status").style.visibility = "visible";
	document.getElementById("status_body").innerHTML = 
		"Estado: " + machine.state + ". Cargado: " + series.length + " series y " + trials.length + " ensayos.";
	console.log(series.toString());
	console.log(trials.toString());
	console.log(imagefiles.toString());
	
	
 }