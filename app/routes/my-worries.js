import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
          id: 'uuidrandom',
          type: 'hypothetical',
          title: 'People not liking me',
          description: 'I dont know if people like me or not',
          date: Date.now(),
        },
        {
          id: 'uuidrandom1',
          type: 'real',
          title: 'Not Eating Healthy',
          description: 'I dont think I eat healty food',
          date: Date.now(),
          deadline: new Date(Date.now() + (1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10))
        }];
   }
});
