axios.get('table')
    .then((res)=>{
        var data = res.data.rows;
        // console.log(data)
        // var query = document.querySelectorAll('.galaxytable tbody tr')
        // console.log(query);
        var i=0;
        var sum = 0;
        for(i=0;i<data.length;i++){
            var query = document.querySelector(`.event${i}`)
            var a = query.children;
            // console.log(a
            a[1].innerText = data[i][0];
            a[2].innerText = data[i][4];
            a[3].innerText = data[i][5];
            a[4].innerText = data[i][3];
            a[5].innerText = data[i][2];
            a[6].innerText = data[i][1];

            


        }

    })