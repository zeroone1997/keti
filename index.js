 
    var jiaGe = [12000, 22098, 2200]
    var nanSum = document.getElementById("nanSum");
    var girlSum = document.getElementById("girlSum");
    var allSum = document.getElementById("allSum");
    var ShowAdd = document.getElementById("ShowAdd");
    var tb = document.getElementById('tab');


    function ALLLSum() {
        var nanSumI = nanSum.innerHTML;
        var girlSumI = girlSum.innerHTML;
        var showAllsum = parseInt(nanSumI.substring(1)) + parseInt(girlSumI.substring(1))
        allSum.innerHTML = "￥" + showAllsum;

    }

    function addtr1() {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var name, shui, i = 3;
        td.innerHTML = "<input type='checkbox' name='tianji'>";
        name = prompt("名前を入力してください：");
        td1.innerHTML = name;
        td2.innerHTML = "<input type='radio' name='TGender' value='man'>男<input type='radio' name='TGender' value='woman'>女</td>";
        shui = prompt("住民税を入力してください：");
        td3.innerHTML = "￥" + shui;

        jiaGe.push(parseInt(shui));

        tb.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        Text()
    }


    var rows = tb.rows;
    Text()           
    function Text() {
        for (var i = 1; i < rows.length; i++) {
            console.log(rows[i].children[0].children[0].checked)
            chuan(i);

            function chuan(i) {

                rows[i].children[0].children[0].onclick = function () {
                    if (this.checked == true) {
                        nan();
                        girl();
                        ALLLSum()
                        rows[0].children[3].children[0].onclick = function () {
                            rows[i].style.display = "none"
                        }
                        rows[0].children[1].children[0].onclick = function(){
                            addtr1();
                        }

                        

                    }
                }
            }
        }
    }

    function nan() {
        var NchuAdd = 0;
        for (var i = 1; i < rows.length; i++) {

            if (rows[i].children[2].children[0].checked == true) {
                NchuAdd += jiaGe[i - 1]
                nanSum.innerHTML = "￥" + NchuAdd;
                ALLLSum()
            }
        }

    }

    function girl() {
        var chuAdd = 0;
        for (var i = 1; i < rows.length; i++) {

            if (rows[i].children[2].children[1].checked == true) {
                chuAdd += jiaGe[i - 1]
                girlSum.innerHTML = "￥" + chuAdd;
                ALLLSum()
            }
        }
    }
     


