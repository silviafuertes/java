function registro() {

    let c1, c2, c3, c4, c5, c6, c7, c8;
    c1 = document.getElementById("nom").value;
    c2 = parseInt(document.getElementById("id").value);
    c3 = (document.getElementById("dir").value);
    c4 = parseInt(document.getElementById("tel").value);
    c5 = parseInt(document.getElementById("rol").value);
    c6 = parseInt(document.getElementById("edad").value);
    c7 = parseInt(document.getElementById("paMinima").value);
    c8 = parseInt(document.getElementById("paMaxima").value);

    if (c1 == '') {
        alert('Nombre no puede ser vacío');
    } else if (c2 == 0 || c2 == '') {
        alert('Número de documento no puede ser vacío');
    } else if (c3 == 0 || c3 == '') {
        alert('Dirección no puede ser vacío');
    } else if (c4 == 0 || c4 == '') {
        alert('Número de documento no puede ser vacío');
    } else if (c6 == 0 || c6 == '') {
        alert('Edad no puede ser vacío');
    } else if (c7 == 0 || c7 == '') {
        alert('Presión arterial mínima no puede ser vacío');
    } else if (c8 == 0 || c8 == '') {
        alert('Presión arterial+ máxima no puede ser vacío');
    } else {
        let categoria = '';
        if (c8 <= 90 && c7 <= 60) {
            categoria = 'Hipotensión';
        } else if (c8 >= 91 && c8 <= 120 && c7 >= 61 && c7 <= 79) {
            categoria = 'Normal';
        } else if (c8 >= 121 && c8 <= 129 && c7 < 80) {
            categoria = 'Elevada';
        } else if (c8 >= 130 && c8 <= 139 && c7 >= 80 && c7 <= 89) {
            categoria = 'Etapa 1 de Hipertensión';
        } else if (c8 >= 140 && c8 < 180 && c7 >= 90 && c7 <= 120) {
            categoria = 'Etapa 2 de Hipertensión';
        } else if (c8 >= 180 && c7 > 120) {
            categoria = 'Crisis Hipertensiva';
        } else {
            categoria = 'Datos no categorizados';
        }

        document.getElementById('respuesta').innerHTML = 'Presión Arterial: ' + categoria;
        return false;
    }
}

function inmc() {
    let c9, c10, res;
    c9 = parseFloat(document.getElementById("peso").value);
    c10 = parseFloat(document.getElementById("estatura").value);

    if (c9 == 0 || c9 == '') {
        alert('Peso no puede ser vacío');
    } else if (c10 == 0 || c10 == '') {
        alert('estatura no puede ser vacío');
    } else {
        let imco = parseFloat(c9 / (c10 * c10));

        if (Number(imco) <= 18.5) {
            res = 'Peso inferior al Normal';

        } else if (Number(imco) > 18.5 && Number(imco) <= 24.9) {
            res = 'Normal';
        } else if (Number(imco) > 24.9 && Number(imco) <= 29.9) {
            res = 'Peso superior al Normal';
        } else if (Number(imco) > 29.9) {
            res = 'Obesidad';
        }
        document.getElementById('respuesta').innerHTML = 'Indice de Masa Corporal: ' + res;
    }
    return false;
}


function whr() {
    let c9, c10, res, rol;
    rol = parseInt(document.getElementById("rol").value);
    c9 = parseFloat(document.getElementById("cintura").value);
    c10 = parseFloat(document.getElementById("cadera").value);

    if (c9 == 0 || c9 == '') {
        alert('Valor de cintura no puede ser vacío');
    } else if (c10 == 0 || c10 == '') {
        alert('Valor de cadera no puede ser vacío');
    } else {
        let val = parseFloat(c9 / c10);
        if (rol == 1) {
            if (Number(val) <= 0.80) {
                res = 'Bajo';
            } else if (Number(val) > 0.80 && Number(val) <= 0.85) {
                res = 'Moderado';
            } else if (Number(val) > 0.85) {
                res = 'Alto';
            }
        } else {
            if (Number(val) <= 0.95) {
                res = 'Bajo';
            } else if (Number(val) > 0.95 && Number(val) <= 1) {
                res = 'Moderado';
            } else if (Number(val) > 1) {
                res = 'Alto';
            }
        }
        document.getElementById('respuesta').innerHTML = 'Relación Cintura-Cadera: ' + res;
    }
    return false;
}

function whtr() {
    let c9, c10, res, rol;
    rol = parseInt(document.getElementById("rol").value);
    c9 = parseFloat(document.getElementById("cintura").value);
    c10 = parseFloat(document.getElementById("estatura").value);

    if (c9 == 0 || c9 == '') {
        alert('Valor de cintura no puede ser vacío');
    } else if (c10 == 0 || c10 == '') {
        alert('Valor de estatura no puede ser vacío');
    } else {
        let val = parseFloat(c9 / (c10 * 100));
        if (rol == 1) {
            if (Number(val) <= 0.42) {
                res = 'Bajo Peso';
            } else if (Number(val) > 0.42 && Number(val) <= 0.48) {
                res = 'Peso Saludable';
            } else if (Number(val) > 0.48 && Number(val) <= 0.57) {
                res = 'Sobrepeso';
            } else if (Number(val) > 0.57) {
                res = 'Obesidad';
            }
        } else {
            if (Number(val) <= 0.43) {
                res = 'Bajo Peso';
            } else if (Number(val) > 0.43 && Number(val) <= 0.52) {
                res = 'Peso Saludable';
            } else if (Number(val) > 0.52 && Number(val) <= 0.62) {
                res = 'Sobrepeso';
            } else if (Number(val) > 0.62) {
                res = 'Obesidad';
            }

        }
        alert(val);
        document.getElementById('respuesta').innerHTML = 'Relación Cintura-Estatura: ' + res;
    }
    return false;
}