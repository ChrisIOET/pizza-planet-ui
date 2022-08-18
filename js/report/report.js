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
     let rows = createReportTemplate(reports);
     let table = $("#report tbody");
     table.append(rows);
 });

/**
* Find the template tag and populate it with the data
* @param report 
*/
function createReportTemplate(report) {
 let template = $("#report-item-template")[0].innerHTML;
 return Mustache.render(template, report);
}
