    function CreateTableFromJSON() {
        var connections = [
            {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
            {
                "Device_type": "2",
                "Location": "computer",
                "IP": "125.325",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
            },
            {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
            {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
             {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
             {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
            {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
             {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
             {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
            {
                "Device_type": "1",
                "Location": "computer",
                "IP": "1254.3265",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
               
            {
                "Device_type": "3",
                "Location": "computer",
                "IP": "136.2365",
                "Health": "Fine",
                "Security": "None",
                "url":"https://www.w3schools.com/js/default.asp"
            }
        ];

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Device_type', 'Location', 'IP' ,'Security' and 'Health')
        var col = [];
        for (var i = 0; i < (connections.length); i++) {
            for (var key in connections[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < (col.length)-1; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < (connections.length); i++) {
            
            tr = table.insertRow(-1);

            for (var j = 0; j < (col.length)-1; j++) {
                var out = "";
                var tabCell = tr.insertCell(-1);
		if(j==2)
                 {
		out = '<a href="' + connections[i].url + '">' + connections[i][col[j]] + '</a><br>';

                   tabCell.innerHTML = out;}
                 else
                tabCell.innerHTML = connections[i][col[j]];
       
                       
            }
        }
       
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
       
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

