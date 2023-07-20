

        function call(){
            function calculateRemark(parameter) {
                let remark = "";
                if (parameter > 70) {
                    remark = "D";
                } else if (parameter < 33) {
                    remark = "*";
                }
                return remark;
            }
        var firstName=FN.value
        var lastName=LN.value
        var fathersName=fathersN.value
        var enrollmentNum= EN.value
        var school_name=schoolName.value
        var Gen=Gender.value
        var Dob=dob.value
        var phyMarks=Physics.value
        var chemMarks=chemistry.value
        var mathsMarks=Maths.value
        var engMarks=English.value
        var hindiMarks=Hindi.value
        
        let name = "";
                    if (Gen === "M") {
                        name = `Master ${firstName} ${lastName} S/O ${fathersName}`;
                    } else {
                        name = `Miss ${firstName} ${lastName} D/O ${fathersName}`;
                    }

                    let phyRemark = calculateRemark(phyMarks);
                let chemRemark = calculateRemark(chemMarks);
                let mathsRemark = calculateRemark(mathsMarks);
                let engRemark = calculateRemark(engMarks);
                let hindiRemark = calculateRemark(hindiMarks);
                let totalMarks=parseInt(phyMarks)+parseInt(chemMarks)+parseInt(mathsMarks)+parseInt(engMarks)+parseInt(hindiMarks)
            
        var hey=`<table width='50%' border='1'cellspacing='5px' cellpadding='8px' align='center'>
            <tr><th><img src="cbselogo.png" width='70'></th><th><h2>Central Board of Secondary Education<br>केन्द्रीय माध्यमिक शिक्षा बोर्ड</h2></th></tr></table>

            <table width='50%' border='1'cellspacing='5px' cellpadding='8px' align='center' >
            <tr><td><h3 width='70'>Enrollment Number : ${enrollmentNum}</h3></td></tr>
            <tr><td ><h3>${name}</h3></td></tr>
            <tr><td>School :${school_name} </td><td>Date of birth : ${Dob}</td></tr>
            </table>
            
            <table width='50%' border='1'cellspacing='5px' cellpadding='8px' align='center'>
                <th>Subject Codes</th><th>Subject Name</th><th>Min Marks</th><th>MaxMarks</th>
                <th>Marks Obtained</th><th>Remark</th>
                <tr>
                    <td>230406</td><td>Physics</td><td>35</td><td>100</td><td>${phyMarks}</td><td>${phyRemark}</td>
                    </tr>
                    <tr>
                    <td>230306</td><td>Chemistry</td><td>35</td><td>100</td><td>${chemMarks}</td><td>${chemRemark}</td>
                    </tr>
                    <tr>
                    <td>230405</td><td>Maths</td><td>35</td><td>100</td><td>${mathsMarks}</td><td>${mathsRemark}</td>
                    </tr>
                    <tr>
                    <td>214406</td><td>English</td><td>35</td><td>100</td><td>${engMarks}</td><td>${engRemark}</td>
                    </tr>
                    
                    <tr>
                    <td>202033</td><td>Hindi</td><td>35</td><td>100</td><td>${hindiMarks}</td><td>${hindiRemark}</td>
                    </tr>
                    
                </table>
                
                <table width='50%' border='1'cellspacing='5px' cellpadding='8px' align='center'>
                    <tr><td>Total marks Obtained(out of 500)</td><td>${totalMarks}</td></tr>
                    <tr><td>Percentage </td><td>${totalMarks/5}%</td></tr></table>`
        document.getElementById("result").innerHTML=hey
        
        }
