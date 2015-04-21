export default function() {
  this.get('/events', function(db) {
    return {
      events: db.events
    };
  });
}