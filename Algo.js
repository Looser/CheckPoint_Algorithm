function chaine(S)
{

i = 0;

N_space= 1;

N_Voyel = 0;

N_Char = 1;




while(S[i] != "."){
    
    i += 1;
    
    N_Char += 1;

if(S[i] == " "  )  {N_space += 1;  N_Char -= 1; }

switch(S[i]) {
    case "a":
        N_Voyel+=1;
      break;
      case "e":
        N_Voyel+=1;
      break;
      case "o":
        N_Voyel+=1;
      break;
      case "u":
        N_Voyel+=1;
      break;
      case "i":
        N_Voyel+=1;
      break;


    default:
        N_Voyel +=0
  }

}  

return "The length of the sentence: " + N_Char + "\n"   +  "The number of words in the sentence: " + N_space + "\n"  + "The number of vowels in the sentence: " + N_Voyel ;

}



console.log(chaine("rjjj hj jhjy opm oo."));







