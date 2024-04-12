function szamolas(a, b){
    if (a === undefined || b === undefined || arguments.length > 2)
        return "Két paraméter szükséges!"
    if(isNaN(a) || isNaN(b))
        return "Mindkét paraméter szám legyen!"
    return Number(a) + Number(b);
}