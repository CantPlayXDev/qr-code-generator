const form = document.getElementById("generate-form");
const qr = document.getElementById("goes-in");

const onGenerate = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  console.log(url, size);

  if (url === ''){
    alert('please enter url');
  } else{
    // showSpinner();

    // setTimeout(() =>{
      // hideSpinner()

      generateQRCode(url,size)
    // }, 1000);
  }
};

const generateQRCode = (url,size) => {
  const qrcode = new QRCode('goes-in', {
    text: url,
    width: size, 
    height: size,
  })
}

  // const showSpinner = () => {
  //   document.getElementById('spinner').style.display = 'block'
  // }


 // const hideSpinner = () => {
  //   document.getElementById('spinner').style.display = 'none'
  // }

form.addEventListener("submit", onGenerate);
