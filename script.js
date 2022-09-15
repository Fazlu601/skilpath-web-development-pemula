// Tambahkan kode JavaScript kalian di file ini

//Tangkap data dengan dom dan kembalikan ke bentuk object
function getFormData() {
    const namaPertama = document.getElementById('first-name').value;
    const namaKedua = document.getElementById('last-name').value;
    const kota = document.getElementById('city').value;
    const kodeZip = document.getElementById('zip-code').value;
    const centang = document.getElementById('check').checked;

        return {

            firstName : namaPertama,
            lastName : namaKedua,
            city : kota,
            zipCode : kodeZip,
            check : centang
        }
}

//Validasi data dari object
function validateFormData(object) {
       
       if(object.firstName == null) return false; 
       if(object.lastName == null) return false; 
       if(object.city == null) return false; 
       if(object.zipCode == null) return false; 

       if(!checkboxIsChecked()) return false ;
          if(object.zipCode) {
           if(!isNumber(object.zipCode)) return false;
       }
       return true;
    
}

//Cek apakah input checkbox bernilai true 
function checkboxIsChecked() {
    const checks = document.getElementById('check').checked;
    if(checks){
        return true;
    }else{
        return false;
    }
}
   
//Cek apakah input number yang sudah diinput sudah berbentuk angka dan bukan string
function isNumber(value) {
    if(isNaN(value)){
        return false;
    }else{
        return true;
    }
}


function isLength(string, integer) {
    if(string.length == integer){
        return true;
    }else{
        return false;
    }
}

//Submit Form
function submit() {
    const warning = document.getElementById('warning');
    if(!validateFormData(getFormData())){
        warning.innerHTML = 'Periksa form anda sekali lagi';
    }else {
        alert(`Halo, ${getFormData().firstName} ${getFormData().lastName}. Terimakasih sudah men-submit!`);
         warning.innerHTML = '';
    }
}

//Reset 
function resetForm() {
    const form = document.getElementsByTagName('form')[0];
    form.reset();
}