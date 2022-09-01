
//local
var ComponentA = {
    template: '<div>This is a local component 1 A</div>',
};
var ComponentB = {
    template: '<div>This is a local component 1 B</div>',
};

new Vue({
    el: '#local',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    },
  });


//Global
Vue.component('component1', {
    template:'<div>{{ text}}</div>',
    data: function () {
        return {
            text: 'This is a component 1!'
        };
    },
});
Vue.component('component2', {
    template:'<div>This is a component 2</div>',
});

Vue.component('thisIsGlobal', {
    template:'<div>This is a global</div>',
});

var component1 = {
    template: '<div><thisIsGlobal></thisIsGlobal>This is a component 1</div>',
};
var component2 = {
    template:'<div><component1></component2>This is a component 1</div>',
    components: {
        component1,
        component2,
    }
};
var app = new Vue({
    el: '#app',
    data: {
        text: 'hello vue',
    },
    components: {
        component1,
        component2,
    },
});
