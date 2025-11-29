class ReverseWords
{
    public static void main(String[] args) 
    {
        String sen="Hari is Gay";
        char[] res=sen.toCharArray();

        String result="";
        String word="";

        for(int i=0;i<res.length;i++)
        {
            if(res[i]!=' ')
            {
                word+=res[i];
            }
            else{
                result=word+" "+result;
                word="";
            }
        }
        result=word+" "+result;

        System.out.println(result);
       
    }
}