


function studentGrades() {
  var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

  scoresMinMax = scores.sort( function( previous ,next ) {
  return previous - next;
  });

  var gradeTotals = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  }

  for ( var i = 0 ; i < scores.length ; i++ ) {

    var grade = scores[i];
  	switch( true ) {
      case ( grade > 90 ):
        console.log("A");
        gradeTotals.A += 1;
        break;
      case ( grade > 80 ):
        console.log("B");
        gradeTotals.B += 1;
        break;
      case ( grade > 70 ):
        console.log("C");
        gradeTotals.C += 1;
        break;
      case ( grade > 60 ):
        console.log("D");
        gradeTotals.D += 1;
        break;
      case ( grade > 50 ):
        console.log("F");
        gradeTotals.F += 1;
        break;
      default:
        console.log("Dunno");
  	}
  }
  console.log( gradeTotals, scoresMinMax );
}

studentGrades();
