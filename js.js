let m=+prompt("enter digit here");
count=0;
if(m>=1){
for(i=1; i<=m; i++){
    if(m%i==0){
        count++
    }
}
}
if(count==2){
    console.log(m,"is a prime number ")
}else{
    console.log(m,"is not a prime number")
}