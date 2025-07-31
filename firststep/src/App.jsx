
//jsx: html kodlarını javascript içerisinde kullanımını sağlamak.
function App() {
  let a =15;
  const firstName="Yağmur";
  let vize1=80;
  let vize2=90;

  let isimler=[
    "Enes",
    "Ayşe",
    "Ali",
    "Ela"
  ]
   return (
  <div>
    <p>a değişkeninin değeri: {a}</p>
    <p>Müşterinin adı: {firstName}</p>
    <p>Ortalama: {(vize1+vize2)/2}</p>

    {
      (vize1+vize2)/2 >=70 ? <p>Desten geçtin</p>:<p>Desten kaldın</p>
    }

    {
      isimler.map((isim,index)=>(
        <div style={{
          backgroundColor:'pink',
          border:'1px solid black'
        }} key={index}>{isim}</div>
      ))
    }
  </div>

  )
  
}
export default App
