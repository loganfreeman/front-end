// DEMO
var pathA = document.getElementById('pathA'),
        pathB = document.getElementById('pathB'),
        pathC = document.getElementById('pathC'),
        pathD = document.getElementById('pathD'),
        pathE = document.getElementById('pathE'),
        segmentA = new Segment(pathA, 250, 500),
        segmentB = new Segment(pathB, 250, 250),
        segmentC = new Segment(pathC, 250, 250),
        segmentD = new Segment(pathD, 350, 350),
        segmentE = new Segment(pathE, 450, 450),
        length1 = document.getElementById('length1'),
        length2 = document.getElementById('length2'),
        begin = document.getElementById('begin'),
        end = document.getElementById('end');

    function a1() {
        length1.className = 'current';
        segmentB.draw(250, 500, 2, {delay: 2, callback: function(){ a2(); length1.className = ''; }});
    }
    function a2() {
        length2.className = 'current';
        segmentB.draw(0, 250, 2, {delay: 2, callback: function(){ a3(); length2.className = ''; }});
    }
    function a3() {
        begin.className = 'current';
        segmentC.draw(250, 350, 2, {delay: 2, callback: function(){ a4(); begin.className = ''; }});
    }
    function a4() {
        end.className = 'current';
        segmentD.draw(350, 450, 2, {delay: 2, callback: function(){ a5(); end.className = ''; }});
    }
    function a5() {
        length1.className = 'current';
        segmentE.draw(450, 700, 2, {delay: 2, callback: function(){ a6(); length1.className = ''; }});
    }
    function a6() {
        segmentB.draw(250, 250, 0.5, {delay: 3});
        segmentC.draw(250, 250, 0.5, {delay: 3});
        segmentD.draw(350, 350, 0.5, {delay: 3});
        segmentE.draw(450, 450, 0.5, {delay: 3, callback: function(){ a1(); }});
    }

    a1();
