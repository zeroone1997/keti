class Main {
  public static void main(String[] args) {
    System.out.println("ジャンケンをします！");
    System.out.println("0はグー,1はチョキ,2はパー");
    int HW = 0;
    int bW = 0;
    while(HW<=2&&bW<=2){
       int Human = new java.util.Scanner(System.in).nextInt();
       int boot = new java.util.Random().nextInt(3);
    if(Human>2){
      System.out.println("ERROR");
      continue;
    }
    if( Human == boot){
      System.out.println("あいこ");
    }else if(Human ==0 && boot ==1 ||Human ==1 && boot == 2 ||Human == 2 &&boot ==0){
      System.out.println("かちだ!!");
      HW++;
    }else{
      System.out.println("まけだ!!");
      bW++;
      }
    }
  }
}