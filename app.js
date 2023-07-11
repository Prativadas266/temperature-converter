let celciusinput = document.querySelector("#celcius >input")
let fahrenheitinput = document.querySelector("#fahrenheit >input")
let kelvininput = document.querySelector("#kelvin > input")
   // round(x:number): number
   // let btr the value to be rounded to the nearest integer.
      // Returns a supplied numeric expression rounded to the nearest integer.


     function roundnumber(number) {
      
        return  Math. round(number*100)/100
     } 
     let btn=document.getElementById('button')

       
     celciusinput.addEventListener('input',function(){
      let cTemp = parseFloat(celciusinput.value)
      let fTemp = (cTemp*(9/5)) + 32
      let kTemp = cTemp + 273.15

      fahrenheitinput.value = roundnumber(fTemp)
      kelvininput.value = roundnumber(kTemp)
     })

     fahrenheitinput.addEventListener('input',function(){
      let fTemp = parseFloat(fahrenheitinput.value)
      let cTemp = (fTemp - 32) * (5/9)
      let kTemp = (fTemp -32) * (5/9) + 273.15

      celciusinput.value = roundnumber(cTemp)
      kelvininput.value = roundnumber(kTemp)
     })

     kelvininput.addEventListener('input',function(){
      let kTemp = parseFloat(kelvininput.value)
      let cTemp = kTemp - 273.15
      let fTemp = (kTemp - 273.15) + (9/5) + 32

      celciusinput.value = roundnumber(cTemp)
      fahrenheitinput.value = roundnumber(fTemp)
     })

     btn.addEventListener('click',()=>{
      celciusinput.value=""
      fahrenheitinput.value=""
      kelvininput.value=""
     })