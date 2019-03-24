
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
    methods: {
      onImgs_loaded:     function() { console.log('Imaged loaded')    },
      onGot_new_email:   function() { console.log('New user, need demographics')     },
	  onGot_knowm_email:   function() { console.log('Known user, retrieved demographics')     },
      onGot_demographics: function() { console.log('Demographic data recorded') },
      onAcknowledge: function() { console.log('Starting the test') },
	  onFixation_timeout: function() { console.log('End of fixation stimulus') },
	  onResponse: function() { console.log('EFE challenge responded') },
	  onFinish: function() { console.log('All EFE challenges completed') },
    }
  });