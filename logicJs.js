function validateInput()
    {
        if(document.getElementById("inputText").value.length>3)
        { 
            document.getElementById("btn").style.display="block";
            if(document.getElementById("inputText").value.match(/\s/g))
            {
                alert("No spaces allowed");
                document.getElementById("inputText").value=document.getElementById("inputText").value.trim();
            }
        }
        else
        {
            document.getElementById("btn").style.display="none";
            document.getElementById("ip").style.display="none";
            document.getElementById("op").style.display="none";
        }
    }
    function startReverseInputProcess()
    {
        document.getElementById("op").style.display="block";
        let textToBeReversed=document.getElementById("inputText").value;
        let givenInput=[];
        givenInput=textToBeReversed;
        
        
        let reversedstring=getReversedString(textToBeReversed);

        let requiredOutput=""; 
        for(let i=0,n=0;i<textToBeReversed.length;i++)
        {
            if(textToBeReversed.charAt(i).match(/[a-zA-Z0-9]/))
            {
                requiredOutput+=reversedstring.charAt(n++);
            }
            else
            {
                requiredOutput+=textToBeReversed.charAt(i);
            }        
        }
        document.getElementById("outputTextBox").value=requiredOutput;

    }
    function getReversedString(iptxt)
    {
        let opString="";
        for(let i=iptxt.length-1;i>=0;i--)
        {
            if(iptxt.charAt(i).match(/[a-zA-Z0-9]/))
            opString+=iptxt.charAt(i);

        }
        return opString;
    }