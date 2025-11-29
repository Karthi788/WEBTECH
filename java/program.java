import java.util.*;

class program{
    static  Scanner in=new Scanner(System.in);
    public static void main(String[] args){
        
        System.out.println("Enter how many Input You are going to Print: ");
        int n=in.nextInt();

        for(int i=0;i<n;i++)
        {
            System.out.println("Enter the String: ");
            String s=in.next();
            System.out.println("Enter the Number: ");
            int num=in.nextInt();
            System.out.print(s);
            int temp=num;
             int scount=0;
             int x=0;
            while(x<s.length())
            {
                scount++;
                x++;
            }
            int value=15-scount;
            for(int j=0;j<=value;j++)
            {
                System.out.print(" ");
            }
              int count=0;
            while(temp>0)
            {
                temp/=10;
                count++;
            }

            if(count==3)
            {
                System.out.print(num);
            }
            else if(count==2)
            {
                System.out.print("0"+num);
            }
            else if(count==1)
            {
                 System.out.print("00"+num);
            }
            else if(count==0)
            {
                 System.out.print("000");
            }
            else{
                 System.out.print("Invalid Value");
            }

        }

    }
}









