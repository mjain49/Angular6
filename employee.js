    function addEmployee(){
       var id=document.getElementById("empid").value;
       var ename=document.getElementById("empname").value;
       var empcourse=document.getElementsByName("course");
       var course="";
       var qual=document.getElementById("Qualification").value;//DropDown
       var choice="";//for radio button

       for(i=0;i<empcourse.length;i++)
       {
          if(empcourse[i].checked==true)
            course=course+empcourse[i].value+"  ";
       }

       if(document.getElementById('yes').checked)
            choice="Yes";
       else if(document.getElementById('no').checked)
            choice="No";
            else 
               choice="Not Selected";

       alert("id="+id+"\n name="+ename+"\n Course="+course+"\n Qualification="+qual+"\n Online:"+choice);
    }