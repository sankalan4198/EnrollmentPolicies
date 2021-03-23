function validate()
{
    var policyNumber=document.getElementById("policyNumber").value;
    var amount=document.getElementById("amount").value;
    if(policyNumber=="" || amount=="")
    document.getElementById("result").innerHTML="Policy number (or) Amount is missing";
    else
    {
        var check=validatePolicyNumber(policyNumber);
        if(check===true)
        document.getElementById("result").innerHTML=("The policy number "+policyNumber+" is enrolled successfully with Rs."+amount);
        if(check===false)
        document.getElementById("result").innerHTML=("Please, provide a valid 7 digit policy number");
    }
}
function validatePolicyNumber(policyNumber)
{
    var pattern=/^[0-9]{7}$/;
    if(!(policyNumber.match(pattern)))
    return false;
    else
    return true;
}
