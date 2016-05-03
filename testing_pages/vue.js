

console.log("GO");

var Vue = require('vue');


var TodoView = Vue.extend({
    props: [
        'title',
    ]
    data: {
        newTodo: '',
        todos: [
            { text: 'Add some todos' }
        ]
    },
    methods: {
        addTodo: function () {
            console.log("add")
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        }
    },
    template: '<div id="container_1" class="cr"><div class="kk">'
            +    '<h1 class="center">{{ title }}</h1>'
            +    '<div class="row"><form v-on:submit="addTodo" id="addtodo" class="col s12" action="#">'
            +       '<div class="input-field col s12"><input v-model="newTodo" id="form_input_{{ title }}" name="new-item" type="text" placeholder="...">'
            +    '</div></form>'
            +    '</div>'
            +    '<div class="row"><div class="col s12"><div id="todo">'
            +       '<ul id="{{ title }}" class="collection">'
            +           '<li class="collection-item" v-for="todo in todos"><div>'
            +               '{{ todo.text }}'
            +               '<a v-on:click="removeTodo($index)" id="{{ title }}-0" class="secondary-content" href="#!"><i class="material-icons">send</i></a>'
            +            '</div></li>'
            +       '</ul>'
            +    '</div></div></div>'
            + '</div></div>'
});



var v1 = new TodoView({el : $('#container_1'), title : 'List - 1'});
var v2 = new TodoView({el : $('#container_2'), title : 'List - 2'});
var v3 = new TodoView({el : $('#container_3'), title : 'List - 3'});
var v4 = new TodoView({el : $('#container_4'), title : 'List - 4'});
var v5 = new TodoView({el : $('#container_5'), title : 'List - 5'});
var v6 = new TodoView({el : $('#container_6'), title : 'List - 6'});
var v7 = new TodoView({el : $('#container_7'), title : 'List - 7'});
var v8 = new TodoView({el : $('#container_8'), title : 'List - 8'});
var v9 = new TodoView({el : $('#container_9'), title : 'List - 9'});

var v10 = new TodoView({el : $('#container_10'), title : 'List - 10'});
var v11 = new TodoView({el : $('#container_11'), title : 'List - 11'});
var v12 = new TodoView({el : $('#container_12'), title : 'List - 12'});
var v13 = new TodoView({el : $('#container_13'), title : 'List - 13'});
var v14 = new TodoView({el : $('#container_14'), title : 'List - 14'});
var v15 = new TodoView({el : $('#container_15'), title : 'List - 15'});
var v16 = new TodoView({el : $('#container_16'), title : 'List - 16'});
var v17 = new TodoView({el : $('#container_17'), title : 'List - 17'});
var v18 = new TodoView({el : $('#container_18'), title : 'List - 18'});
var v19 = new TodoView({el : $('#container_19'), title : 'List - 19'});

var v20 = new TodoView({el : $('#container_20'), title : 'List - 20'});
var v21 = new TodoView({el : $('#container_21'), title : 'List - 21'});
var v22 = new TodoView({el : $('#container_22'), title : 'List - 22'});
var v23 = new TodoView({el : $('#container_23'), title : 'List - 23'});
var v24 = new TodoView({el : $('#container_24'), title : 'List - 24'});
var v25 = new TodoView({el : $('#container_25'), title : 'List - 25'});
var v26 = new TodoView({el : $('#container_26'), title : 'List - 26'});
var v27 = new TodoView({el : $('#container_27'), title : 'List - 27'});
var v28 = new TodoView({el : $('#container_28'), title : 'List - 28'});
var v29 = new TodoView({el : $('#container_29'), title : 'List - 29'});

var v30 = new TodoView({el : $('#container_30'), title : 'List - 30'});
var v31 = new TodoView({el : $('#container_31'), title : 'List - 31'});
var v32 = new TodoView({el : $('#container_32'), title : 'List - 32'});
var v33 = new TodoView({el : $('#container_33'), title : 'List - 33'});
var v34 = new TodoView({el : $('#container_34'), title : 'List - 34'});
var v35 = new TodoView({el : $('#container_35'), title : 'List - 35'});
var v36 = new TodoView({el : $('#container_36'), title : 'List - 36'});
var v37 = new TodoView({el : $('#container_37'), title : 'List - 37'});
var v38 = new TodoView({el : $('#container_38'), title : 'List - 38'});
var v39 = new TodoView({el : $('#container_39'), title : 'List - 39'});

var v40 = new TodoView({el : $('#container_40'), title : 'List - 40'});
var v41 = new TodoView({el : $('#container_41'), title : 'List - 41'});
var v42 = new TodoView({el : $('#container_42'), title : 'List - 42'});
var v43 = new TodoView({el : $('#container_43'), title : 'List - 43'});
var v44 = new TodoView({el : $('#container_44'), title : 'List - 44'});
var v45 = new TodoView({el : $('#container_45'), title : 'List - 45'});
var v46 = new TodoView({el : $('#container_46'), title : 'List - 46'});
var v47 = new TodoView({el : $('#container_47'), title : 'List - 47'});
var v48 = new TodoView({el : $('#container_48'), title : 'List - 48'});
var v49 = new TodoView({el : $('#container_49'), title : 'List - 49'});

var v50 = new TodoView({el : $('#container_50'), title : 'List - 50'});
var v51 = new TodoView({el : $('#container_51'), title : 'List - 51'});
var v52 = new TodoView({el : $('#container_52'), title : 'List - 52'});
var v53 = new TodoView({el : $('#container_53'), title : 'List - 53'});
var v54 = new TodoView({el : $('#container_54'), title : 'List - 54'});
var v55 = new TodoView({el : $('#container_55'), title : 'List - 55'});
var v56 = new TodoView({el : $('#container_56'), title : 'List - 56'});
var v57 = new TodoView({el : $('#container_57'), title : 'List - 57'});
var v58 = new TodoView({el : $('#container_58'), title : 'List - 58'});
var v59 = new TodoView({el : $('#container_59'), title : 'List - 59'});

var v60 = new TodoView({el : $('#container_60'), title : 'List - 60'});
var v61 = new TodoView({el : $('#container_61'), title : 'List - 61'});
var v62 = new TodoView({el : $('#container_62'), title : 'List - 62'});
var v63 = new TodoView({el : $('#container_63'), title : 'List - 63'});
var v64 = new TodoView({el : $('#container_64'), title : 'List - 64'});
var v65 = new TodoView({el : $('#container_65'), title : 'List - 65'});
var v66 = new TodoView({el : $('#container_66'), title : 'List - 66'});
var v67 = new TodoView({el : $('#container_67'), title : 'List - 67'});
var v68 = new TodoView({el : $('#container_68'), title : 'List - 68'});
var v69 = new TodoView({el : $('#container_69'), title : 'List - 69'});

var v70 = new TodoView({el : $('#container_70'), title : 'List - 70'});
var v71 = new TodoView({el : $('#container_71'), title : 'List - 71'});
var v72 = new TodoView({el : $('#container_72'), title : 'List - 72'});
var v73 = new TodoView({el : $('#container_73'), title : 'List - 73'});
var v74 = new TodoView({el : $('#container_74'), title : 'List - 74'});
var v75 = new TodoView({el : $('#container_75'), title : 'List - 75'});
var v76 = new TodoView({el : $('#container_76'), title : 'List - 76'});
var v77 = new TodoView({el : $('#container_77'), title : 'List - 77'});
var v78 = new TodoView({el : $('#container_78'), title : 'List - 78'});
var v79 = new TodoView({el : $('#container_79'), title : 'List - 79'});

var v80 = new TodoView({el : $('#container_80'), title : 'List - 80'});
var v81 = new TodoView({el : $('#container_81'), title : 'List - 81'});
var v82 = new TodoView({el : $('#container_82'), title : 'List - 82'});
var v83 = new TodoView({el : $('#container_83'), title : 'List - 83'});
var v84 = new TodoView({el : $('#container_84'), title : 'List - 84'});
var v85 = new TodoView({el : $('#container_85'), title : 'List - 85'});
var v86 = new TodoView({el : $('#container_86'), title : 'List - 86'});
var v87 = new TodoView({el : $('#container_87'), title : 'List - 87'});
var v88 = new TodoView({el : $('#container_88'), title : 'List - 88'});
var v89 = new TodoView({el : $('#container_89'), title : 'List - 89'});

var v90 = new TodoView({el : $('#container_90'), title : 'List - 90'});
var v91 = new TodoView({el : $('#container_91'), title : 'List - 91'});
var v92 = new TodoView({el : $('#container_92'), title : 'List - 92'});
var v93 = new TodoView({el : $('#container_93'), title : 'List - 93'});
var v94 = new TodoView({el : $('#container_94'), title : 'List - 94'});
var v95 = new TodoView({el : $('#container_95'), title : 'List - 95'});
var v96 = new TodoView({el : $('#container_96'), title : 'List - 96'});
var v97 = new TodoView({el : $('#container_97'), title : 'List - 97'});
var v98 = new TodoView({el : $('#container_98'), title : 'List - 98'});
var v99 = new TodoView({el : $('#container_99'), title : 'List - 99'});
var v100 = new TodoView({el : $('#container_100'), title : 'List - 100'});
