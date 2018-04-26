// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [11628, 12495, 11703, 10963, 10563, 11626, 15435, 16748, 17647, 16278, 15392, 13875, 13428, 11894, 10233, 9485, 9422, 9497, 10104, 9114, 9749, 12419, 12536, 12778, 11189, 10468, 10785, 11899, 11739, 10356, 9679, 10127], 
  type: 'scatter', 
  uid: '0c962e', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:0be6b5'
};
trace2 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [143, 174, 147, 159, 172, 188, 199, 214, 199, 187, 196, 142, 142, 107, 85, 110, 108, 144, 139, 117, 126, 172, 152, 147, 138, 132, 133, 152, 113, 102, 119, 116], 
  type: 'scatter', 
  uid: '440135', 
  visible: true, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:ce5bbf'
};
trace3 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [791, 820, 770, 722, 670, 766, 707, 671, 637, 617, 564, 542, 557, 595, 542, 569, 495, 472, 524, 472, 542, 518, 528, 590, 553, 524, 413, 477, 362, 423, 568, 628], 
  type: 'scatter', 
  uid: '46e541', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:d9fe9f'
};
trace4 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [5427, 5971, 5019, 4863, 4879, 5108, 6199, 7231, 7288, 6518, 6324, 5945, 5457, 4622, 3847, 3366, 3853, 4140, 4381, 3904, 4479, 6020, 6042, 5936, 5215, 4870, 5244, 6220, 6806, 5039, 4970, 5112], 
  type: 'scatter', 
  uid: '206bdd', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:94ab82'
};
trace5 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [5267, 5530, 5767, 5219, 4842, 5564, 8330, 8632, 9523, 8956, 8308, 7246, 7272, 6570, 5759, 5440, 4966, 4741, 5060, 4621, 4602, 5709, 5814, 6105, 5283, 4942, 4995, 5050, 4458, 4792, 4022, 4271], 
  type: 'scatter', 
  uid: '0537ee', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:578103'
};
trace6 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [89297, 90167, 88306, 92745, 92888, 83674, 91903, 91874, 91247, 87987, 87082, 81003, 79995, 76066, 66447, 58334, 65891, 65339, 67045, 65798, 63034, 65868, 62731, 59435, 56348, 50323, 52659, 62130, 60133, 57620, 60009, 59744], 
  type: 'scatter', 
  uid: '5e5442', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:52cd57'
};
trace7 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [24997, 24392, 22399, 22308, 21311, 18205, 20425, 19480, 19839, 17278, 16312, 14380, 14252, 14499, 11905, 10028, 11035, 11359, 12058, 11824, 13493, 12845, 12065, 11525, 11478, 11924, 11998, 13245, 11718, 9833, 8791, 7993], 
  type: 'scatter', 
  uid: 'a3de5c', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:5f5ea6'
};
trace8 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [7142, 7896, 8909, 11080, 12556, 12828, 13423, 13641, 13923, 14345, 14947, 11802, 12115, 11436, 10376, 10696, 12481, 13440, 13491, 15356, 17453, 19621, 18037, 14922, 12768, 9448, 11044, 13044, 13593, 12677, 12917, 13922], 
  type: 'scatter', 
  uid: 'c086fd', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:23ad28'
};
trace9 = {
  x: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016], 
  y: [57158, 57879, 56998, 59357, 59021, 52641, 58055, 58753, 57485, 56364, 55823, 54821, 53628, 50131, 44166, 37610, 42375, 40540, 41496, 38618, 32088, 33402, 32629, 32988, 32102, 28951, 29617, 35841, 34822, 35110, 38301, 37829], 
  type: 'scatter', 
  uid: 'aadaec', 
  visible: false, 
  xsrc: 'ambersong:13:080184', 
  ysrc: 'ambersong:13:bd2f80'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];
layout = {
  height:450,
  width:900,
  geo: {
    projection: {type: 'albers usa'}, 
    scope: 'usa'
  }, 
  updatemenus: [
    {
      active: 1, 
      buttons: [
        {
          args: [
            {visible: [true, false, false, false, false, false, false, false, false]}
          ], 
          label: 'Violent_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, true, false, false, false, false, false, false, false]}
          ], 
          label: 'Homicide_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, true, false, false, false, false, false, false]}
          ], 
          label: 'Forcible_Rapes_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, true, false, false, false, false, false]}
          ], 
          label: 'Robbery_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, false, true, false, false, false, false]}
          ], 
          label: 'Aggravated_Assaults_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, false, false, true, false, false, false]}
          ], 
          label: 'Property_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, false, false, false, true, false, false]}
          ], 
          label: 'Burglary_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, false, false, false, false, true, false]}
          ], 
          label: 'Vehicle_Theft_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [false, false, false, false, false, false, false, false, true]}
          ], 
          label: 'Larceny_Thefts_sum', 
          method: 'update'
        }, 
        {
          args: [
            {visible: [true, false, false, false, false, false, false, false, false]}
          ], 
          label: 'Map', 
          method: 'update'
        }
      ]
    }, 
    {
      direction: 'down', 
      showactive: true
    }
  ], 
  xaxis: {
    autorange: true, 
    range: [1985, 2016], 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [77.8333333333, 221.166666667], 
    type: 'linear'
  }
};
Plotly.plot('line_crime', {
  data: data,
  layout: layout
});