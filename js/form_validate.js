const formulario = document.getElementById('form_asamblea');
const inputs = document.querySelectorAll('#form_asamblea input');
const select = document.querySelectorAll('#form_asamblea select');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,100}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numero: /^\d{5,12}$/ // 7 a 14 numeros.
}
const validaciones_key = {
    nombre_empresa_key: 0,
    nit_empresa: 0,
    primer_nombre: 0,
    numero_documento_apoderao: 0,
    tipo_documento_apoderado: 0,
    segundo_nombre: 0,
    primer_apellido: 0,
    segundo_apellido: 0,
    tipo_documento: 0,
    numero_documento: 0,
    primer_nombre_apoderado: 0,
    segundo_nombre_apoderado: 0,
    primer_apellido_apoderado: 0,
    segundo_apellido_apoderado: 0,
    tipo_documento_apoderado: 0,
    numero_documento_apoderao: 0,
    confirmar_correo_electronico_1: 0,
    confirmar_correo_electronico_2: 0,
    numerocelular1: 0,
    numerocelular2: 0,
    numerocelular3: 0,

}
function checkPattern(pattern, input) {
    var elem = input;
    var re = new RegExp(pattern);
    return re.test(elem.value);
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "numero_de_documento_apoderado":
            const value_select = document.getElementById("edit-tipo-de-documento-de-identidad-apoderado");

            if ("Pasaporte" == value_select.value) {
                const pattern12 = "^[a-zA-Z0-9\_\-]{3,15}$"
                const input12 = document.getElementById("edit-numero-de-documento-apoderado");
                const response12 = checkPattern(pattern12, input12);
                if (response12) {
                    validaciones_key.numero_documento_apoderao = 0;
                    input12.classList.remove('form_group-incorrecto');
                } else {
                    validaciones_key.numero_documento_apoderao = 1;
                    input12.classList.add('form_group-incorrecto');
                }
            } else {
                const pattern12 = "^[0-9_-]{3,15}$"
                const input12 = document.getElementById("edit-numero-de-documento-apoderado");
                const response12 = checkPattern(pattern12, input12);
                if (response12) {
                    validaciones_key.numero_documento_apoderao = 0;
                    input12.classList.remove('form_group-incorrecto');
                } else {
                    validaciones_key.numero_documento_apoderao = 1;
                    input12.classList.add('form_group-incorrecto');
                }
            }

            break;
        case "tipo_de_documento_de_identidad_apoderado":
            const value11 = e.target.options[e.target.selectedIndex].value;
            const input11 = document.getElementById("edit-tipo-de-documento-de-identidad-apoderado");

            if ("" == value11) {
                input11.classList.add('form_group-incorrecto');
                validaciones_key.tipo_documento_apoderado = 1;
            } else {
                input11.classList.remove('form_group-incorrecto');
                validaciones_key.tipo_documento_apoderado = 0;
            }
            break;
        
        case "primer_apellido_apoderado":
            const pattern9 = "^([a-zA-Z_-ÿ\u00f1\u00d1]){3,15}$"
            const input9 = document.getElementById("edit-primer-apellido-apoderado");
            const response9 = checkPattern(pattern9, input9)
            if (response9) {
                validaciones_key.primer_apellido_apoderado = 0;
                input9.classList.remove('form_group-incorrecto');
            } else {
                validaciones_key.primer_apellido_apoderado = 1;
                input9.classList.add('form_group-incorrecto');
            }
            break;
        
        case "primer_nombre_apoderado":
            const pattern7 = "^([a-zA-Z_-ÿ\u00f1\u00d1]){3,15}$"
            const input7 = document.getElementById("edit-primer-nombre-apoderado");
            const response7 = checkPattern(pattern7, input7)
            if (response7) {
                validaciones_key.primer_nombre_apoderado = 0;
                input7.classList.remove('form_group-incorrecto');
            } else {
                validaciones_key.primer_nombre_apoderado = 1;
                input7.classList.add('form_group-incorrecto');
            }
            break;

        case "numero_de_documento":
            const value_select_re = document.getElementById("edit-tipo-de-documento-de-identidad");

            if ("Pasaporte" == value_select_re.value) {
                const pattern6 = "^[a-zA-Z0-9\_\-]{3,15}$";
                const input6 = document.getElementById("edit-numero-de-documento");
                const response6 = checkPattern(pattern6, input6)
                if (response6) {
                    validaciones_key.numero_documento = 0;
                    input6.classList.remove('form_group-incorrecto');
                } else {
                    validaciones_key.numero_documento = 1;
                    input6.classList.add('form_group-incorrecto');
                }
            }else{
                const pattern6 = "^[0-9_-]{3,15}$";
                const input6 = document.getElementById("edit-numero-de-documento");
                const response6 = checkPattern(pattern6, input6)
                if (response6) {
                    validaciones_key.numero_documento = 0;
                    input6.classList.remove('form_group-incorrecto');
                } else {
                    validaciones_key.numero_documento = 1;
                    input6.classList.add('form_group-incorrecto');
                }
            }
            
            break;
        case "tipo_de_documento_de_identidad":
            const value = e.target.options[e.target.selectedIndex].value;
            const input5 = document.getElementById("edit-tipo-de-documento-de-identidad");

            if ("" == value) {
                input5.classList.add('form_group-incorrecto');
                validaciones_key.tipo_documento = 1;
            } else {
                input5.classList.remove('form_group-incorrecto');
                validaciones_key.tipo_documento = 0;
            }
            break;
        
        case "primer_apellido_de_representante_legal":
            const pattern3 = "^([a-zA-Z_-ÿ\u00f1\u00d1]){3,15}$";
            const input3 = document.getElementById("edit-primer-apellido-de-representante-legal");
            const response3 = checkPattern(pattern3, input3)
            if (response3) {
                validaciones_key.primer_apellido = 0;
                input3.classList.remove('form_group-incorrecto');
            } else {
                validaciones_key.primer_apellido = 1;
                input3.classList.add('form_group-incorrecto');
            }
            break;
        
        case "primer_nombre_de_representante_legal":
            const pattern1 = "^([a-zA-Z_-ÿ\u00f1\u00d1]){3,15}$";
            const input1 = document.getElementById("edit-primer-nombre-de-representante-legal");
            const response1 = checkPattern(pattern1, input1)
            if (response1) {
                validaciones_key.primer_nombre = 0;
                input1.classList.remove('form_group-incorrecto');
            } else {
                validaciones_key.primer_nombre = 1;
                input1.classList.add('form_group-incorrecto');
            }
            break;
        case "nombre_empresa_":
            if (e.target.value == "") {
                document.getElementById('edit-nombre-empresa-').classList.add('form_group-incorrecto');
                validaciones_key.nombre_empresa_key = 1;
            } else {
                document.getElementById('edit-nombre-empresa-').classList.remove('form_group-incorrecto');
                validaciones_key.nombre_empresa_key = 0;
            }
            break;
        case "nit_empresa":
            if (expresiones.numero.test(e.target.value)) {
                document.getElementById('edit-nit-empresa').classList.remove('form_group-incorrecto');
                document.getElementById('text-count-message').classList.add('hidden');
                validaciones_key.nit_empresa = 0;
            } else {
                document.getElementById('text-count-message').classList.remove('hidden');
                document.getElementById('edit-nit-empresa').classList.add('form_group-incorrecto');
                validaciones_key.nit_empresa = 1;
            }
            break;
        case "confirmar_correo_electronico_1[mail_2]":
            const inputMail1 = document.getElementById('edit-confirmar-correo-electronico-1-mail-1');
            const inputMail2 = document.getElementById('edit-confirmar-correo-electronico-1-mail-2');
            if (inputMail2.value == inputMail1.value) {
                document.getElementById('edit-confirmar-correo-electronico-1-mail-2').classList.remove('form_group-incorrecto');
                document.getElementById('edit-confirmar-correo-electronico-1-mail-1').classList.remove('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_1 = 0;
                document.getElementById('text-count-message-mail').classList.add('hidden');
            } else {
                document.getElementById('text-count-message-mail').classList.remove('hidden');
                document.getElementById('edit-confirmar-correo-electronico-1-mail-2').classList.add('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_1 = 1;


            }
            if (inputMail1.value == inputMail2.value) {
                document.getElementById('text-count-message-mail').classList.add('hidden');
                document.getElementById('edit-confirmar-correo-electronico-1-mail-1').classList.remove('form_group-incorrecto');
                document.getElementById('edit-confirmar-correo-electronico-1-mail-2').classList.remove('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_1 = 0;
            }
            break;

        case "confirmar_numero_celular":
            const inpuTel1 = document.getElementById('edit-numero-celular');
            const inpuTel2 = document.getElementById('edit-confirmar-numero-celular');
            if (inpuTel2.value == inpuTel1.value) {
                document.getElementById('edit-confirmar-numero-celular').classList.remove('form_group-incorrecto');
                document.getElementById('edit-numero-celular').classList.remove('form_group-incorrecto');
                validaciones_key.numerocelular2 = 0;
                document.getElementById('text-count-message-tel').classList.add('hidden');
            } else {
                document.getElementById('text-count-message-tel').classList.remove('hidden');
                document.getElementById('edit-confirmar-numero-celular').classList.add('form_group-incorrecto');
                validaciones_key.numerocelular2 = 1;
            }
            if (inpuTel1.value == inpuTel2.value) {
                document.getElementById('text-count-message-tel').classList.add('hidden');
                document.getElementById('edit-numero-celular').classList.remove('form_group-incorrecto');
                document.getElementById('edit-confirmar-numero-celular').classList.remove('form_group-incorrecto');
                validaciones_key.numerocelular2 = 0;
            }
            break;
        case "correo_electronico_del_apoderado_1[mail_2]":
            const inputMail3 = document.getElementById('edit-correo-electronico-del-apoderado-1-mail-1');
            const inputMail4 = document.getElementById('edit-correo-electronico-del-apoderado-1-mail-2');
            if (inputMail4.value == inputMail3.value) {
                document.getElementById('edit-correo-electronico-del-apoderado-1-mail-2').classList.remove('form_group-incorrecto');
                document.getElementById('edit-correo-electronico-del-apoderado-1-mail-1').classList.remove('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_2 = 0;
                document.getElementById('text-count-message-maila').classList.add('hidden');
            } else {
                document.getElementById('text-count-message-maila').classList.remove('hidden');
                document.getElementById('edit-correo-electronico-del-apoderado-1-mail-2').classList.add('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_2 = 1;


            }
            if (inputMail3.value == inputMail4.value) {
                document.getElementById('text-count-message-maila').classList.add('hidden');
                document.getElementById('edit-correo-electronico-del-apoderado-1-mail-1').classList.remove('form_group-incorrecto');
                document.getElementById('edit-correo-electronico-del-apoderado-1-mail-2').classList.remove('form_group-incorrecto');
                validaciones_key.confirmar_correo_electronico_2 = 0;
            }
            break;
        case "confirmar_numero_celular_apoderado":
            const inpuTel3 = document.getElementById('edit-numero-celular-apoderado1');
            const inpuTel4 = document.getElementById('edit-confirmar-numero-celular-apoderado');
            if (inpuTel4.value == inpuTel3.value) {
                document.getElementById('edit-confirmar-numero-celular-apoderado').classList.remove('form_group-incorrecto');
                document.getElementById('edit-numero-celular-apoderado1').classList.remove('form_group-incorrecto');
                validaciones_key.numerocelular3 = 0;
                document.getElementById('text-count-message-tela').classList.add('hidden');
            } else {
                document.getElementById('text-count-message-tela').classList.remove('hidden');
                document.getElementById('edit-confirmar-numero-celular-apoderado').classList.add('form_group-incorrecto');
                validaciones_key.numerocelular3 = 1;

            }
            if (inpuTel3.value == inpuTel4.value) {
                document.getElementById('text-count-message-tela').classList.add('hidden');
                document.getElementById('edit-numero-celular-apoderado1').classList.remove('form_group-incorrecto');
                document.getElementById('edit-confirmar-numero-celular-apoderado').classList.remove('form_group-incorrecto');
                validaciones_key.numerocelular3 = 0;

            }
            break;
    }

    disbaled_button(validaciones_key);

}

function disbaled_button(item) {
    let items = Object.values(item);
    let values = items.includes(1);
    if (values == true) {
        document.getElementById('edit-submit').classList.add('disabled');
        document.getElementById('edit-submit').setAttribute('disabled', true);
    } else {
        document.getElementById('edit-submit').classList.remove('disabled');
        document.getElementById('edit-submit').removeAttribute('disabled');
    }

}

function typedoc() {
    var i = document.getElementById("edit-tipo-de-documento-de-identidad").selectedIndex;
    if (i == 2) {
        document.getElementById("edit-numero-de-documento").setAttribute('pattern', "^[a-zA-Z0-9\_\-]{3,15}$");
    } else {
        document.getElementById("edit-numero-de-documento").setAttribute('pattern', "^[0-9_-]{3,15}$");
    }
}
function typedocasis() {
    var i = document.getElementById("edit-tipo-de-documento-de-identidad-apoderado").selectedIndex;
    if (i == 2) {
        document.getElementById("edit-numero-de-documento-apoderado").setAttribute('pattern', "^[a-zA-Z0-9\_\-]{3,15}$");
    } else {
        document.getElementById("edit-numero-de-documento-apoderado").setAttribute('pattern', "^[0-9_-]{3,15}$");
    }
}
function asist() {
    var j = document.getElementById("edit-asiste").selectedIndex;
    if (j == 2) {
        var allEls = document.getElementsByClassName("is-asist");
        for (var i = 0; i < allEls.length; i++) {
            allEls[i].classList.remove('is-hidden');
        }
    } else {
        var allEls = document.getElementsByClassName("is-asist");
        for (var i = 0; i < allEls.length; i++) {
            allEls[i].classList.add('is-hidden');
        }
    }
}
function countChars(obj) {
    var maxLength = 100;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    if (charRemain < 0) {
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLength + ' caracteres</span>';
    } else {
        document.getElementById("charNum").innerHTML = charRemain + ' caracter(s) restante';
    }
}
function countCharsn(objn) {
    var maxLengthn = 15;
    var strLengthn = objn.value.length;
    var charRemainn = (maxLengthn - strLengthn);
    if (charRemainn < 0) {
        document.getElementById("charNam").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengthn + ' caracteres</span>';
    } else {
        document.getElementById("charNam").innerHTML = charRemainn + ' caracter(s) restante';
    }
}
function countCharss(objs) {
    var maxLengths = 15;
    var strLengths = objs.value.length;
    var charRemains = (maxLengths - strLengths);
    if (charRemains < 0) {
        document.getElementById("charNaml").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengths + ' caracteres</span>';
    } else {
        document.getElementById("charNaml").innerHTML = charRemains + ' caracter(s) restante';
    }
}
function countCharsa1(obja1) {
    var maxLengtha1 = 15;
    var strLengtha1 = obja1.value.length;
    var charRemaina1 = (maxLengtha1 - strLengtha1);
    if (charRemaina1 < 0) {
        document.getElementById("charApe1").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha1 + ' caracteres</span>';
    } else {
        document.getElementById("charApe1").innerHTML = charRemaina1 + ' caracter(s) restante';
    }
}
function countCharsa(obja) {
    var maxLengtha = 15;
    var strLengtha = obja.value.length;
    var charRemaina = (maxLengtha - strLengtha);
    if (charRemaina < 0) {
        document.getElementById("charApe").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha + ' caracteres</span>';
    } else {
        document.getElementById("charApe").innerHTML = charRemaina + ' caracter(s) restante';
    }
}
function countCharAsis1(obja1) {
    var maxLengtha1 = 15;
    var strLengtha1 = obja1.value.length;
    var charRemaina1 = (maxLengtha1 - strLengtha1);
    if (charRemaina1 < 0) {
        document.getElementById("charAsis1").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha1 + ' caracteres</span>';
    } else {
        document.getElementById("charAsis1").innerHTML = charRemaina1 + ' caracter(s) restante';
    }
}
function countCharAsis2(obja2) {
    var maxLengtha2 = 15;
    var strLengtha2 = obja2.value.length;
    var charRemaina2 = (maxLengtha2 - strLengtha2);
    if (charRemaina2 < 0) {
        document.getElementById("charAsis2").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha2 + ' caracteres</span>';
    } else {
        document.getElementById("charAsis2").innerHTML = charRemaina2 + ' caracter(s) restante';
    }
}
function countCharAsis3(obja3) {
    var maxLengtha3 = 15;
    var strLengtha3 = obja3.value.length;
    var charRemaina3 = (maxLengtha3 - strLengtha3);
    if (charRemaina3 < 0) {
        document.getElementById("charAsis3").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha3 + ' caracteres</span>';
    } else {
        document.getElementById("charAsis3").innerHTML = charRemaina3 + ' caracter(s) restante';
    }
}
function countCharAsis4(obja4) {
    var maxLengtha4 = 15;
    var strLengtha4 = obja4.value.length;
    var charRemaina4 = (maxLengtha4 - strLengtha4);
    if (charRemaina4 < 0) {
        document.getElementById("charAsis4").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLengtha4 + ' caracteres</span>';
    } else {
        document.getElementById("charAsis4").innerHTML = charRemaina4 + ' caracter(s) restante';
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);

});

select.forEach((select) => {
    select.addEventListener('change', validateForm);
});
