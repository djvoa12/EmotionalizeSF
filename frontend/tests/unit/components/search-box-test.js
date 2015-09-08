import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('search-box', 'Unit | Component | search box', {
  unit: true,
  needs: ['component:ui-autocomplete', 'component:ui-autocomplete-field', 'component:liquid-if', 'component:ui-option-list', 'component:ui-option']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('default property values are correct', function(assert) {
  assert.expect(2);

  let component = this.subject();

  assert.equal(component.get('limit'), 5, 'limit is correct');
  assert.equal(component.get('classNames')[1], 'search-box', 'class name is correct');
});

test('`setValue` action is triggered', function(assert) {
  assert.expect(1);

  let component = this.subject();

  component._actions.setValue = () => {
    assert.ok(true, 'setValue action was called');
  };

  component.send('setValue');
});
