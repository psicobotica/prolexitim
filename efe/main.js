
// Finite State Machine definition for EFE Test 
 var machine = new StateMachine({
    init: 'start',
    transitions: [
      { name: 'imgs_loaded',     from: 'start',  to: 'welcome' },
      { name: 'got_new_email',   from: 'welcome', to: 'demographics'  },
	  { name: 'got_known_email',   from: 'welcome', to: 'instructions'  },
      { name: 'got_demographics', from: 'demographics', to: 'instructions'    },
      { name: 'acknowledge', from: 'instructions',    to: 'fixation' },
	  { name: 'fixation_timeout', from: 'fixation',    to: 'efe_challenge' },
	  { name: 'response', from: 'efe_challenge',    to: 'fixation' },
	  { name: 'finish', from: 'efe_challenge',    to: 'end' }
    ],
	data: {
		current_iteration: 1,
		current_image: 'none'
	},
    methods: {
	  getCurIter: function() { return this.current_iteration },
	  getCurImg: function() { return thiscurrent_img },
      onImgsLoaded:     function() { console.log('Images loaded')    },
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
 // machine.imgs_loaded() 
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
 
 
 