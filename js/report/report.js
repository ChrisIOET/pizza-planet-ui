/**
 * Fetch the orders and append to the table
 * 
 * ****************************
 * Please change 'json/orders.json' 
 * with your service endpoint below
 * ****************************
 */
 fetch('http://127.0.0.1:5000/report/')
 .then(response => response.json())
 .then(reports => {
     // let report = Array.from(reports)
     // console.log(typeof report)
     // console.log(reports)
     // let rows = [...reports].map(element => createReportTemplate(element));
     let rows = createReportTemplate(reports);
     // console.log(rows)
     let table = $("#report tbody");
     table.append(rows);
 });

/**
* Find the template tag and populate it with the data
* @param report 
*/
function createReportTemplate(report) {
//  const top3customerValues = report.map(element => element.top_3_customers_values);
 let template = $("#report-item-template")[0].innerHTML;
//  console.log(template, 'template')
 return Mustache.render(template, report);
}
