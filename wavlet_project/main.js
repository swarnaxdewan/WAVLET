function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value=="india")
    {
        var optionArray = ['delhi|Delhi','siliguri|Siliguri','kolkata|Kolkata','darjeeling|Darjeeling'];
    }
    if(s1.value=="usa")
    {
        var optionArray = ['newyork|New York','lasvegas|Las Vegas','chicago|Ghicago','losangeles|Los Angeles'];
    }

    for(var option in optionArray)
    {
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
    
}